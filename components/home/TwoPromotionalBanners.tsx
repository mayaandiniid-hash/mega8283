'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';

export function TwoPromotionalBanners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto carousel rotation every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section
      aria-label="Promosi Unggulan"
      className="relative w-full overflow-hidden pt-2 pb-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative h-[210px] sm:h-[220px] w-full rounded-[26px] overflow-hidden shadow-md">
        <AnimatePresence mode="wait">
          {currentIndex === 0 ? (
            /* Banner 1: Trending Premium Apps */
            <motion.div
              key="banner-1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-900 p-5 sm:p-6 text-white flex flex-col justify-between"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-medium tracking-wide">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Aplikasi Terpopuler</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 text-white font-serif">
                  Trending Premium Apps
                </h2>
                <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 max-w-[280px]">
                  Aplikasi premium yang sedang populer
                </p>
              </div>

              {/* Showcase App Badges */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex items-center -space-x-2 sm:space-x-2">
                  <div className="transition-transform hover:scale-110">
                    <AppBrandLogo name="CapCut" size="sm" className="ring-2 ring-white/60" />
                  </div>
                  <div className="transition-transform hover:scale-110">
                    <AppBrandLogo name="Canva" size="sm" className="ring-2 ring-white/60" />
                  </div>
                  <div className="transition-transform hover:scale-110">
                    <AppBrandLogo name="Alight Motion" size="sm" className="ring-2 ring-white/60" />
                  </div>
                  <div className="transition-transform hover:scale-110">
                    <AppBrandLogo name="Spotify" size="sm" className="ring-2 ring-white/60" />
                  </div>
                </div>

                <Link
                  href="/#trending-apps"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold text-xs shadow-md hover:bg-slate-100 active:scale-95 transition-all"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ) : (
            /* Banner 2: Hot Deals */
            <motion.div
              key="banner-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600 p-5 sm:p-6 text-white flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[11px] font-semibold tracking-wide">
                  <Tag className="w-3 h-3 text-amber-200" />
                  <span>Promo Terbatas</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mt-2 text-white font-serif">
                  Hot Deals
                </h2>
                <p className="text-xs sm:text-sm text-pink-100 mt-1">
                  Premium mulai Rp20.000
                </p>
              </div>

              {/* Highlight Card inside Banner */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex items-center gap-3 bg-black/25 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/20">
                  <AppBrandLogo name="CapCut" size="sm" />
                  <div>
                    <div className="text-[11px] text-white/90 font-medium">Highlight: CapCut Pro</div>
                    <div className="text-sm font-bold text-amber-300">Rp35.000</div>
                  </div>
                </div>

                <Link
                  href="/produk/capcut-pro"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-rose-700 font-semibold text-xs shadow-md hover:bg-slate-100 active:scale-95 transition-all"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Manual Arrow Controls */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? 1 : 0))}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white/90 backdrop-blur-xs flex items-center justify-center transition-opacity"
          aria-label="Banner Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? 1 : 0))}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white/90 backdrop-blur-xs flex items-center justify-center transition-opacity"
          aria-label="Banner Selanjutnya"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center gap-1.5 mt-2.5">
        <button
          onClick={() => setCurrentIndex(0)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            currentIndex === 0 ? 'w-6 bg-slate-900' : 'w-1.5 bg-slate-300'
          }`}
          aria-label="Slide 1: Trending Premium Apps"
        />
        <button
          onClick={() => setCurrentIndex(1)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            currentIndex === 1 ? 'w-6 bg-slate-900' : 'w-1.5 bg-slate-300'
          }`}
          aria-label="Slide 2: Hot Deals"
        />
      </div>
    </section>
  );
}
