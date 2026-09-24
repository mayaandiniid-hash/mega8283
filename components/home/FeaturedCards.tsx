'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Clock, X, Trophy, Sparkles, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrophyIllustration,
  FlipCardsIllustration,
  SpinWheelIllustration,
} from './GamifiedIllustrations';

export function FeaturedCards() {
  // Live ticking countdown for Ranking
  const [secondsRemaining, setSecondsRemaining] = useState(18386); // ~05:06:26

  // Interactive Game Modals State
  const [activeModal, setActiveModal] = useState<'ranking' | 'flip' | 'spin' | null>(null);

  // Lucky Flip State
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [flipReward, setFlipReward] = useState<string | null>(null);

  // Lucky Spin State
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinRotation, setSpinRotation] = useState(0);
  const [spinReward, setSpinReward] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 18000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCardFlip = (idx: number) => {
    if (flippedIndex !== null) return;
    setFlippedIndex(idx);
    const rewards = [
      '🎉 Voucher Diskon Rp10.000',
      '⭐ Bonus 500 Poin Loyalitas',
      '⚡ Diskon 25% Semua Produk',
    ];
    setFlipReward(rewards[idx]);
  };

  const handleStartSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinReward(null);
    const targetDeg = 1440 + Math.floor(Math.random() * 360);
    setSpinRotation((prev) => prev + targetDeg);

    setTimeout(() => {
      setIsSpinning(false);
      const prizes = [
        '🎁 1.000 Koin Reward!',
        '⚡ Diskon Rp15.000 Langsung',
        '🌟 Kupon Akses CapCut Pro',
        '💎 Cashback Poin 20%',
      ];
      setSpinReward(prizes[Math.floor(Math.random() * prizes.length)]);
    }, 3500);
  };

  return (
    <>
      <section aria-label="Game & Fitur Spesial" className="w-full my-3">
        {/* Responsive Grid matching IMG_0385.jpeg:
            On mobile & desktop: 2 columns. Left column is tall (Ranking).
            Right column has 2 stacked cards (Lucky Flip & Lucky Spin). */}
        <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
          {/* ================= LEFT CARD: RANKING ================= */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveModal('ranking')}
            className="cursor-pointer relative overflow-hidden rounded-[30px] p-4 sm:p-5 bg-gradient-to-b from-[#FFE500] via-[#FFD000] to-[#FFAE00] border-4 border-[#FFA000] shadow-[0_6px_0_#D97706,0_12px_20px_rgba(217,119,6,0.25)] flex flex-col justify-between min-h-[250px] sm:min-h-[280px]"
          >
            {/* Subtle decorative background circle */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-xl pointer-events-none" />

            <div>
              {/* Card Title */}
              <h2 className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-950 font-sans drop-shadow-xs">
                Ranking
              </h2>

              {/* Countdown Pill */}
              <div className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-xs text-slate-900 text-[11px] font-bold shadow-xs">
                <Clock className="w-3.5 h-3.5 text-slate-700" />
                <span className="font-mono tracking-tight">{formatTimer(secondsRemaining)}</span>
              </div>
            </div>

            {/* Center Trophy Illustration */}
            <div className="relative py-2 flex items-center justify-center">
              <TrophyIllustration className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-md select-none transition-transform hover:scale-105" />
            </div>

            {/* Go Action Button */}
            <div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-950 text-white text-xs font-black shadow-md hover:bg-slate-900 transition-transform active:scale-95"
              >
                <span>Go</span>
                <span className="text-sm font-bold">➔</span>
              </button>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: STACKED CARDS ================= */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {/* --- TOP RIGHT: LUCKY FLIP --- */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setFlippedIndex(null);
                setFlipReward(null);
                setActiveModal('flip');
              }}
              className="cursor-pointer relative overflow-hidden rounded-[26px] p-3.5 sm:p-4 bg-gradient-to-br from-[#DF8BFA] via-[#C084FC] to-[#9333EA] border-2 border-[#A855F7] shadow-[0_5px_0_#7E22CE,0_8px_16px_rgba(147,51,234,0.2)] flex-1 flex flex-col justify-between min-h-[120px] sm:min-h-[135px]"
            >
              {/* Subtle background curved wave */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/15 rounded-full blur-lg pointer-events-none" />

              {/* Flame Hot Badge on Top Right */}
              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black italic tracking-tight text-white font-sans drop-shadow-xs">
                  Lucky Flip
                </h3>
                <p className="text-[11px] font-semibold text-white/90 mt-0.5">
                  Remaining: 26/30
                </p>
              </div>

              <div className="flex items-end justify-between mt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950 text-white text-[11px] font-black shadow-md hover:bg-slate-900 transition-transform active:scale-95"
                >
                  <span>Go</span>
                  <span className="text-xs font-bold">➔</span>
                </button>

                <div className="shrink-0 -mr-1 -mb-1">
                  <FlipCardsIllustration className="w-16 h-16 sm:w-18 sm:h-18" />
                </div>
              </div>
            </motion.div>

            {/* --- BOTTOM RIGHT: LUCKY SPIN --- */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSpinReward(null);
                setActiveModal('spin');
              }}
              className="cursor-pointer relative overflow-hidden rounded-[26px] p-3.5 sm:p-4 bg-gradient-to-br from-[#22C55E] via-[#4ADE80] to-[#16A34A] border-2 border-[#15803D] shadow-[0_5px_0_#166534,0_8px_16px_rgba(22,101,52,0.2)] flex-1 flex flex-col justify-between min-h-[120px] sm:min-h-[135px]"
            >
              {/* Subtle background shine */}
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/15 rounded-full blur-lg pointer-events-none" />

              <div>
                <h3 className="text-base sm:text-lg font-black italic tracking-tight text-white font-sans drop-shadow-xs">
                  Lucky Spin
                </h3>
                <p className="text-[11px] font-semibold text-white/90 mt-0.5">
                  Remaining: 0/1
                </p>
              </div>

              <div className="flex items-end justify-between mt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-950 text-white text-[11px] font-black shadow-md hover:bg-slate-900 transition-transform active:scale-95"
                >
                  <span>Go</span>
                  <span className="text-xs font-bold">➔</span>
                </button>

                <div className="shrink-0 -mr-1 -mb-1">
                  <SpinWheelIllustration className="w-16 h-16 sm:w-18 sm:h-18" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE MODALS ================= */}
      <AnimatePresence>
        {/* RANKING LEADERBOARD MODAL */}
        {activeModal === 'ranking' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-sm mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-amber-200"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm">Klasemen Pembeli Harian</h3>
                    <p className="text-[10px] text-slate-500">Reset dalam {formatTimer(secondsRemaining)}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-3 space-y-2">
                {[
                  { rank: 1, name: 'Budi Santoso', points: '12.450 Pts', prize: '🥇 Rp100.000 Voucher' },
                  { rank: 2, name: 'Siti Rahma', points: '9.800 Pts', prize: '🥈 Rp50.000 Voucher' },
                  { rank: 3, name: 'Rian Pratama', points: '7.120 Pts', prize: '🥉 Canva Pro 1 Tahun' },
                  { rank: 4, name: 'Maya Andini (Anda)', points: '5.200 Pts', prize: 'Bronze Tier' },
                ].map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center justify-between p-2.5 rounded-2xl border ${
                      item.rank === 4
                        ? 'bg-amber-50/80 border-amber-300 font-bold text-slate-900'
                        : 'bg-slate-50 border-slate-100 text-slate-700 text-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          item.rank === 1
                            ? 'bg-amber-400 text-slate-950'
                            : item.rank === 2
                            ? 'bg-slate-300 text-slate-900'
                            : item.rank === 3
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {item.rank}
                      </span>
                      <span className="text-xs font-semibold">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-amber-600">{item.points}</div>
                      <div className="text-[10px] text-slate-400">{item.prize}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs"
              >
                Tingkatkan Peringkat &rarr;
              </button>
            </motion.div>
          </>
        )}

        {/* LUCKY FLIP GAME MODAL */}
        {activeModal === 'flip' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-sm mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-purple-200 text-center"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-purple-600 fill-purple-600" />
                  <h3 className="font-black text-slate-900 text-sm">Lucky Flip Mystery Card</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-500 my-3">
                Pilih salah satu kartu untuk membuka hadiah diskon langsung Anda!
              </p>

              {/* 3 Interactive Cards */}
              <div className="grid grid-cols-3 gap-2.5 my-4">
                {[0, 1, 2].map((idx) => {
                  const isFlipped = flippedIndex === idx;
                  return (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => handleCardFlip(idx)}
                      className={`h-28 rounded-2xl border-2 flex flex-col items-center justify-center p-2 text-center transition-all ${
                        isFlipped
                          ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-400'
                          : 'bg-gradient-to-br from-purple-500 to-indigo-600 border-purple-300 text-white shadow-sm'
                      }`}
                    >
                      {isFlipped ? (
                        <div className="animate-bounce">
                          <Gift className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                          <span className="text-[10px] font-black text-amber-800 leading-tight block">
                            MENANG!
                          </span>
                        </div>
                      ) : (
                        <div>
                          <Sparkles className="w-5 h-5 text-amber-300 mx-auto mb-1" />
                          <span className="text-[11px] font-black">KARTU #{idx + 1}</span>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {flipReward && (
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs mb-3 animate-fade-in">
                  {flipReward}
                </div>
              )}

              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md"
              >
                {flipReward ? 'Klaim Hadiah Sekarang' : 'Tutup'}
              </button>
            </motion.div>
          </>
        )}

        {/* LUCKY SPIN WHEEL MODAL */}
        {activeModal === 'spin' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-sm mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-emerald-200 text-center"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-black text-slate-900 text-sm">Lucky Spin Hadiah Harian</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative my-4 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: spinRotation }}
                  transition={{ duration: 3.5, ease: [0.12, 0.8, 0.32, 1] }}
                  className="w-40 h-40"
                >
                  <SpinWheelIllustration className="w-full h-full" />
                </motion.div>
              </div>

              {spinReward && (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs mb-3 animate-fade-in">
                  {spinReward}
                </div>
              )}

              <button
                disabled={isSpinning}
                onClick={handleStartSpin}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all active:scale-98"
              >
                {isSpinning ? 'Sedang Memutar...' : 'Putar Roda Sekarang (Gratis 1x)'}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
