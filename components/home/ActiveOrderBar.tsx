'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import {
  MiniWheelAvatar,
  TreasureChestIllustration,
} from './GamifiedIllustrations';

export function ActiveOrderBar() {
  const [chestSeconds, setChestSeconds] = useState(168); // 02:48
  const [isChestModalOpen, setIsChestModalOpen] = useState(false);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [chestClaimed, setChestClaimed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setChestSeconds((prev) => (prev > 0 ? prev - 1 : 180));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Speech Bubble In-Progress Bar matching IMG_0385.jpeg */}
      <div className="w-full my-3">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Left: Circular Wheel Avatar with 100 Free Ribbon */}
          <div
            onClick={() => setIsOrdersModalOpen(true)}
            className="cursor-pointer shrink-0 transition-transform active:scale-90"
            title="Aktivitas Penawaran"
          >
            <MiniWheelAvatar className="w-11 h-11 drop-shadow-xs" />
          </div>

          {/* Center: Speech Bubble pointing to the left */}
          <div
            onClick={() => setIsOrdersModalOpen(true)}
            className="flex-1 cursor-pointer relative bg-white border border-slate-200/90 rounded-full py-2.5 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-all flex items-center justify-between group active:scale-[0.99]"
          >
            {/* Left triangle speech tail pointing towards the wheel */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-white drop-shadow-[-1px_0_0_rgba(226,232,240,1)]" />

            <span className="text-xs sm:text-[13px] text-slate-800 font-medium tracking-tight">
              You have <strong className="font-bold text-slate-950">2 offer(s)</strong> in progress
            </span>

            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-2" />
          </div>

          {/* Far Right: 3D Golden Treasure Chest with Timer 02:48 */}
          <div
            onClick={() => setIsChestModalOpen(true)}
            className="shrink-0 flex flex-col items-center cursor-pointer group active:scale-95"
            title="Klaim Peti Harta Karun"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FFF9DB] border border-[#FDE047] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <TreasureChestIllustration className="w-8 h-8 drop-shadow-xs" />
            </div>

            {/* Timer underneath: 02:48 */}
            <div className="mt-0.5">
              <span className="text-[10px] font-black text-amber-900 bg-amber-100/90 px-1.5 py-0.2 rounded-md font-mono tracking-tight shadow-2xs">
                {formatTimer(chestSeconds)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Orders In-Progress Modal */}
      <AnimatePresence>
        {isOrdersModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOrdersModalOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-sm mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4 animate-spin" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">2 Pesanan Sedang Diproses</h3>
                    <p className="text-[10px] text-slate-500">Kredensial akun dikirim otomatis</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOrdersModalOpen(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-3 space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">CapCut Pro 1 Bulan</span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Diproses
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">Order #FLR-10284 · Estimasi 3 menit lagi</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900">Canva Pro Edu 1 Bulan</span>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                      Menunggu Pembayaran
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">Order #FLR-10283 · Menunggu scan QRIS</p>
                </div>
              </div>

              <Link
                href="/transaksi"
                onClick={() => setIsOrdersModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Lihat Seluruh Riwayat Transaksi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </>
        )}

        {/* Treasure Chest Mystery Modal */}
        {isChestModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChestModalOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-xs mx-auto z-50 rounded-3xl bg-gradient-to-b from-[#FFFDF0] to-white p-6 shadow-2xl border border-amber-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center animate-bounce">
                <TreasureChestIllustration className="w-20 h-20 drop-shadow-md" />
              </div>

              <h3 className="font-black text-slate-900 text-base">
                {chestClaimed ? 'Selamat Hadiah Terbuka!' : 'Peti Kejutan Misterius'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                {chestClaimed
                  ? 'Anda berhasil membuka bonus 300 Poin Loyalitas & Voucher Diskon Rp5.000!'
                  : 'Buka peti harta karun sebelum waktu hitung mundur berakhir!'}
              </p>

              {!chestClaimed ? (
                <button
                  onClick={() => setChestClaimed(true)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs shadow-md transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Buka Peti Sekarang 🎁</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsChestModalOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Selesai</span>
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
