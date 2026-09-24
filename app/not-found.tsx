import Link from 'next/link';
import { FileQuestion, House } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-14 h-14 rounded-3xl bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
        <FileQuestion className="w-7 h-7" />
      </div>
      <h2 className="text-xl font-bold text-slate-900 font-serif">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-xs text-slate-500 mt-1 max-w-xs">
        Halaman yang Anda tuju mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <Link
        href="/"
        className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
      >
        <House className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </Link>
    </div>
  );
}
