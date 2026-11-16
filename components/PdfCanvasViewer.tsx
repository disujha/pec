'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2, ZoomIn, ZoomOut } from 'lucide-react';

interface PdfCanvasViewerProps {
  pdfUrl: string;
}

export function PdfCanvasViewer({ pdfUrl }: PdfCanvasViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1.25);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pdfDoc, setPdfDoc] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setLoading(true);
        setError('');
        setNumPages(0);

        const res = await fetch(pdfUrl, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`Failed to load PDF (${res.status})`);
        }
        const arrayBuffer = await res.arrayBuffer();

        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

        const loadingTask = pdfjsLib.getDocument({
          data: new Uint8Array(arrayBuffer),
        });
        const doc = await loadingTask.promise;
        if (cancelled) {
          doc.destroy?.();
          return;
        }
        setPdfDoc(doc);
        setNumPages(doc.numPages);
      } catch (err: any) {
        if (!cancelled) {
          console.error('PdfCanvasViewer error:', err);
          setError(err?.message || 'Unable to render PDF.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPdf();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  useEffect(() => {
    let cancelled = false;

    async function renderPages() {
      const container = containerRef.current;
      if (!pdfDoc || !container) return;

      container.innerHTML = '';
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        if (cancelled) return;
        const page = await pdfDoc.getPage(pageNum);
        if (cancelled) return;

        // Fit cleanly to container width on narrow screens
        const unscaledViewport = page.getViewport({ scale: 1 });
        const maxAvailableWidth = Math.max(container.clientWidth - 32, 280);
        const fitScale = Math.min(scale, maxAvailableWidth / unscaledViewport.width);
        const effectiveScale =
          window.innerWidth < 768 ? fitScale : scale;

        const viewport = page.getViewport({ scale: effectiveScale });
        const wrapper = document.createElement('div');
        wrapper.className =
          'bg-white shadow-md rounded-md overflow-hidden border border-gray-200 mx-auto';
        wrapper.style.width = `${Math.floor(viewport.width)}px`;

        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        canvas.className = 'block';

        wrapper.appendChild(canvas);
        container.appendChild(wrapper);

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          await page.render({ canvasContext: ctx, viewport }).promise;
        }
      }
    }

    renderPages();
    return () => {
      cancelled = true;
    };
  }, [pdfDoc, scale]);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 text-xs text-gray-600 shrink-0">
        <span>
          {numPages > 0
            ? `${numPages} ${numPages === 1 ? 'Page' : 'Pages'}`
            : 'Loading document...'}
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(0.6, +(s - 0.2).toFixed(2)))}
            className="p-1.5 rounded hover:bg-gray-100 text-gray-700"
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="w-12 text-center font-medium">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(2.5, +(s + 0.2).toFixed(2)))}
            className="p-1.5 rounded hover:bg-gray-100 text-gray-700"
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Pages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {loading && (
          <div className="h-full flex flex-col items-center justify-center gap-2 text-gray-500">
            <Loader2 className="h-7 w-7 animate-spin text-primary" />
            <span className="text-sm">Rendering PDF preview...</span>
          </div>
        )}

        {!loading && error && (
          <div className="h-full flex items-center justify-center text-sm text-red-600">
            {error}
          </div>
        )}

        <div ref={containerRef} className="space-y-4" />
      </div>
    </div>
  );
}
