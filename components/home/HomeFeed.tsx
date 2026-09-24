'use client';

import React, { useState } from 'react';
import { FeaturedCards } from './FeaturedCards';
import { SpecialProgressCard } from './SpecialProgressCard';
import { SuperOffers } from './SuperOffers';
import { ActiveOrderBar } from './ActiveOrderBar';
import { TwoPromotionalBanners } from './TwoPromotionalBanners';
import { TrendingApps } from './TrendingApps';
import { FlashSale } from './FlashSale';
import { CategoryFilter } from './CategoryFilter';
import { ProductCard } from './ProductCard';
import { Product, Category } from '@/types';
import { Search, Sparkles, Gamepad2 } from 'lucide-react';

interface HomeFeedProps {
  initialProducts: Product[];
  initialCategories: Category[];
}

export function HomeFeed({ initialProducts, initialCategories }: HomeFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products for the category & popular products section
  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      product.category.toLowerCase().replace(/\s+/g, '-').includes(selectedCategory.toLowerCase()) ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Search Input Bar */}
      <div className="relative my-2">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari CapCut, Canva, Spotify, Netflix, Game..."
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
          >
            Reset
          </button>
        )}
      </div>

      {/* 1. TOP HERO SECTION: Ranking, Lucky Flip, Lucky Spin (matches IMG_0385.jpeg top) */}
      <FeaturedCards />

      {/* 2. NEWBIE TASKS: 3/14, Candy-striped bar, Rs27.00/Rp27.000, 500 cash bundle, ⚡ 6D:23:21:10 */}
      <SpecialProgressCard />

      {/* 3. SUPER OFFERS: Squircle cards, glossy logos, green cash pills (1,605, 270, 14K) */}
      <SuperOffers products={initialProducts} />

      {/* 4. ACTIVE STATUS BUBBLE: Spin Wheel Avatar (100 FREE), Speech Bubble (You have 2 offer(s) in progress), Treasure Chest with 02:48 */}
      <ActiveOrderBar />

      {/* 5. CASUAL GAMES & DIGITAL APPS TASKS (Heading matching IMG_0385.jpeg bottom) */}
      <div className="mt-6 mb-2">
        <div className="flex items-center justify-between px-0.5 mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-sans">
              Casual Games Tasks
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            Katalog Premium
          </span>
        </div>
        <p className="text-[11px] text-slate-500 px-1">
          Selesaikan pembelian untuk mengklaim poin reward dan garansi penuh
        </p>
      </div>

      {/* Promotional Banners & Flash Deals */}
      <div className="my-3">
        <TwoPromotionalBanners />
      </div>

      {/* Flash Sale Spotlight */}
      <FlashSale products={initialProducts} />

      {/* Trending Apps Quick Icons */}
      <TrendingApps products={initialProducts} />

      {/* Categories Filter Tabs */}
      <div id="all-products" className="pt-2">
        <CategoryFilter
          categories={initialCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={(slug) => setSelectedCategory(slug)}
        />
      </div>

      {/* Popular / Latest Products Grid */}
      <section aria-label="Daftar Produk Lengkap" className="my-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h3 className="text-base font-bold tracking-tight text-slate-900 font-serif">
              {selectedCategory === 'all'
                ? 'Semua Produk Digital & Aplikasi'
                : `Koleksi ${selectedCategory.toUpperCase()}`}
            </h3>
            <p className="text-[11px] text-slate-500">
              Menampilkan {filteredProducts.length} produk resmi siap kirim
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-10 px-4 rounded-3xl bg-slate-50 border border-slate-200">
            <p className="text-sm font-medium text-slate-600">
              Tidak ada produk yang cocok dengan pencarian Anda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
            >
              Tampilkan Semua
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
