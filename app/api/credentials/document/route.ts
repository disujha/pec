import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ADMIN_API_BASE = (
  process.env.CREDENTIALS_API_BASE ||
  process.env.NEXT_PUBLIC_CREDENTIALS_API_BASE ||
  (process.env.NODE_ENV === 'production'
    ? 'https://admin.pecengg.com'
    : 'http://localhost:3000')
).replace(/\/$/, '');

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || '';
    const id = searchParams.get('id') || '';
    const download = searchParams.get('download') || '';

    if (!type || !id) {
      return NextResponse.json({ error: 'Missing type or id' }, { status: 400 });
    }

    const qs = new URLSearchParams({ type, id });
    if (download === '1') qs.set('download', '1');

    const upstream = await fetch(
      `${ADMIN_API_BASE}/api/credentials/document?${qs.toString()}`,
      { cache: 'no-store', redirect: 'manual' }
    );

    if (upstream.status >= 300 && upstream.status < 400) {
      const location = upstream.headers.get('location');
      if (location) {
        return NextResponse.redirect(location, 302);
      }
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { error: 'Document not available' },
        { status: upstream.status }
      );
    }

    const buffer = await upstream.arrayBuffer();
    const headers = new Headers();
    const contentType = upstream.headers.get('content-type');
    const contentDisposition = upstream.headers.get('content-disposition');
    if (contentType) headers.set('Content-Type', contentType);
    if (contentDisposition) headers.set('Content-Disposition', contentDisposition);
    headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');

    return new NextResponse(buffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error proxying /api/credentials/document:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve document' },
      { status: 502 }
    );
  }
}
