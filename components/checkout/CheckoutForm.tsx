'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  ChevronLeft,
  QrCode,
  CreditCard,
  Wallet,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppBrandLogo } from '@/components/common/AppBrandLogo';
import { formatRupiah } from '@/lib/utils';
import { Product, PaymentMethod, Order } from '@/types';

interface CheckoutFormProps {
  products: Product[];
  initialProduct: Product;
  initialDuration?: string;
}

export function CheckoutForm({
  products,
  initialProduct,
  initialDuration,
}: CheckoutFormProps) {
  const router = useRouter();

  const [selectedProduct, setSelectedProduct] = useState<Product>(initialProduct);
  const [selectedDuration, setSelectedDuration] = useState<string>(
    initialDuration || initialProduct.duration || '1 Bulan'
  );

  // Form State
  const [name, setName] = useState('Maya Andini');
  const [whatsapp, setWhatsapp] = useState('081234567890');
  const [email, setEmail] = useState('mayaandini.id@gmail.com');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('QRIS');
  const [usePoints, setUsePoints] = useState(false);

  // Processing state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copiedVa, setCopiedVa] = useState(false);

  // Price calculations
  const durationOptions = selectedProduct.durationOptions || [
    { duration: '1 Bulan', price: selectedProduct.price },
    { duration: '3 Bulan', price: Math.round(selectedProduct.price * 2.7) },
    { duration: '1 Tahun', price: Math.round(selectedProduct.price * 9) },
  ];

  const currentOption =
    durationOptions.find((d) => d.duration === selectedDuration) || durationOptions[0];

  const basePrice = currentOption.price;
  const pointsDiscount = usePoints ? 5000 : 0;
  const totalAmount = Math.max(0, basePrice - pointsDiscount);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: selectedProduct.id,
          duration: selectedDuration,
          customerName: name,
          customerWhatsApp: whatsapp,
          customerEmail: email,
          paymentMethod,
          usePoints,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Terjadi kesalahan saat memproses pesanan.');
      }

      setCompletedOrder(data.data);
    } catch (err) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSimulatePayment = async () => {
    if (!completedOrder) return;
    try {
      await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: completedOrder.id, simulateSuccess: true }),
      });
      router.push('/transaksi');
    } catch (e) {
      router.push('/transaksi');
    }
  };

  return (
    <div className="w-full pb-10">
      {/* Back button */}
      <div className="py-2 mb-2">
        <Link
          href={`/produk/${selectedProduct.slug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Kembali ke Detail Produk</span>
        </Link>
      </div>

      <div className="mb-4">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 font-serif">
          Konfirmasi Pembayaran
        </h1>
        <p className="text-xs text-slate-500">
          Periksa kembali rincian produk digital dan data kontak Anda
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className="space-y-4">
        {/* Order Summary Card */}
        <section className="bg-white rounded-[26px] p-4 sm:p-5 border border-slate-200/90 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Ringkasan Pesanan
            </span>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {selectedProduct.accessType}
            </span>
          </div>

          <div className="py-3 flex items-start gap-3">
            <AppBrandLogo name={selectedProduct.name} size="lg" />
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-slate-900 text-sm">{selectedProduct.name}</h2>
              <p className="text-xs text-slate-500 mt-0.5">{selectedProduct.brand}</p>
            </div>
          </div>

          {/* Duration Selector inside checkout */}
          <div className="mt-2 pt-2 border-t border-slate-100">
            <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">
              Pilihan Paket:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {durationOptions.map((opt) => (
                <button
                  key={opt.duration}
                  type="button"
                  onClick={() => setSelectedDuration(opt.duration)}
                  className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                    selectedDuration === opt.duration
                      ? 'border-slate-900 bg-slate-900 text-white font-bold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 text-xs'
                  }`}
                >
                  <div className="text-[11px]">{opt.duration}</div>
                  <div className="text-xs font-extrabold mt-0.5">{formatRupiah(opt.price)}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Information Card */}
        <section className="bg-white rounded-[26px] p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block pb-1 border-b border-slate-100">
            Data Pembeli & Kontak Aktivasi
          </span>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Maya Andini"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Nomor WhatsApp (Untuk pengiriman kredensial)
            </label>
            <input
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="081234567890"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mayaandini.id@gmail.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </section>

        {/* Loyalty Points Redemption */}
        <section className="bg-white rounded-[26px] p-4 border border-slate-200/90 shadow-xs">
          <label className="flex items-center justify-between cursor-pointer select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Tukar 500 Poin Loyalitas
                </span>
                <span className="text-[11px] text-slate-500">Hemat {formatRupiah(5000)} langsung</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={usePoints}
              onChange={(e) => setUsePoints(e.target.checked)}
              className="w-4 h-4 accent-slate-900 rounded cursor-pointer"
            />
          </label>
        </section>

        {/* Payment Method Selector */}
        <section className="bg-white rounded-[26px] p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block pb-1 border-b border-slate-100">
            Metode Pembayaran Resmi
          </span>

          <div className="space-y-2">
            {/* QRIS */}
            <label
              className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                paymentMethod === 'QRIS'
                  ? 'border-slate-900 bg-slate-50/80 shadow-xs ring-1 ring-slate-900'
                  : 'border-slate-200 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="QRIS"
                  checked={paymentMethod === 'QRIS'}
                  onChange={() => setPaymentMethod('QRIS')}
                  className="accent-slate-900"
                />
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-black text-xs">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">QRIS Otomatis</span>
                  <span className="text-[10px] text-slate-500">
                    BCA, Mandiri, GoPay, OVO, ShopeePay, DANA
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Instan
              </span>
            </label>

            {/* Virtual Account Group */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Virtual Account Bank</span>
              </span>

              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    'BCA Virtual Account',
                    'Mandiri Virtual Account',
                    'BRI Virtual Account',
                  ] as PaymentMethod[]
                ).map((va) => (
                  <button
                    key={va}
                    type="button"
                    onClick={() => setPaymentMethod(va)}
                    className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                      paymentMethod === va
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {va.replace(' Virtual Account', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* E-Wallets */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                <Wallet className="w-3.5 h-3.5" />
                <span>Dompet Digital (E-Wallet)</span>
              </span>

              <div className="grid grid-cols-4 gap-2">
                {(['GoPay', 'OVO', 'DANA', 'ShopeePay'] as PaymentMethod[]).map((ew) => (
                  <button
                    key={ew}
                    type="button"
                    onClick={() => setPaymentMethod(ew)}
                    className={`py-2 px-1 rounded-xl border text-center text-[11px] font-semibold transition-all ${
                      paymentMethod === ew
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {ew}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Breakdown Card */}
        <section className="bg-white rounded-[26px] p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-2 text-xs">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block pb-1 border-b border-slate-100">
            Rincian Biaya
          </span>

          <div className="flex justify-between text-slate-600 pt-1">
            <span>Harga Paket ({selectedDuration})</span>
            <span>{formatRupiah(basePrice)}</span>
          </div>

          {usePoints && (
            <div className="flex justify-between text-emerald-600 font-semibold">
              <span>Potongan Poin Loyalitas</span>
              <span>-{formatRupiah(pointsDiscount)}</span>
            </div>
          )}

          <div className="flex justify-between text-slate-600">
            <span>Biaya Layanan & Gateway</span>
            <span className="text-emerald-700 font-semibold">Gratis (Rp0)</span>
          </div>

          <div className="flex justify-between items-baseline pt-2 border-t border-slate-100">
            <span className="font-bold text-sm text-slate-900">Total Pembayaran</span>
            <span className="font-black text-lg text-slate-950 tracking-tight">
              {formatRupiah(totalAmount)}
            </span>
          </div>
        </section>

        {errorMessage && (
          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-4 rounded-2xl bg-slate-950 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Bayar Sekarang ({formatRupiah(totalAmount)})</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px] pt-1 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Transaksi Terenkripsi & Dilindungi Garansi 30 Hari</span>
        </div>
      </form>

      {/* Payment Processing & Success Modal */}
      <AnimatePresence>
        {completedOrder && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed top-1/2 left-4 right-4 -translate-y-1/2 max-w-md mx-auto z-50 rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="font-serif font-bold text-lg text-slate-900">
                Pesanan Berhasil Dibuat!
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Nomor Pesanan: <span className="font-mono font-bold text-slate-800">{completedOrder.id}</span>
              </p>

              {/* Payment Details Simulator */}
              <div className="my-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Produk</span>
                  <span className="font-semibold text-slate-900">{completedOrder.productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Metode</span>
                  <span className="font-semibold text-slate-900">{completedOrder.paymentMethod}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200/60 pt-2 font-bold">
                  <span className="text-slate-900">Total Tagihan</span>
                  <span className="text-slate-950 font-black">
                    {formatRupiah(completedOrder.totalAmount)}
                  </span>
                </div>

                {/* QRIS / VA Display */}
                {completedOrder.virtualAccountNumber && (
                  <div className="mt-2 p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Nomor Virtual Account</span>
                      <span className="font-mono font-bold text-indigo-950 text-sm">
                        {completedOrder.virtualAccountNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(completedOrder.virtualAccountNumber || '');
                        setCopiedVa(true);
                        setTimeout(() => setCopiedVa(false), 2000);
                      }}
                      className="px-2 py-1 rounded-lg bg-white border border-indigo-200 text-xs font-semibold text-indigo-700 flex items-center gap-1"
                    >
                      {copiedVa ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedVa ? 'Disalin' : 'Salin'}</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-98"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Konfirmasi & Buka Akun Sekarang</span>
                </button>

                <Link
                  href="/transaksi"
                  className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs text-center block transition-colors"
                >
                  Lihat Riwayat Transaksi &rarr;
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
