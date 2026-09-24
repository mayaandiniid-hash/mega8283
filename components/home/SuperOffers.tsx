'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { CashBundleIllustration } from './GamifiedIllustrations';
import { Product } from '@/types';

interface SuperOffersProps {
  products: Product[];
}

export function SuperOffers({ products }: SuperOffersProps) {
  // Curated list matching both the visual style of IMG_0385.jpeg and the digital product store
  const offerItems = [
    {
      id: 'capcut-pro',
      name: 'CapCut Pro',
      displayTitle: 'CapCut Pro...',
      slug: 'capcut-pro',
      rewardBadge: '1,605',
      price: 'Rp35.000',
    },
    {
      id: 'canva-pro',
      name: 'Canva Pro',
      displayTitle: 'Canva Pro',
      slug: 'canva-pro',
      rewardBadge: '270',
      price: 'Rp20.000',
    },
    {
      id: 'alight-motion',
      name: 'Alight Motion',
      displayTitle: 'Alight Mot...',
      slug: 'alight-motion',
      rewardBadge: '14K',
      price: 'Rp25.000',
    },
    {
      id: 'spotify-premium',
      name: 'Spotify Premium',
      displayTitle: 'Spotify Prem...',
      slug: 'spotify-premium',
      rewardBadge: '950',
      price: 'Rp25.000',
    },
    {
      id: 'netflix-uhd',
      name: 'Netflix 4K UHD',
      displayTitle: 'Netflix UHD',
      slug: 'netflix',
      rewardBadge: '2,400',
      price: 'Rp38.000',
    },
    {
      id: 'chatgpt-plus',
      name: 'ChatGPT Plus',
      displayTitle: 'ChatGPT Pl...',
      slug: 'chatgpt-plus',
      rewardBadge: '5,000',
      price: 'Rp75.000',
    },
  ];

  return (
    <section id="super-offers" aria-label="Super Offers" className="w-full my-4">
      {/* Header matching IMG_0385.jpeg: "Super Offers" on left, "See All" on right */}
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-sans">
          Super Offers
        </h2>
        <Link
          href="#all-products"
          className="text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors"
        >
          See All
        </Link>
      </div>

      {/* Horizontal Carousel with CSS Scroll Snap */}
      <div
        className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 pt-0.5 px-0.5 -mx-0.5 no-scrollbar"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {offerItems.map((item) => (
          <Link
            key={item.id}
            href={`/produk/${item.slug}`}
            className="block shrink-0 focus:outline-hidden"
            style={{ scrollSnapAlign: 'start' }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="w-[125px] sm:w-[136px] bg-[#F4F6F1] rounded-[24px] p-3 border border-[#E5EAE0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D0DBCA] hover:shadow-md transition-all flex flex-col items-center text-center justify-between min-h-[140px]"
            >
              {/* Top App Icon in Squircle plate */}
              <div className="p-1 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center">
                <AppBrandLogo name={item.name} size="md" className="shadow-xs" />
              </div>

              {/* Title Truncated */}
              <div className="mt-2 w-full px-0.5">
                <span className="font-bold text-slate-900 text-xs truncate block leading-tight">
                  {item.displayTitle}
                </span>
                <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                  {item.price}
                </span>
              </div>

              {/* Bottom Green Cash Badge (💵 1,605 / 270 / 14K) */}
              <div className="mt-2.5 w-full">
                <div className="inline-flex items-center justify-center gap-1.5 w-full py-1 px-2 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] shadow-2xs">
                  <CashBundleIllustration className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-black text-[#15803D] tracking-tight">
                    {item.rewardBadge}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
