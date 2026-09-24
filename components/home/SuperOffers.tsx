'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah } from '@/lib/utils';
import { Product } from '@/types';

interface SuperOffersProps {
  products: Product[];
}

export function SuperOffers({ products }: SuperOffersProps) {
  // Filter or take designated super offer products
  const offerSlugs = ['capcut-pro', 'canva-pro', 'alight-motion', 'spotify-premium', 'netflix'];
  const superOfferProducts = products.filter((p) => offerSlugs.includes(p.slug));

  return (
    <section id="super-offers" aria-label="Penawaran Super" className="w-full my-5">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-slate-900 font-serif">
            Super Offers
          </h2>
          <p className="text-[11px] text-slate-500">Harga spesial terbaik untuk aplikasi pilihan</p>
        </div>
        <Link
          href="/#all-products"
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
        >
          <span>See All</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Horizontal Carousel with CSS Scroll Snap */}
      <div
        className="flex gap-3 overflow-x-auto pb-3 pt-1 px-1 -mx-1 no-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {superOfferProducts.map((product) => (
          <motion.div
            key={product.id}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{ scrollSnapAlign: 'start' }}
            className="w-[200px] sm:w-[220px] shrink-0 bg-white rounded-[24px] p-3.5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* App Header & Brand */}
              <div className="flex items-start justify-between">
                <AppBrandLogo name={product.name} size="md" />
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/80">
                  {product.status}
                </span>
              </div>

              {/* Title & Metadata */}
              <div className="mt-2.5">
                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-1">
                  <span className="font-medium text-slate-700">{product.accessType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.duration}</span>
                </div>
              </div>

              {/* Guarantee marker */}
              <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-2">
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">Garansi Resmi 30 Hari</span>
              </div>
            </div>

            {/* Price & Action */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-slate-400 block uppercase font-medium">Mulai</span>
                <span className="text-sm font-extrabold text-slate-950 tracking-tight">
                  {formatRupiah(product.price)}
                </span>
              </div>

              <Link
                href={`/produk/${product.slug}`}
                className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs flex items-center gap-1 active:scale-95"
              >
                <span>Beli</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
