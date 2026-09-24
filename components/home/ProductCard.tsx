'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Star } from 'lucide-react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="group relative bg-white rounded-[26px] p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Top bar with Floating Logo and Status */}
        <div className="flex items-start justify-between gap-2">
          <div className="relative">
            <AppBrandLogo
              name={product.name}
              size="lg"
              className="shadow-xs group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                product.status === 'Available'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                  : 'bg-amber-50 text-amber-700 border-amber-200/80'
              }`}
            >
              {product.status}
            </span>

            {product.rating && (
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Name & Brand */}
        <div className="mt-3">
          <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>

          {/* Actual Type Labeling & Duration */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
            <span className="font-medium text-slate-800">{product.accessType}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{product.duration}</span>
          </div>

          <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Security & Warranty Trust Marker */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">Garansi Resmi Ganti Baru</span>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="mt-4 pt-2.5 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">
            Harga
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-extrabold text-slate-950 tracking-tight">
              {formatRupiah(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-slate-400 line-through">
                {formatRupiah(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <Link
          href={`/produk/${product.slug}`}
          className="px-3.5 py-2 rounded-xl bg-slate-950 text-white font-semibold text-xs hover:bg-slate-800 transition-all shadow-xs active:scale-95 text-center whitespace-nowrap"
        >
          Beli Sekarang
        </Link>
      </div>
    </motion.div>
  );
}
