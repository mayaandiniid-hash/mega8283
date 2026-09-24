export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center py-16">
      <div className="w-10 h-10 rounded-full border-3 border-slate-200 border-t-slate-900 animate-spin" />
      <p className="text-xs font-semibold text-slate-500 mt-4 tracking-wide uppercase">
        Memuat Aurelia Cathērine...
      </p>
    </div>
  );
}
