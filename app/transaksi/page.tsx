'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Receipt,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  X,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah, formatDate } from '@/lib/utils';
import { Order, OrderStatus } from '@/types';
import { initialOrders } from '@/lib/db';

const STATUS_TABS: OrderStatus[] = [
  'All',
  'Pending',
  'Paid',
  'Processing',
  'Completed',
  'Cancelled',
];

export default function TransaksiPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [activeTab, setActiveTab] = useState<OrderStatus>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === 'All' || order.status === activeTab;
    const matchesSearch =
      searchQuery.trim() === '' ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'Completed':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: CheckCircle2,
          label: 'Selesai',
        };
      case 'Processing':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          icon: Clock,
          label: 'Diproses',
        };
      case 'Paid':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: CheckCircle2,
          label: 'Dibayar',
        };
      case 'Pending':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: Clock,
          label: 'Menunggu',
        };
      case 'Cancelled':
        return {
          bg: 'bg-rose-50 text-rose-700 border-rose-200',
          icon: AlertCircle,
          label: 'Dibatalkan',
        };
      default:
        return {
          bg: 'bg-slate-50 text-slate-700 border-slate-200',
          icon: Clock,
          label: status,
        };
    }
  };

  return (
    <div className="w-full py-2">
      {/* Page Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <Receipt className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 font-serif">
              Riwayat Transaksi
            </h1>
            <p className="text-xs text-slate-500">Kelola dan pantau seluruh pesanan digital Anda</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-3">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari nomor pesanan #FLR... atau nama produk"
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all shadow-xs"
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

      {/* Filter Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 px-0.5 no-scrollbar">
        {STATUS_TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
                isActive
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Transactions List */}
      <div className="mt-3 space-y-3">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-14 px-4 rounded-3xl bg-slate-50 border border-slate-200">
            <Receipt className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-800">Belum ada transaksi di tab ini</p>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Silakan jelajahi katalog produk digital premium kami untuk melakukan pembelian pertama.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>Belanja Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const badge = getStatusBadge(order.status);
            const BadgeIcon = badge.icon;
            return (
              <motion.div
                key={order.id}
                whileTap={{ scale: 0.99 }}
                className="bg-white rounded-[24px] p-4 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-900 tracking-tight">
                      {order.id}
                    </span>
                    <span className="text-[10px] text-slate-400">·</span>
                    <span className="text-[11px] text-slate-500">{formatDate(order.createdAt)}</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.bg}`}
                  >
                    <BadgeIcon className="w-3 h-3" />
                    <span>{badge.label}</span>
                  </span>
                </div>

                {/* Content Row */}
                <div className="py-3 flex items-start gap-3">
                  <AppBrandLogo name={order.productName} size="lg" />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm truncate">
                      {order.productName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                      <span>{order.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-700">{order.accessType}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[11px] text-slate-500">Metode:</span>
                      <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
                        {order.paymentMethod}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-slate-400 block font-medium">Total</span>
                    <span className="text-sm font-extrabold text-slate-950">
                      {formatRupiah(order.totalAmount)}
                    </span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Garansi Aktif</span>
                  </div>

                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors flex items-center gap-1 active:scale-95"
                  >
                    <span>View Detail</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </button>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Order Detail Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOrder(null)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-md mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Detail Pesanan {selectedOrder.id}
                    </h3>
                    <p className="text-[10px] text-slate-500">{formatDate(selectedOrder.createdAt)}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="py-3.5 flex items-center gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 mt-3">
                <AppBrandLogo name={selectedOrder.productName} size="md" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">
                    {selectedOrder.productName}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {selectedOrder.duration} · {selectedOrder.accessType}
                  </p>
                </div>
                <span className="font-bold text-sm text-slate-950">
                  {formatRupiah(selectedOrder.totalAmount)}
                </span>
              </div>

              {/* Account Credentials / Activation Data */}
              {selectedOrder.credentials && (
                <div className="mt-3.5 p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-indigo-950 uppercase tracking-wide">
                      Informasi Akses & Kredensial
                    </span>
                    <span className="text-[10px] text-indigo-600 font-semibold">Aktif</span>
                  </div>

                  {selectedOrder.credentials.accountEmail && (
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-indigo-100">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">Email / ID</span>
                          <span className="font-mono text-slate-800 font-semibold">
                            {selectedOrder.credentials.accountEmail}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            handleCopy(selectedOrder.credentials?.accountEmail || '', 'email')
                          }
                          className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1"
                        >
                          {copiedField === 'email' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span>Disalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>

                      {selectedOrder.credentials.accountPassword && (
                        <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-indigo-100">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">Kata Sandi</span>
                            <span className="font-mono text-slate-800 font-semibold tracking-widest">
                              ••••••••
                            </span>
                          </div>
                          <button
                            onClick={() => handleCopy('VipPass2026!', 'password')}
                            className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center gap-1"
                          >
                            {copiedField === 'password' ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span>Disalin</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Salin</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-[11px] text-indigo-900/90 mt-2.5 leading-relaxed">
                    {selectedOrder.credentials.instructions}
                  </p>
                </div>
              )}

              {/* Payment Breakdown */}
              <div className="mt-3.5 space-y-2 text-xs border-t border-slate-100 pt-3">
                <div className="flex justify-between text-slate-500">
                  <span>Harga Normal</span>
                  <span>{formatRupiah(selectedOrder.price)}</span>
                </div>
                {selectedOrder.pointsDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Diskon Poin Rewards</span>
                    <span>-{formatRupiah(selectedOrder.pointsDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-500">
                  <span>Metode Pembayaran</span>
                  <span className="font-medium text-slate-800">{selectedOrder.paymentMethod}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-bold text-sm pt-2 border-t border-slate-100">
                  <span>Total Bayar</span>
                  <span className="text-slate-950 font-extrabold">
                    {formatRupiah(selectedOrder.totalAmount)}
                  </span>
                </div>
              </div>

              {/* Help & Support CTA */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20Aurelia%2C%20saya%20butuh%20bantuan%20untuk%20pesanan%20${selectedOrder.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Bantuan WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
