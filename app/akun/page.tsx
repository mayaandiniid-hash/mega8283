'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  ShoppingBag,
  Gift,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  X,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatRupiah } from '@/lib/utils';
import { initialUserProfile, initialRewardProfile } from '@/lib/db';

export default function AkunPage() {
  const [user, setUser] = useState(initialUserProfile);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editWhatsApp, setEditWhatsApp] = useState(user.whatsapp);
  const [isSaved, setIsSaved] = useState(false);

  const rewards = initialRewardProfile;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      name: editName,
      whatsapp: editWhatsApp,
    }));
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setActiveModal(null);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedOut(true);
    setTimeout(() => {
      setIsLoggedOut(false);
      setActiveModal(null);
    }, 1800);
  };

  return (
    <div className="w-full py-2 space-y-4">
      {/* Profile Header Card (iOS Style) */}
      <div className="bg-white rounded-[28px] p-5 border border-slate-200/90 shadow-xs relative overflow-hidden">
        <div className="flex items-center gap-4">
          {/* Avatar with luxury gradient border */}
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-600 shadow-md shrink-0">
            <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-xl font-bold">
              MA
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-bold text-slate-900 truncate">{user.name}</h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                {user.memberTier} Member
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 truncate">
              <Mail className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5 truncate">
              <Phone className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">{user.whatsapp}</span>
            </div>
          </div>
        </div>

        {/* Reward Points & Purchase Count Stats Bar */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-3.5 border-t border-slate-100">
          <button
            onClick={() => setActiveModal('rewards')}
            className="flex flex-col p-2.5 rounded-2xl bg-amber-50/70 hover:bg-amber-100/60 border border-amber-100 transition-colors text-left"
          >
            <div className="flex items-center gap-1 text-amber-700 text-[11px] font-semibold">
              <Gift className="w-3.5 h-3.5" />
              <span>Reward Points</span>
            </div>
            <span className="text-base font-extrabold text-amber-950 mt-0.5">
              {user.rewardPoints} Poin
            </span>
            <span className="text-[10px] text-amber-700/80">
              ≈ {formatRupiah(rewards.pointValueInIdr)}
            </span>
          </button>

          <Link
            href="/transaksi"
            className="flex flex-col p-2.5 rounded-2xl bg-indigo-50/70 hover:bg-indigo-100/60 border border-indigo-100 transition-colors"
          >
            <div className="flex items-center gap-1 text-indigo-700 text-[11px] font-semibold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Total Pesanan</span>
            </div>
            <span className="text-base font-extrabold text-indigo-950 mt-0.5">
              {user.purchaseCount} Transaksi
            </span>
            <span className="text-[10px] text-indigo-700/80">Lihat semua riwayat &rarr;</span>
          </Link>
        </div>
      </div>

      {/* iOS Grouped Menu: Akun & Transaksi */}
      <div className="bg-white rounded-[26px] border border-slate-200/90 shadow-xs overflow-hidden divide-y divide-slate-100">
        <button
          onClick={() => setActiveModal('profile')}
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Edit Profil Akun</span>
              <span className="text-[11px] text-slate-500">Ubah nama dan nomor WhatsApp</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        <Link
          href="/transaksi"
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Daftar Transaksi</span>
              <span className="text-[11px] text-slate-500">Cek status lisensi dan kredensial</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </Link>

        <button
          onClick={() => setActiveModal('rewards')}
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Misi & Hadiah Poin</span>
              <span className="text-[11px] text-slate-500">Tukar poin dengan potongan belanja</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* iOS Grouped Menu: Preferensi & Keamanan */}
      <div className="bg-white rounded-[26px] border border-slate-200/90 shadow-xs overflow-hidden divide-y divide-slate-100">
        <button
          onClick={() => setActiveModal('notifications')}
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Pengaturan Notifikasi</span>
              <span className="text-[11px] text-slate-500">WhatsApp & email pengingat kedaluwarsa</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => setActiveModal('security')}
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Keamanan & Privasi</span>
              <span className="text-[11px] text-slate-500">Sesi terenkripsi & data pembeli aman</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        <a
          href="https://wa.me/6281234567890?text=Halo%20Admin%20Aurelia%20Catherine%2C%20saya%20memerlukan%20bantuan"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-semibold text-slate-900 block">Pusat Bantuan & CS</span>
              <span className="text-[11px] text-slate-500">WhatsApp fast response 24/7</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </a>
      </div>

      {/* Logout Action */}
      <div className="bg-white rounded-[24px] border border-slate-200/90 shadow-xs overflow-hidden">
        <button
          onClick={() => setActiveModal('logout')}
          className="w-full px-4 py-3 flex items-center justify-center gap-2 text-rose-600 hover:bg-rose-50/60 font-semibold text-xs transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Keluar Akun (Logout)</span>
        </button>
      </div>

      {/* Store Trust Footer */}
      <div className="text-center pt-2 pb-6">
        <p className="font-serif text-xs text-slate-400 italic">
          Aurelia Cathērine · Premium Digital Products, Simple and Fast.
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">Versi Aplikasi 2.4.0 (Portable Vercel & Netlify)</p>
      </div>

      {/* Modal Systems */}
      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-md mx-auto z-50 rounded-3xl bg-white p-5 shadow-2xl border border-slate-100"
            >
              {/* Profile Edit Modal */}
              {activeModal === 'profile' && (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm">Edit Data Profil</h3>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveProfile} className="mt-4 space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="text"
                        value={editWhatsApp}
                        onChange={(e) => setEditWhatsApp(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                        required
                      />
                    </div>

                    {isSaved && (
                      <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Profil berhasil diperbarui!</span>
                      </div>
                    )}

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModal(null)}
                        className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
                      >
                        Simpan Perubahan
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Rewards Modal */}
              {activeModal === 'rewards' && (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-amber-600" />
                      <h3 className="font-bold text-slate-900 text-sm">Reward Points Saya</h3>
                    </div>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-amber-500 text-slate-950">
                    <span className="text-[11px] font-semibold text-slate-900/80 block">
                      Saldo Poin Aktif
                    </span>
                    <div className="text-2xl font-black mt-0.5">{user.rewardPoints} Points</div>
                    <p className="text-xs text-slate-900/90 mt-1">
                      Setara dengan potongan belanja {formatRupiah(rewards.pointValueInIdr)} di kasir checkout.
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs font-bold text-slate-900 mb-2">Cara Mendapatkan Poin</h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Cashback 250 Poin setiap kali menyelesaikan pembelian.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Bonus 100 Poin saat memberikan ulasan bintang 5.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <Link
                      href="/"
                      onClick={() => setActiveModal(null)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                    >
                      Gunakan Belanja Sekarang
                    </Link>
                  </div>
                </div>
              )}

              {/* Notifications Setting Modal */}
              {activeModal === 'notifications' && (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm">Preferensi Pemberitahuan</h3>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                      <div>
                        <span className="text-xs font-semibold text-slate-900 block">
                          Notifikasi WhatsApp
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Kirim kredensial dan aktivasi ke nomor WA
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 accent-slate-900"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                      <div>
                        <span className="text-xs font-semibold text-slate-900 block">
                          Pengingat Masa Aktif
                        </span>
                        <span className="text-[11px] text-slate-500">
                          H-3 sebelum paket lisensi berakhir
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 accent-slate-900"
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-2 flex justify-end">
                    <button
                      onClick={() => setActiveModal(null)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              )}

              {/* Security Modal */}
              {activeModal === 'security' && (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-600" />
                      <h3 className="font-bold text-slate-900 text-sm">Keamanan & Enkripsi</h3>
                    </div>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 space-y-2.5 text-xs text-slate-600 leading-relaxed">
                    <p>
                      Aurelia Cathērine menerapkan standar keamanan cookies HTTP-Only dan enkripsi TLS
                      256-bit untuk seluruh pengiriman data lisensi.
                    </p>
                    <p>
                      Password dan token otentikasi tidak pernah disimpan sembarangan di browser local
                      storage demi menjamin kerahasiaan Anda.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => setActiveModal(null)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                    >
                      Mengerti
                    </button>
                  </div>
                </div>
              )}

              {/* Logout Confirmation */}
              {activeModal === 'logout' && (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm">Konfirmasi Keluar</h3>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-600">
                    Apakah Anda yakin ingin keluar dari akun Aurelia Cathērine di perangkat ini?
                  </p>

                  {isLoggedOut && (
                    <div className="mt-3 p-2.5 rounded-xl bg-slate-900 text-white text-xs text-center font-medium">
                      Sesi berhasil ditutup. Mengalihkan...
                    </div>
                  )}

                  <div className="mt-4 pt-2 flex justify-end gap-2">
                    <button
                      onClick={() => setActiveModal(null)}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold"
                    >
                      Ya, Keluar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
