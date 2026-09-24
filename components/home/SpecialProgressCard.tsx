'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Gift, Award, ChevronRight, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatRupiah } from '@/lib/utils';

export function SpecialProgressCard() {
  const [isOpen, setIsOpen] = useState(false);
  const currentTask = 3;
  const totalTasks = 14;
  const percentage = Math.round((currentTask / totalTasks) * 100);

  const sampleTasks = [
    { title: 'Verifikasi WhatsApp', points: 100, done: true },
    { title: 'Transaksi Pertama', points: 250, done: true },
    { title: 'Beli Paket Video', points: 150, done: true },
    { title: 'Belanja minimal Rp50.000', points: 500, done: false },
    { title: 'Review Pesanan Anda', points: 200, done: false },
  ];

  return (
    <>
      <section aria-label="Program Rewards" className="w-full my-3">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer group relative overflow-hidden rounded-[26px] p-4.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md border border-slate-800/80 transition-all hover:border-indigo-500/40 active:scale-[0.99]"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-xs shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Special Rewards
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {currentTask} / {totalTasks}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Complete your activity to unlock rewards.
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
          </div>

          {/* Progress Bar */}
          <div className="relative z-10 mt-3.5">
            <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"
              />
            </div>
          </div>

          {/* Metric Bottom Row */}
          <div className="relative z-10 flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 text-[11px]">Nilai Voucher:</span>
              <span className="font-bold text-white tracking-tight">{formatRupiah(27000)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-400 text-[11px]">Reward:</span>
              <span className="font-bold text-amber-300">500 Points</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-md mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Special Rewards Program</h3>
                    <p className="text-[11px] text-slate-500">Selesaikan misi untuk mendapatkan bonus koin</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {sampleTasks.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      {t.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span className={`font-medium ${t.done ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                        {t.title}
                      </span>
                    </div>
                    <span className="font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md text-[10px]">
                      +{t.points} Pts
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Total terkumpul: <span className="font-bold text-slate-900">1.450 Poin</span>
                </div>
                <Link
                  href="/akun"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-medium hover:bg-slate-800"
                >
                  <span>Lihat di Akun</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
