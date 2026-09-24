'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log non-sensitive error state
  }, [error]);

  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h2 className="text-lg font-bold text-slate-900 font-serif">
        Terjadi Kendala
      </h2>
      <p className="text-xs text-slate-500 mt-1.5 max-w-xs">
        Mohon maaf, sistem mengalami sedikit kendala teknis saat memuat data.
      </p>
      <div className="flex items-center gap-3 mt-5">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Coba Lagi</span>
        </button>
        <Link
          href="/"
          className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold hover:bg-slate-200 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
