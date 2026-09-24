'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, Sparkles, X, CheckCircle2, PackageCheck, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const notifications = [
    {
      id: 1,
      icon: PackageCheck,
      color: 'text-emerald-500 bg-emerald-50',
      title: 'Pesanan Diproses',
      desc: 'CapCut Pro #FLR-10284 sedang disiapkan secara instan.',
      time: '15m lalu',
    },
    {
      id: 2,
      icon: Gift,
      color: 'text-amber-500 bg-amber-50',
      title: 'Bonus 500 Poin Didapat',
      desc: 'Selamat! Poin loyalitas Anda bertambah Rp5.000.',
      time: '1j lalu',
    },
    {
      id: 3,
      icon: CheckCircle2,
      color: 'text-blue-500 bg-blue-50',
      title: 'Pembayaran Diterima',
      desc: 'Verifikasi QRIS otomatis sukses untuk transaksi #FLR-10281.',
      time: '3j lalu',
    },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full transition-all duration-200"
        style={{
          background: 'rgba(255, 255, 255, 0.70)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.65)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform active:scale-[0.98]"
            aria-label="Aurelia Catherine Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-950 via-slate-800 to-indigo-950 flex items-center justify-center shadow-sm border border-white/60">
              <span className="font-serif italic text-white text-sm font-semibold tracking-tighter">
                AC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold tracking-tight text-slate-900 text-[16px] leading-tight flex items-center gap-1">
                Aurelia Cathērine
                <Sparkles className="w-3 h-3 text-amber-500 inline-block fill-amber-400" />
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                Digital Premium
              </span>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Notification Trigger */}
            <button
              onClick={() => {
                setShowNotifications(true);
                setHasUnread(false);
              }}
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 bg-white/70 hover:bg-white border border-slate-200/80 shadow-xs transition-colors"
              aria-label="Notifikasi"
            >
              <Bell className="w-4 h-4" />
              {hasUnread && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
              )}
            </button>

            {/* Profile Avatar */}
            <Link
              href="/akun"
              className="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 shadow-xs flex items-center justify-center transition-transform active:scale-95"
              aria-label="Menu Akun Saya"
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <span className="text-xs font-bold text-slate-800">MA</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Notifications Drawer Modal */}
      <AnimatePresence>
        {showNotifications && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotifications(false)}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-16 left-4 right-4 max-w-md mx-auto z-50 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl p-4 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-indigo-600" />
                  <h3 className="font-semibold text-slate-900 text-sm">Pemberitahuan Pesanan</h3>
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {notifications.map((n) => {
                  const Icon = n.icon;
                  return (
                    <div
                      key={n.id}
                      className="p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100 flex gap-3 items-start transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${n.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-slate-900">{n.title}</p>
                          <span className="text-[10px] text-slate-400">{n.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{n.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-center">
                <Link
                  href="/transaksi"
                  onClick={() => setShowNotifications(false)}
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Buka Semua Transaksi &rarr;
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
