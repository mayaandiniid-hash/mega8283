'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CashBundleIllustration } from './GamifiedIllustrations';
import { formatRupiah } from '@/lib/utils';

export function SpecialProgressCard() {
  const [isOpen, setIsOpen] = useState(false);
  const currentTask = 3;
  const totalTasks = 14;

  // Countdown timer for ⚡ 6D:23:21:10
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 21,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTimer = `${timeLeft.days}D:${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes
    .toString()
    .padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`;

  const tasksList = [
    { title: 'Verifikasi Nomor WhatsApp', points: 100, done: true },
    { title: 'Kunjungi Katalog Produk', points: 50, done: true },
    { title: 'Simpan Produk Favorit', points: 100, done: true },
    { title: 'Lakukan Transaksi Pertama', points: 250, done: false },
    { title: 'Klaim Lucky Spin Harian', points: 150, done: false },
    { title: 'Beli Paket Durasi 1 Bulan', points: 300, done: false },
    { title: 'Tulis Ulasan Layanan', points: 200, done: false },
    { title: 'Bagikan Referral ke Teman', points: 500, done: false },
  ];

  return (
    <>
      <section aria-label="Newbie Tasks" className="w-full my-4">
        {/* Header matching IMG_0385.jpeg:
            "Newbie Tasks" on left, "⚡ 6D:23:21:10" pill on right */}
        <div className="flex items-center justify-between mb-2.5 px-0.5">
          <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-sans">
            Newbie Tasks
          </h2>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF0E6] text-[#FF6B00] border border-[#FFD9C2] text-xs font-black shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-[#FF6B00]" />
            <span className="font-mono tracking-tight">{formattedTimer}</span>
          </div>
        </div>

        {/* The Card Container:
            Soft creamy off-white background (#F6F8F3), rounded-[28px], 
            border, candy-striped progress bar, 3/14, Rs27.00/Rp27.000, 500 cash icon, and black arrow circle */}
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer group relative overflow-hidden rounded-[28px] p-4 sm:p-5 bg-[#F6F8F3] border border-[#E3E8DC] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#CBD5C0] transition-all active:scale-[0.99]"
        >
          <div className="flex items-center justify-between gap-3">
            {/* Left Big Number: 3/14 */}
            <div className="shrink-0">
              <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-slate-900 font-sans">
                {currentTask}/{totalTasks}
              </span>
            </div>

            {/* Center: Candy-Striped Progress Bar with Milestone Coin & Label */}
            <div className="flex-1 min-w-0 max-w-[240px] sm:max-w-xs px-1">
              <div className="relative w-full h-4 sm:h-4.5 bg-[#E8ECE2] rounded-full overflow-hidden p-0.5 shadow-inner">
                {/* Candy-striped filled progress (approx 35% width for 3/14 milestone 1) */}
                <div
                  className="h-full rounded-full transition-all duration-500 relative"
                  style={{
                    width: '38%',
                    background:
                      'repeating-linear-gradient(45deg, #F59E0B, #F59E0B 7px, #EF4444 7px, #EF4444 14px)',
                  }}
                />
              </div>

              {/* Sparkle Star & Round Milestone Coin Token floating above/beside bar */}
              <div className="relative -mt-6 ml-[34%] flex items-center gap-0.5 pointer-events-none">
                {/* Red Sparkle Star ✦ */}
                <span className="text-red-500 font-black text-sm drop-shadow-xs animate-pulse">✦</span>

                {/* Round Coin Badge (like the green & white 'e' token in the photo) */}
                <div className="w-6 h-6 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-white text-[9px] font-black">
                    e
                  </div>
                </div>
              </div>

              {/* Milestone Amount Label directly under the token */}
              <div className="text-center ml-[22%] sm:ml-[26%] mt-1">
                <span className="text-[11px] font-black text-slate-800 tracking-tight">
                  {formatRupiah(27000)}
                </span>
              </div>
            </div>

            {/* Right: 3D Cash Banknotes Bundle + 500 under it */}
            <div className="flex flex-col items-center shrink-0">
              <CashBundleIllustration className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-xs" />
              <span className="text-[11px] font-black text-slate-800 mt-0.5">500</span>
            </div>

            {/* Far Right: Black Circle Button with White Arrow */}
            <div className="shrink-0 pl-1">
              <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <span className="text-xs font-bold">➔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal for Tasks */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-md mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF0E6] text-[#FF6B00] flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm">Newbie Tasks Program</h3>
                    <p className="text-[11px] text-slate-500">
                      Selesaikan 14 misi untuk mengklaim voucher {formatRupiah(27000)} & 500 Poin
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3.5 space-y-2 max-h-64 overflow-y-auto pr-1">
                {tasksList.map((t, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-2xl border text-xs ${
                      t.done
                        ? 'bg-slate-50/80 border-slate-200/60'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {t.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      <span
                        className={`font-semibold ${
                          t.done ? 'text-slate-400 line-through' : 'text-slate-900'
                        }`}
                      >
                        {t.title}
                      </span>
                    </div>

                    <span
                      className={`font-black text-[10px] px-2 py-0.5 rounded-full ${
                        t.done
                          ? 'bg-slate-100 text-slate-400'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      +{t.points} Pts
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Kemajuan: <span className="font-black text-slate-900">{currentTask} dari {totalTasks} selesai</span>
                </div>
                <Link
                  href="/akun"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800"
                >
                  <span>Buka Poin Akun</span>
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
