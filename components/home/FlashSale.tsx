'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flame, Clock, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah } from '@/lib/utils';
import { Product } from '@/types';

interface FlashSaleProps {
  products: Product[];
}

export function FlashSale({ products }: FlashSaleProps) {
  // Flash sale countdown: 6h 23m 21s 10ms
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 23,
    seconds: 21,
    millis: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.millis > 0) {
          return { ...prev, millis: prev.millis - 1 };
        }
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1, millis: 99 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59, millis: 99 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59, millis: 99 };
        }
        return { hours: 6, minutes: 0, seconds: 0, millis: 0 };
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  const flashSaleItems = products.filter((p) => p.isFlashSale).slice(0, 4);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section aria-label="Promo Kilat Flash Sale" className="w-full my-5">
      {/* Flash Sale Header Box */}
      <div className="rounded-[24px] bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 p-4 text-white shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Flame className="w-5 h-5 text-amber-200 fill-amber-300 animate-bounce" />
          </div>
          <div>
            <h2 className="text-base font-bold tracking-tight leading-tight">Flash Sale</h2>
            <p className="text-[11px] text-white/90">Harga diskon habis dalam:</p>
          </div>
        </div>

        {/* Dynamic Countdown Timer */}
        <div className="flex items-center gap-1 font-mono text-xs font-bold bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/20">
          <Clock className="w-3.5 h-3.5 text-amber-300 mr-1" />
          <span className="bg-black/40 px-1 py-0.5 rounded text-white">{pad(timeLeft.hours)}</span>
          <span className="text-amber-200">:</span>
          <span className="bg-black/40 px-1 py-0.5 rounded text-white">{pad(timeLeft.minutes)}</span>
          <span className="text-amber-200">:</span>
          <span className="bg-black/40 px-1 py-0.5 rounded text-white">{pad(timeLeft.seconds)}</span>
          <span className="text-amber-200">:</span>
          <span className="bg-amber-400 text-slate-950 px-1 py-0.5 rounded text-[10px]">
            {pad(timeLeft.millis)}
          </span>
        </div>
      </div>

      {/* Horizontal Carousel of Discounted Products */}
      <div
        className="flex gap-3 overflow-x-auto pb-2 pt-3 px-1 -mx-1 no-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {flashSaleItems.map((product) => {
          const discountPct = product.flashSaleDiscount || 50;
          return (
            <motion.div
              key={product.id}
              whileTap={{ scale: 0.97 }}
              style={{ scrollSnapAlign: 'start' }}
              className="w-[185px] shrink-0 bg-white rounded-[22px] p-3 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <AppBrandLogo name={product.name} size="md" />
                  <span className="text-[10px] font-extrabold text-white bg-rose-500 px-1.5 py-0.5 rounded-lg flex items-center gap-0.5">
                    <Zap className="w-2.5 h-2.5 fill-current" />
                    -{discountPct}%
                  </span>
                </div>

                <div className="mt-2.5">
                  <h3 className="font-bold text-slate-900 text-xs line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-sm font-extrabold text-rose-600">
                      {formatRupiah(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[10px] text-slate-400 line-through">
                        {formatRupiah(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stock Meter */}
                <div className="mt-2.5">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 mb-1">
                    <span>Terjual 85%</span>
                    <span className="text-rose-600 font-semibold">Tersisa {product.stockCount}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100">
                <Link
                  href={`/produk/${product.slug}`}
                  className="w-full py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-semibold text-center block transition-colors shadow-xs active:scale-95"
                >
                  Ambil Promo
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
