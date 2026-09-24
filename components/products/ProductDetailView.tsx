'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronDown,
  Star,
  Sparkles,
  ShoppingBag,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah } from '@/lib/utils';
import { Product } from '@/types';

interface ProductDetailViewProps {
  product: Product;
}

interface DurationItem {
  label?: string;
  duration: string;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const router = useRouter();

  // Default duration options if not in product
  const durationOptions: DurationItem[] = product.durationOptions || [
    { label: '1 Bulan', duration: '1 Bulan', price: product.price, isPopular: true },
    { label: '3 Bulan', duration: '3 Bulan', price: Math.round(product.price * 2.7) },
    { label: '1 Tahun', duration: '1 Tahun', price: Math.round(product.price * 9) },
  ];

  const [selectedDuration, setSelectedDuration] = useState<DurationItem>(durationOptions[0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCheckout = () => {
    router.push(
      `/checkout?product=${encodeURIComponent(product.slug)}&duration=${encodeURIComponent(
        selectedDuration.duration
      )}`
    );
  };

  return (
    <div className="w-full pb-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between py-2 mb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Stok Siap Kirim ({product.stockCount})
        </span>
      </div>

      {/* Hero Showcase Card */}
      <div className="relative overflow-hidden rounded-[30px] p-5 sm:p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-lg border border-slate-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <AppBrandLogo
            name={product.name}
            size="xl"
            className="ring-4 ring-white/10 shadow-xl"
          />

          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-medium text-indigo-200 mb-2 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{product.category}</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-2 text-xs text-indigo-100">
              <span className="font-semibold px-2 py-0.5 rounded-md bg-white/15">
                {product.accessType}
              </span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-300" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-indigo-200/80">({product.soldCount} terjual)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner inside Hero */}
        <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-100">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garansi Penuh 30 Hari Penggantian Baru</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Proses Kilat 1 - 5 Menit</span>
          </div>
        </div>
      </div>

      {/* Duration & Package Selector */}
      <section className="my-5 bg-white rounded-[26px] p-5 border border-slate-200/90 shadow-xs">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-indigo-600" />
          <span>Pilih Durasi Langganan</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {durationOptions.map((opt) => {
            const isSelected = selectedDuration.duration === opt.duration;
            return (
              <button
                key={opt.duration}
                type="button"
                onClick={() => setSelectedDuration(opt)}
                className={`relative p-3.5 rounded-2xl border text-left transition-all active:scale-[0.98] ${
                  isSelected
                    ? 'border-slate-900 bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                    : 'border-slate-200 bg-slate-50/70 hover:bg-slate-50 text-slate-800'
                }`}
              >
                {opt.isPopular && (
                  <span
                    className={`absolute -top-2 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-900 text-white'
                    }`}
                  >
                    Terpopuler
                  </span>
                )}
                <div className="text-xs font-semibold">{opt.duration}</div>
                <div
                  className={`text-base font-extrabold mt-1 tracking-tight ${
                    isSelected ? 'text-amber-300' : 'text-slate-950'
                  }`}
                >
                  {formatRupiah(opt.price)}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Product Description & Features */}
      <section className="my-5 bg-white rounded-[26px] p-5 border border-slate-200/90 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
            Deskripsi Produk
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2.5">
            Keunggulan & Fitur Pro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      {product.faq && product.faq.length > 0 && (
        <section className="my-5 bg-white rounded-[26px] p-5 border border-slate-200/90 shadow-xs">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Pertanyaan Umum (FAQ)</span>
          </h2>

          <div className="space-y-2">
            {product.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left text-xs font-semibold text-slate-900 flex items-center justify-between hover:bg-slate-50"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-3.5 pb-3.5 text-xs text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom Floating Checkout Bar (Styled above Liquid Glass Navigation) */}
      <div className="sticky bottom-20 z-30 pt-3">
        <div className="bg-white/95 backdrop-blur-xl rounded-[26px] p-4 border border-slate-200 shadow-xl flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">
              Total Pembayaran
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black text-slate-950 tracking-tight">
                {formatRupiah(selectedDuration.price)}
              </span>
              <span className="text-[11px] text-slate-500">/ {selectedDuration.duration}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="flex-1 max-w-[200px] py-3 px-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Beli Sekarang</span>
          </button>
        </div>
      </div>
    </div>
  );
}
