'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Receipt, Activity, UserRound } from 'lucide-react';
import { motion } from 'motion/react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'HOME',
    href: '/',
    icon: House,
  },
  {
    id: 'transaksi',
    label: 'TRANSAKSI',
    href: '/transaksi',
    icon: Receipt,
  },
  {
    id: 'aktivitas',
    label: 'AKTIVITAS',
    href: '/aktivitas',
    icon: Activity,
  },
  {
    id: 'akun',
    label: 'AKUN',
    href: '/akun',
    icon: UserRound,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        bottom: 'calc(14px + env(safe-area-inset-bottom, 0px))',
        left: '12px',
        right: '12px',
      }}
    >
      <nav
        aria-label="Navigasi Utama"
        className="pointer-events-auto mx-auto max-w-[500px] h-[64px] px-2 flex items-center justify-around relative select-none"
        style={{
          background: 'rgba(255, 255, 255, 0.62)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.72)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
          borderRadius: '28px',
        }}
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex-1 h-[48px] flex flex-col items-center justify-center rounded-[20px] transition-transform active:scale-[0.96] text-center"
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Floating Active Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeLiquidPill"
                  className="absolute inset-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.78)',
                    boxShadow:
                      'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 4px 12px rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              {/* Icon & Label */}
              <div
                className={`relative z-10 flex flex-col items-center justify-center transition-colors duration-200 ${
                  isActive ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className={`w-[21px] h-[21px] transition-transform duration-200 ${isActive ? 'scale-105 stroke-[2.4]' : 'stroke-[1.8]'}`} />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider mt-0.5 uppercase leading-none">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
