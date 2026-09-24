'use client';

import React, { useState } from 'react';
import { TwoPromotionalBanners } from './TwoPromotionalBanners';
import { FeaturedCards } from './FeaturedCards';
import { SpecialProgressCard } from './SpecialProgressCard';
import { SuperOffers } from './SuperOffers';
import { TrendingApps } from './TrendingApps';
import { FlashSale } from './FlashSale';
import { CategoryFilter } from './CategoryFilter';
import { ProductCard } from './ProductCard';
import { ActiveOrderBar } from './ActiveOrderBar';
import { Product, Category } from '@/types';
import { Search } from 'lucide-react';

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
          placeholder="Cari CapCut, Canva, Spotify, Netflix..."
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

      {/* 2. Two promotional banners */}
      <TwoPromotionalBanners />

      {/* 3. Featured products cards */}
      <FeaturedCards />

      {/* 4. Special progress card */}
      <SpecialProgressCard />

      {/* 5. Super Offers */}
      <SuperOffers products={initialProducts} />

      {/* 6. Trending Apps */}
      <TrendingApps products={initialProducts} />

      {/* Flash Sale spotlight */}
      <FlashSale products={initialProducts} />

      {/* 8. Categories Filter */}
      <div id="all-products">
        <CategoryFilter
          categories={initialCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={(slug) => setSelectedCategory(slug)}
        />
      </div>

      {/* 7 & 9. Popular / Latest Products Grid */}
      <section aria-label="Daftar Produk Lengkap" className="my-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 font-serif">
              {selectedCategory === 'all'
                ? 'Semua Produk Digital'
                : `Koleksi ${selectedCategory.toUpperCase()}`}
            </h2>
            <p className="text-[11px] text-slate-500">
              Menampilkan {filteredProducts.length} produk resmi & bergaransi
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

      {/* 10. Active Transactions Floating Bar */}
      <ActiveOrderBar />
    </div>
  );
}
