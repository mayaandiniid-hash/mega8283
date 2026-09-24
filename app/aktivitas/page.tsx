'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  ShoppingBag,
  CreditCard,
  Cpu,
  CheckCircle2,
  Gift,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { initialActivities } from '@/lib/db';
import { Activity as ActivityType } from '@/types';

export default function AktivitasPage() {
  const [filterType, setFilterType] = useState<string>('all');
  const activities = initialActivities;

  const filteredActivities = activities.filter((act) => {
    if (filterType === 'all') return true;
    if (filterType === 'order') return act.type === 'order';
    if (filterType === 'payment') return act.type === 'payment';
    if (filterType === 'reward') return act.type === 'reward';
    return true;
  });

  const getActivityIcon = (type: ActivityType['type']) => {
    switch (type) {
      case 'order':
        return {
          icon: ShoppingBag,
          color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
        };
      case 'payment':
        return {
          icon: CreditCard,
          color: 'text-blue-600 bg-blue-50 border-blue-100',
        };
      case 'processing':
        return {
          icon: Cpu,
          color: 'text-amber-600 bg-amber-50 border-amber-100',
        };
      case 'completed':
        return {
          icon: CheckCircle2,
          color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        };
      case 'reward':
        return {
          icon: Gift,
          color: 'text-rose-600 bg-rose-50 border-rose-100',
        };
      case 'security':
        return {
          icon: ShieldAlert,
          color: 'text-slate-600 bg-slate-50 border-slate-100',
        };
      default:
        return {
          icon: Activity,
          color: 'text-slate-600 bg-slate-50 border-slate-100',
        };
    }
  };

  return (
    <div className="w-full py-2">
      {/* Page Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 font-serif">
              Linimasa Aktivitas
            </h1>
            <p className="text-xs text-slate-500">Pemberitahuan & riwayat proses akun otomatis Anda</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-3 px-0.5 no-scrollbar">
        {[
          { id: 'all', label: 'Semua Aktivitas' },
          { id: 'order', label: 'Pesanan' },
          { id: 'payment', label: 'Pembayaran' },
          { id: 'reward', label: 'Rewards & Poin' },
        ].map((tab) => {
          const isActive = filterType === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
                isActive
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Timeline Section */}
      <div className="relative pl-6 sm:pl-8 mt-2 space-y-4 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200">
        {filteredActivities.map((activity, index) => {
          const config = getActivityIcon(activity.type);
          const Icon = config.icon;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="relative"
            >
              {/* Timeline Pin Dot */}
              <div
                className={`absolute -left-6 sm:-left-8 top-3.5 w-6 h-6 rounded-full border flex items-center justify-center shadow-xs ${config.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Activity Card */}
              <div className="bg-white rounded-[22px] p-3.5 sm:p-4 border border-slate-200/90 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {activity.title}
                  </h3>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap shrink-0">
                    {activity.relativeTime}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {activity.description}
                </p>

                {/* Optional Action / Detail Reference */}
                {activity.orderId && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-slate-700">
                      Ref: {activity.orderId}
                    </span>
                    <Link
                      href="/transaksi"
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <span>Lihat Status</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}

                {activity.points && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-600">
                      +{activity.points} Poin Diterima
                    </span>
                    <Link
                      href="/akun"
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                    >
                      <span>Cek Saldo Poin</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
