import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/navigation/Header';
import { BottomNav } from '@/components/navigation/BottomNav';

export const metadata: Metadata = {
  title: 'Aurelia Cathērine — Premium Digital Store',
  description:
    'Temukan berbagai produk digital premium dengan proses pembelian yang cepat dan mudah. CapCut Pro, Canva Pro, Alight Motion, Spotify, dan lainnya.',
  keywords: [
    'Aurelia Catherine',
    'Produk Digital Premium',
    'CapCut Pro',
    'Canva Pro',
    'Alight Motion',
    'Spotify Premium',
    'Netflix',
    'Aplikasi Premium Murah',
  ],
  authors: [{ name: 'Aurelia Cathērine' }],
  openGraph: {
    title: 'Aurelia Cathērine — Premium Digital Store',
    description:
      'Temukan berbagai produk digital premium dengan proses pembelian yang cepat dan mudah.',
    url: 'https://aureliacatherine.com',
    siteName: 'Aurelia Cathērine',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelia Cathērine — Premium Digital Store',
    description:
      'Temukan berbagai produk digital premium dengan proses pembelian yang cepat dan mudah.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full bg-slate-100/70 antialiased selection:bg-slate-900 selection:text-white">
      <body className="min-h-full flex flex-col text-slate-900 font-sans" suppressHydrationWarning>
        <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col bg-white sm:shadow-lg sm:border-x sm:border-slate-200/60 min-h-screen relative">
          <Header />
          <main className="flex-1 px-4 sm:px-5 pt-2 pb-[calc(96px+env(safe-area-inset-bottom,16px))]">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
