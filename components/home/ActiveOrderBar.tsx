'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ActiveOrderBar() {
  return (
    <div className="w-full my-4">
      <Link
        href="/transaksi"
        className="block group"
        aria-label="Lihat pesanan aktif"
      >
        <motion.div
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden rounded-[24px] p-3.5 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-md border border-indigo-500/30 flex items-center justify-between gap-3"
        >
          {/* Subtle animated light pulse */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center shrink-0">
              <Loader2 className="w-5 h-5 text-indigo-300 animate-spin" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  You have 2 orders in progress
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-indigo-200 mt-0.5 truncate">
                <Clock className="w-3 h-3 shrink-0" />
                <span className="truncate">CapCut Pro (#FLR-10284) · Estimasi 3 menit</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-white/90 bg-white/10 group-hover:bg-white/20 px-3 py-1.5 rounded-xl border border-white/15 shrink-0 transition-colors">
            <span>Lihat</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
