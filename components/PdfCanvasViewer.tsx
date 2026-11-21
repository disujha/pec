'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Loader2, ZoomIn, ZoomOut } from 'lucide-react';

interface PdfCanvasViewerProps {
  pdfUrl: string;
}

const INITIAL_PAGE_BATCH = 5;
const PAGE_BATCH_INCREMENT = 5;

export function PdfCanvasViewer({ pdfUrl }: PdfCanvasViewerProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [visiblePages, setVisiblePages] = useState(INITIAL_PAGE_BATCH);
  const [scale, setScale] = useState(1.25);
  const [loading, setLoading] = useState(true);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState('');
  const [pdfDoc, setPdfDoc] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;
    let loadedDoc: any = null;

    async function loadPdf() {
      try {
        setLoading(true);
        setError('');
        setNumPages(0);
        setVisiblePages(INITIAL_PAGE_BATCH);
        setPdfDoc(null);

        // Polyfill Promise.withResolvers for browsers that don't support it yet
        if (typeof (Promise as any).withResolvers !== 'function') {
          (Promise as any).withResolvers = function () {
            let resolve: any;
            let reject: any;
            const promise = new Promise((res, rej) => {
              resolve = res;
              reject = rej;
            });
            return { promise, resolve, reject };
          };
        }

        const res = await fetch(pdfUrl, { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`Failed to load PDF (HTTP ${res.status})`);
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
        loadedDoc = doc;
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
      if (loadedDoc) {
        try {
          loadedDoc.destroy?.();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [pdfUrl]);

  useEffect(() => {
    let cancelled = false;

    async function renderPages() {
      const container = containerRef.current;
      if (!pdfDoc || !container) return;

      setRendering(true);
      container.innerHTML = '';
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pagesToRender = Math.min(visiblePages, pdfDoc.numPages);

      try {
        for (let pageNum = 1; pageNum <= pagesToRender; pageNum++) {
          if (cancelled) return;
          const page = await pdfDoc.getPage(pageNum);
          if (cancelled) return;

          const unscaledViewport = page.getViewport({ scale: 1 });
          const maxAvailableWidth = Math.max(container.clientWidth - 24, 280);
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
      } catch (err: any) {
        if (!cancelled) {
          console.error('PdfCanvasViewer render error:', err);
        }
      } finally {
        if (!cancelled) setRendering(false);
      }
    }

    renderPages();
    return () => {
      cancelled = true;
    };
  }, [pdfDoc, scale, visiblePages]);

  const handleScroll = () => {
    const el = scrollAreaRef.current;
    if (!el || rendering || visiblePages >= numPages) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 400) {
      setVisiblePages((prev) => Math.min(numPages, prev + PAGE_BATCH_INCREMENT));
    }
  };

  const renderedCount = Math.min(visiblePages, numPages);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 text-xs text-gray-600 shrink-0">
        <span>
          {numPages > 0
            ? numPages > renderedCount
              ? `Showing ${renderedCount} of ${numPages} Pages`
              : `${numPages} ${numPages === 1 ? 'Page' : 'Pages'}`
            : error
              ? 'Preview unavailable'
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
      <div
        ref={scrollAreaRef}
        onScroll={handleScroll}
        className="flex-1 overflow-auto p-4 sm:p-6"
      >
        {loading && (
          <div className="h-full flex flex-col items-center justify-center gap-2 text-gray-500">
            <Loader2 className="h-7 w-7 animate-spin text-primary" />
            <span className="text-sm">Rendering PDF preview...</span>
          </div>
        )}

        {!loading && error && (
          <div className="h-full flex flex-col items-center justify-center gap-3 text-center px-4">
            <p className="text-sm text-red-600 font-medium">{error}</p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open PDF in New Tab
            </a>
          </div>
        )}

        <div ref={containerRef} className="space-y-4" />

        {!loading && !error && numPages > renderedCount && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              disabled={rendering}
              onClick={() =>
                setVisiblePages((prev) =>
                  Math.min(numPages, prev + PAGE_BATCH_INCREMENT)
                )
              }
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-pec-navy bg-white border border-gray-300 rounded-lg shadow-xs hover:bg-gray-50 disabled:opacity-50"
            >
              {rendering ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Rendering pages...
                </>
              ) : (
                `Load More Pages (${renderedCount} of ${numPages} shown)`
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
