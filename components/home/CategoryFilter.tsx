'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <section aria-label="Filter Kategori" className="w-full my-3">
      <div className="flex items-center justify-between mb-2 px-1">
        <h2 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
          Kategori Aplikasi
        </h2>
        <span className="text-[11px] text-slate-500">Pilih kebutuhan Anda</span>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-1 px-1 -mx-1 no-scrollbar items-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.slug;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
                isActive
                  ? 'text-slate-950 bg-slate-100 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white/70 hover:bg-white border border-slate-200/60'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-slate-900 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? 'text-white' : ''}`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
