'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Flame, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FeaturedCardItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
  bgGradient: string;
  badgeColor: string;
  btnColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CARDS: FeaturedCardItem[] = [
  {
    id: 'top-premium',
    badge: 'FEATURED',
    title: 'Top Premium',
    subtitle: 'Produk paling banyak dilihat',
    buttonText: 'View',
    href: '/produk/canva-pro',
    bgGradient: 'from-amber-400 via-orange-400 to-amber-500',
    badgeColor: 'bg-black/15 text-slate-900 border-black/10',
    btnColor: 'bg-slate-950 text-white hover:bg-slate-900',
    icon: Sparkles,
  },
  {
    id: 'hot-deals',
    badge: 'HOT DEALS',
    title: 'Hot Deals',
    subtitle: 'Penawaran pilihan hari ini',
    buttonText: 'Shop Now',
    href: '/produk/capcut-pro',
    bgGradient: 'from-pink-500 via-rose-500 to-rose-600',
    badgeColor: 'bg-white/20 text-white border-white/25',
    btnColor: 'bg-white text-rose-700 hover:bg-rose-50',
    icon: Flame,
  },
  {
    id: 'trending-apps',
    badge: 'TRENDING',
    title: 'Trending Apps',
    subtitle: 'Aplikasi populer minggu ini',
    buttonText: 'Explore',
    href: '/#trending-apps',
    bgGradient: 'from-purple-600 via-indigo-600 to-indigo-700',
    badgeColor: 'bg-white/20 text-white border-white/25',
    btnColor: 'bg-white text-indigo-700 hover:bg-indigo-50',
    icon: TrendingUp,
  },
];

export function FeaturedCards() {
  return (
    <section aria-label="Sorotan Pilihan" className="w-full my-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-[24px] p-4 sm:p-5 bg-gradient-to-br ${card.bgGradient} text-white shadow-sm flex flex-col justify-between min-h-[140px]`}
            >
              {/* Subtle background glow */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/15 rounded-full blur-xl pointer-events-none" />

              <div>
                <div
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${card.badgeColor}`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{card.badge}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white mt-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/90 mt-0.5">
                  {card.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-1">
                <Link
                  href={card.href}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold text-xs shadow-xs transition-all ${card.btnColor}`}
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
