'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah } from '@/lib/utils';
import { Product } from '@/types';

interface TrendingAppsProps {
  products: Product[];
}

export function TrendingApps({ products }: TrendingAppsProps) {
  return (
    <section id="trending-apps" aria-label="Aplikasi Trending" className="w-full my-5">
      <div className="flex items-center justify-between mb-3 px-1">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-slate-900 font-serif">
            Trending Apps
          </h2>
          <p className="text-[11px] text-slate-500">10 aplikasi paling banyak dicari minggu ini</p>
        </div>
      </div>

      <div
        className="flex gap-2.5 overflow-x-auto pb-3 pt-1 px-1 -mx-1 no-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileTap={{ scale: 0.95 }}
            style={{ scrollSnapAlign: 'start' }}
            className="shrink-0"
          >
            <Link
              href={`/produk/${product.slug}`}
              className="w-[124px] sm:w-[136px] h-full flex flex-col items-center text-center p-3 rounded-[22px] bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all group block"
            >
              <div className="relative p-1">
                <AppBrandLogo
                  name={product.name}
                  size="lg"
                  className="group-hover:scale-105 transition-transform duration-200 shadow-sm"
                />
              </div>

              <span className="font-bold text-slate-900 text-xs mt-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                {product.name}
              </span>

              <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                {product.category}
              </span>

              <span className="mt-2 text-xs font-extrabold text-slate-950 bg-slate-100/80 group-hover:bg-indigo-50 group-hover:text-indigo-700 px-2 py-0.5 rounded-full transition-colors">
                {formatRupiah(product.price)}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
