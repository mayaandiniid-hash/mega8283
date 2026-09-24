import {
  Product,
  Category,
  Order,
  Activity,
  Banner,
  UserRewardProfile,
  UserProfile,
} from '@/types';

// In-Memory Database store with Repository Interface
// Allows seamless migration to PostgreSQL / Supabase / Prisma

export const initialCategories: Category[] = [
  { id: 'cat-all', name: 'All', slug: 'all', count: 10 },
  { id: 'cat-design', name: 'Design', slug: 'design', count: 2 },
  { id: 'cat-video', name: 'Video', slug: 'video', count: 2 },
  { id: 'cat-music', name: 'Music', slug: 'music', count: 1 },
  { id: 'cat-ent', name: 'Entertainment', slug: 'entertainment', count: 2 },
  { id: 'cat-ai', name: 'AI', slug: 'ai', count: 2 },
  { id: 'cat-prod', name: 'Productivity', slug: 'productivity', count: 1 },
  { id: 'cat-edu', name: 'Education', slug: 'education', count: 1 },
  { id: 'cat-photo', name: 'Photography', slug: 'photography', count: 1 },
  { id: 'cat-util', name: 'Utilities', slug: 'utilities', count: 1 },
];

export const initialBanners: Banner[] = [
  {
    id: 'banner-1',
    title: 'Trending Premium Apps',
    subtitle: 'Aplikasi premium yang sedang populer',
    backgroundColor: 'from-violet-600 via-indigo-600 to-purple-800',
    textColor: 'text-white',
    ctaText: 'Explore Now',
    ctaLink: '/#trending-apps',
    appIcons: ['CapCut', 'Canva', 'Alight Motion', 'Spotify'],
    sortOrder: 1,
    active: true,
  },
  {
    id: 'banner-2',
    title: 'Hot Deals',
    subtitle: 'Premium mulai Rp20.000',
    backgroundColor: 'from-rose-500 via-pink-600 to-amber-500',
    textColor: 'text-white',
    ctaText: 'Shop Now',
    ctaLink: '/produk/capcut-pro',
    highlightText: 'CapCut Pro',
    highlightPrice: 35000,
    sortOrder: 2,
    active: true,
  },
];

export const initialProducts: Product[] = [
  {
    id: 'prod-capcut-pro',
    slug: 'capcut-pro',
    name: 'CapCut Pro',
    brand: 'CapCut',
    badge: 'Trending',
    price: 35000,
    originalPrice: 79000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 35000, originalPrice: 79000 },
      { label: '3 Bulan', duration: '3 Months', price: 95000, originalPrice: 229000 },
      { label: '1 Tahun', duration: '1 Year', price: 289000, originalPrice: 699000 },
    ],
    category: 'Video Editing',
    status: 'Available',
    accessType: 'Private Access',
    tags: ['Trending', 'Hot Deal', 'Flash Sale'],
    description:
      'Akses resmi CapCut Pro dengan fitur ekspor 4K 60fps tanpa watermark, ribuan efek pro & transisi AI eksklusif, serta cloud storage 100GB. Login langsung ke akun email pribadi Anda dengan garansi penuh 30 hari.',
    shortDescription: 'Ekspor 4K tanpa watermark, auto captions AI & efek VIP tanpa batas.',
    features: [
      'Private account (Email sendiri atau baru)',
      'Bebas Watermark & Ekspor 4K 60FPS',
      'Akses Penuh Seluruh Template & Efek VIP',
      'Auto-Caption & Script-to-Video AI',
      'Garansi Replace 30 Hari Penuh',
      'Support iOS, Android, macOS & Windows',
    ],
    faq: [
      {
        question: 'Apakah akun ini aman dan bergaransi?',
        answer:
          '100% aman dan bergaransi resmi selama durasi langganan. Jika terjadi kendala, customer support kami siap mengganti atau membantu dalam 1x24 jam.',
      },
      {
        question: 'Berapa perangkat yang bisa digunakan?',
        answer: 'Mendukung login hingga 2 perangkat aktif secara bersamaan.',
      },
      {
        question: 'Bagaimana proses pengiriman akun?',
        answer:
          'Proses otomatis dan instan 1-5 menit setelah pembayaran QRIS/VA berhasil diverifikasi.',
      },
    ],
    stockCount: 42,
    soldCount: 840,
    rating: 4.9,
    reviewCount: 382,
    accentColor: '#000000',
    bgColor: '#f4f4f5',
    isFeatured: true,
    isTrending: true,
    isHotDeal: true,
    isFlashSale: true,
    flashSaleDiscount: 55,
  },
  {
    id: 'prod-canva-pro',
    slug: 'canva-pro',
    name: 'Canva Pro',
    brand: 'Canva',
    badge: 'Popular',
    price: 25000,
    originalPrice: 95000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 25000, originalPrice: 95000 },
      { label: '3 Bulan', duration: '3 Months', price: 65000, originalPrice: 270000 },
      { label: '1 Tahun', duration: '1 Year', price: 180000, originalPrice: 750000 },
    ],
    category: 'Design',
    status: 'Available',
    accessType: 'Subscription Service',
    tags: ['Trending', 'Hot Deal', 'Flash Sale'],
    description:
      'Undang Canva Pro ke email pribadi Anda (Team Invite resmi). Akses 100M+ stok foto, grafis, font premium, Brand Kit, magic resize, background remover satu klik dan AI Image Generator.',
    shortDescription: '100M+ aset grafis premium, Magic Resize, & AI Design Tools.',
    features: [
      'Gabung ke email pribadi tanpa ganti password',
      'One-click Background Remover instan',
      'Akses 100+ Juta Foto & Video Premium',
      'Resize desain otomatis ke semua platform',
      'Desain tersimpan aman di akun Anda sendiri',
      'Garansi aktif selama durasi paket',
    ],
    faq: [
      {
        question: 'Apakah desain lama saya akan hilang?',
        answer:
          'Tidak, desain Anda tetap aman tersimpan di akun Anda dan tidak bisa diakses orang lain.',
      },
      {
        question: 'Apakah perlu memberikan password email?',
        answer:
          'Tidak perlu password sama sekali! Kami hanya membutuhkan alamat email terdaftar Canva Anda untuk mengirimkan undangan Pro.',
      },
    ],
    stockCount: 88,
    soldCount: 1420,
    rating: 5.0,
    reviewCount: 610,
    accentColor: '#00C4CC',
    bgColor: '#e0f7fa',
    isFeatured: true,
    isTrending: true,
    isHotDeal: true,
    isFlashSale: true,
    flashSaleDiscount: 73,
  },
  {
    id: 'prod-alight-motion',
    slug: 'alight-motion',
    name: 'Alight Motion',
    brand: 'Alight Motion',
    badge: 'Hot Deal',
    price: 20000,
    originalPrice: 60000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 20000, originalPrice: 60000 },
      { label: '1 Tahun', duration: '1 Year', price: 120000, originalPrice: 360000 },
    ],
    category: 'Video Editing',
    status: 'Available',
    accessType: 'Activation Service',
    tags: ['Hot Deal', 'Flash Sale'],
    description:
      'Aplikasi animasi grafis gerak, efek visual, pengeditan video dan pengomposisian video berkualitas profesional pertama di smartphone. Hilangkan watermark dan impor semua preset XML tanpa batas.',
    shortDescription: 'Motion graphics & visual effects mobile tanpa watermark.',
    features: [
      'Hapus watermark Alight Motion 100%',
      'Support impor preset XML & link 5MB+',
      'Akses penuh semua efek visual premium',
      'Ekspor format MP4 60FPS dan GIF resolusi tinggi',
      'Aktifasi akun resmi & bergaransi',
    ],
    faq: [
      {
        question: 'Apakah bisa import preset XML?',
        answer: 'Tentu bisa! Semua preset XML dan link preset bisa langsung diimpor lancar.',
      },
    ],
    stockCount: 35,
    soldCount: 520,
    rating: 4.8,
    reviewCount: 215,
    accentColor: '#179848',
    bgColor: '#e8f5e9',
    isFeatured: true,
    isTrending: true,
    isHotDeal: true,
    isFlashSale: true,
    flashSaleDiscount: 66,
  },
  {
    id: 'prod-spotify-premium',
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    brand: 'Spotify',
    badge: 'Popular',
    price: 25000,
    originalPrice: 55000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 25000, originalPrice: 55000 },
      { label: '3 Bulan', duration: '3 Months', price: 69000, originalPrice: 165000 },
      { label: '1 Tahun', duration: '1 Year', price: 210000, originalPrice: 660000 },
    ],
    category: 'Music',
    status: 'Available',
    accessType: 'Shared Access',
    tags: ['Trending', 'Hot Deal', 'Flash Sale'],
    description:
      'Dengarkan jutaan lagu tanpa jeda iklan, download offline untuk didengarkan kapan saja, dan nikmati kualitas audio High Quality 320kbps. Bisa digunakan di iPhone, Android, Smart TV & Web Player.',
    shortDescription: 'Bebas iklan, download lagu offline, kualitas audio 320kbps.',
    features: [
      'Bebas gangguan iklan audio & visual',
      'Bisa skip lagu tanpa batas (Unlimited Skip)',
      'Download lagu & podcast untuk didengarkan offline',
      'Kualitas audio Ultra-High 320 kbps',
      'Playlist lama dan Spotify Wrapped tetap aman',
    ],
    faq: [
      {
        question: 'Apakah playlist lagu saya hilang?',
        answer: 'Playlist Anda tetap aman 100% dan dapat dipindahkan jika diperlukan.',
      },
    ],
    stockCount: 60,
    soldCount: 980,
    rating: 4.9,
    reviewCount: 450,
    accentColor: '#1DB954',
    bgColor: '#e8f8ed',
    isFeatured: true,
    isTrending: true,
    isHotDeal: true,
    isFlashSale: true,
    flashSaleDiscount: 54,
  },
  {
    id: 'prod-netflix',
    slug: 'netflix',
    name: 'Netflix',
    brand: 'Netflix',
    badge: 'Hot',
    price: 35000,
    originalPrice: 65000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan (1 Profil)', duration: '1 Month', price: 35000, originalPrice: 65000 },
      { label: '1 Bulan (Private Account)', duration: '1 Month', price: 165000, originalPrice: 186000 },
    ],
    category: 'Entertainment',
    status: 'Available',
    accessType: 'Shared Access',
    tags: ['Trending', 'Hot Deal'],
    description:
      'Nonton ribuan film, serial TV, drama korea, dan anime favorit dalam resolusi Ultra HD 4K HDR. Profil dilengkapi PIN pribadi sehingga riwayat tontonan Anda tidak tercampur pengguna lain.',
    shortDescription: 'Streaming film & serial Ultra HD 4K HDR dengan PIN profil pribadi.',
    features: [
      'Kualitas Streaming Ultra HD 4K + HDR',
      '1 Profil Khusus dengan PIN Pengaman Pribadi',
      'Garansi Anti On-Hold / Anti Screen Limit',
      'Subtitle Bahasa Indonesia Resmi & Lengkap',
      'Support TV, Laptop, Tablet, dan Smartphone',
    ],
    faq: [
      {
        question: 'Apakah profil saya diakses orang lain?',
        answer: 'Tidak, setiap profil diproteksi dengan 4-digit PIN rahasia milik Anda sendiri.',
      },
    ],
    stockCount: 25,
    soldCount: 710,
    rating: 4.8,
    reviewCount: 320,
    accentColor: '#E50914',
    bgColor: '#fde8e9',
    isFeatured: true,
    isTrending: true,
    isHotDeal: true,
  },
  {
    id: 'prod-youtube-premium',
    slug: 'youtube-premium',
    name: 'YouTube Premium',
    brand: 'YouTube',
    badge: 'Best Value',
    price: 30000,
    originalPrice: 59000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 30000, originalPrice: 59000 },
      { label: '3 Bulan', duration: '3 Months', price: 80000, originalPrice: 177000 },
    ],
    category: 'Entertainment',
    status: 'Available',
    accessType: 'Activation Service',
    tags: ['Trending'],
    description:
      'Nonton semua video YouTube tanpa iklan sedikitpun, putar di latar belakang (background play) saat membuka aplikasi lain atau layar mati, serta bonus YouTube Music Premium.',
    shortDescription: 'Nonton tanpa iklan, background play & include YouTube Music.',
    features: [
      'Tanpa iklan di semua video YouTube',
      'Putar di latar belakang (Background Play)',
      'Download video offline resolusi hingga 1080p',
      'Termasuk akses YouTube Music Premium',
      'Aktivasi langsung ke email Google pribadi Anda',
    ],
    faq: [
      {
        question: 'Apakah butuh password akun Google saya?',
        answer: 'Tidak perlu password. Kami hanya mengirimkan link undangan Google Family resmi.',
      },
    ],
    stockCount: 50,
    soldCount: 640,
    rating: 4.9,
    reviewCount: 289,
    accentColor: '#FF0000',
    bgColor: '#fee2e2',
    isFeatured: false,
    isTrending: true,
    isHotDeal: false,
  },
  {
    id: 'prod-chatgpt',
    slug: 'chatgpt',
    name: 'ChatGPT',
    brand: 'ChatGPT',
    badge: 'AI Pro',
    price: 35000,
    originalPrice: 320000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan (Shared Pro)', duration: '1 Month', price: 35000, originalPrice: 320000 },
      { label: '1 Bulan (Private Account)', duration: '1 Month', price: 290000, originalPrice: 350000 },
    ],
    category: 'AI',
    status: 'Available',
    accessType: 'Shared Access',
    tags: ['Trending', 'AI'],
    description:
      'Akses model AI tercanggih GPT-4o, DALL·E 3 Image Generator, Canvas, Data Analysis, Custom GPTs, dan Voice Mode. Sangat cocok untuk riset, coding, penulisan artikel, dan otomatisasi kerja harian.',
    shortDescription: 'Akses model GPT-4o, DALL·E 3, Browsing & Custom GPTs.',
    features: [
      'Akses GPT-4o dengan batas pesan tinggi',
      'Generate visual realistis via DALL·E 3',
      'Upload file PDF, Excel, dan analisis data instan',
      'Akses jutaan Custom GPT di GPT Store',
      'Respon cepat dan prioritas server stabil',
    ],
    faq: [
      {
        question: 'Bagaimana cara pakainya?',
        answer:
          'Anda akan diberikan kredensial login premium langsung ke chatgpt.com atau login via portal instan kami.',
      },
    ],
    stockCount: 40,
    soldCount: 890,
    rating: 4.9,
    reviewCount: 395,
    accentColor: '#10A37F',
    bgColor: '#e6f7f2',
    isFeatured: false,
    isTrending: true,
    isHotDeal: false,
  },
  {
    id: 'prod-gemini',
    slug: 'gemini',
    name: 'Gemini',
    brand: 'Gemini',
    badge: 'AI Advanced',
    price: 30000,
    originalPrice: 309000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan (Advanced)', duration: '1 Month', price: 30000, originalPrice: 309000 },
    ],
    category: 'AI',
    status: 'Available',
    accessType: 'Shared Access',
    tags: ['Trending', 'AI'],
    description:
      'Gemini Advanced dengan model multimodal 1.5 Pro dan context window 1 juta token. Terintegrasi mulus dengan Google Docs, Gmail, Drive, serta fitur Deep Research.',
    shortDescription: 'Gemini 1.5 Pro dengan konteks 1M token & integrasi Google Workspace.',
    features: [
      'Model Gemini 1.5 Pro multimodal generasi terbaru',
      'Konteks hingga 1 Juta Token (upload dokumen ratusan lembar)',
      'Analisis audio, video, teks, dan kode pemrograman',
      'Kecepatan inferensi tinggi & minim halusinasi',
      'Garansi pergantian 30 hari penuh',
    ],
    faq: [
      {
        question: 'Apakah bisa upload file video panjang?',
        answer: 'Bisa! Gemini 1.5 Pro mendukung video hingga 1 jam langsung dianalisis.',
      },
    ],
    stockCount: 28,
    soldCount: 310,
    rating: 4.7,
    reviewCount: 142,
    accentColor: '#1A73E8',
    bgColor: '#e8f0fe',
    isFeatured: false,
    isTrending: true,
    isHotDeal: false,
  },
  {
    id: 'prod-picsart',
    slug: 'picsart',
    name: 'Picsart',
    brand: 'Picsart',
    badge: 'Design',
    price: 20000,
    originalPrice: 65000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 20000, originalPrice: 65000 },
      { label: '1 Tahun', duration: '1 Year', price: 110000, originalPrice: 390000 },
    ],
    category: 'Design',
    status: 'Available',
    accessType: 'Activation Service',
    tags: ['Design'],
    description:
      'Picsart Gold menghadirkan jutaan stiker eksklusif, font premium, filter artistik, AI Avatar, serta alat penghapus objek otomatis tanpa batas di perangkat mobile Anda.',
    shortDescription: 'Editor foto lengkap dengan AI Avatar, efek pro, dan jutaan stiker.',
    features: [
      'Bebas iklan dan watermark',
      'AI Object Remover & AI Background Changer',
      'Jutaan stiker, font dan bingkai premium',
      'Ekspor foto kualitas ultra high resolution',
      'Garansi replace selama periode aktif',
    ],
    faq: [
      {
        question: 'Apakah bisa di Android dan iPhone?',
        answer: 'Ya, Picsart Gold kompatibel untuk Android maupun iOS.',
      },
    ],
    stockCount: 30,
    soldCount: 410,
    rating: 4.8,
    reviewCount: 180,
    accentColor: '#C92CF4',
    bgColor: '#fae8ff',
    isFeatured: false,
    isTrending: true,
    isHotDeal: false,
  },
  {
    id: 'prod-adobe-lightroom',
    slug: 'adobe-lightroom',
    name: 'Adobe Lightroom',
    brand: 'Adobe Lightroom',
    badge: 'Pro Photo',
    price: 25000,
    originalPrice: 85000,
    duration: '1 Month',
    durationOptions: [
      { label: '1 Bulan', duration: '1 Month', price: 25000, originalPrice: 85000 },
      { label: '1 Tahun', duration: '1 Year', price: 175000, originalPrice: 590000 },
    ],
    category: 'Photography',
    status: 'Available',
    accessType: 'Private Access',
    tags: ['Photography'],
    description:
      'Edit foto tingkat profesional dengan Adobe Lightroom Premium. Mendukung editing file RAW, masking cerdas bertenaga AI, selective adjustments, dan preset premium eksklusif fotografer.',
    shortDescription: 'Edit foto format RAW dengan AI masking & sinkronisasi cloud.',
    features: [
      'Support edit file RAW kamera DSLR/Mirrorless/Smartphone',
      'Alat Masking AI (Pilih Subjek, Langit, Latar Belakang otomatis)',
      'Fitur Geometry, Healing Brush & Selective adjustment',
      'Cloud storage Adobe aktif',
      'Garansi penuh & panduan login lengkap',
    ],
    faq: [
      {
        question: 'Apakah bisa login di app Lightroom resmi di Play Store / App Store?',
        answer: 'Ya, login langsung di aplikasi resmi yang diunduh dari App Store atau Google Play Store.',
      },
    ],
    stockCount: 22,
    soldCount: 350,
    rating: 4.9,
    reviewCount: 198,
    accentColor: '#31A8FF',
    bgColor: '#e6f4ff',
    isFeatured: false,
    isTrending: true,
    isHotDeal: false,
  },
];

export const initialOrders: Order[] = [
  {
    id: '#FLR-10284',
    productId: 'prod-capcut-pro',
    productName: 'CapCut Pro',
    productSlug: 'capcut-pro',
    brand: 'CapCut',
    duration: '1 Month',
    accessType: 'Private Access',
    price: 35000,
    discount: 0,
    pointsDiscount: 0,
    totalAmount: 35000,
    customerName: 'Maya Andini',
    customerWhatsApp: '081234567890',
    customerEmail: 'mayaandini.id@gmail.com',
    paymentMethod: 'QRIS',
    status: 'Processing',
    createdAt: '2026-09-24T03:15:00.000Z',
    paidAt: '2026-09-24T03:16:30.000Z',
    credentials: {
      accountEmail: 'maya.capcut.vip@aurelia.store',
      accountPassword: '••••••••',
      instructions: 'Login di aplikasi CapCut via opsi Email. Masukkan kode verifikasi jika diminta.',
      expiredAt: '2026-10-24T03:15:00.000Z',
    },
  },
  {
    id: '#FLR-10281',
    productId: 'prod-spotify-premium',
    productName: 'Spotify Premium',
    productSlug: 'spotify-premium',
    brand: 'Spotify',
    duration: '1 Month',
    accessType: 'Shared Access',
    price: 25000,
    discount: 0,
    pointsDiscount: 5000,
    totalAmount: 20000,
    customerName: 'Maya Andini',
    customerWhatsApp: '081234567890',
    customerEmail: 'mayaandini.id@gmail.com',
    paymentMethod: 'GoPay',
    status: 'Paid',
    createdAt: '2026-09-23T19:40:00.000Z',
    paidAt: '2026-09-23T19:41:10.000Z',
    credentials: {
      instructions: 'Sistem sedang memverifikasi slot Spotify Family Anda. Notifikasi akan dikirim ke WhatsApp.',
      expiredAt: '2026-10-23T19:40:00.000Z',
    },
  },
  {
    id: '#FLR-09852',
    productId: 'prod-canva-pro',
    productName: 'Canva Pro',
    productSlug: 'canva-pro',
    brand: 'Canva',
    duration: '1 Month',
    accessType: 'Subscription Service',
    price: 25000,
    discount: 0,
    pointsDiscount: 0,
    totalAmount: 25000,
    customerName: 'Maya Andini',
    customerWhatsApp: '081234567890',
    customerEmail: 'mayaandini.id@gmail.com',
    paymentMethod: 'QRIS',
    status: 'Completed',
    createdAt: '2026-09-18T10:10:00.000Z',
    paidAt: '2026-09-18T10:11:00.000Z',
    completedAt: '2026-09-18T10:12:15.000Z',
    credentials: {
      instructions: 'Undangan Canva Team Pro telah dikirimkan ke mayaandini.id@gmail.com.',
      expiredAt: '2026-10-18T10:10:00.000Z',
    },
  },
];

export const initialActivities: Activity[] = [
  {
    id: 'act-1',
    type: 'processing',
    title: 'Produk sedang diproses',
    description: 'Pesanan CapCut Pro #FLR-10284 sedang disiapkan oleh tim sistem otomatis.',
    timestamp: '2026-09-24T03:17:00.000Z',
    relativeTime: '18 menit lalu',
    orderId: '#FLR-10284',
  },
  {
    id: 'act-2',
    type: 'payment',
    title: 'Pembayaran QRIS diterima',
    description: 'Pembayaran Rp35.000 untuk pesanan #FLR-10284 telah berhasil diverifikasi.',
    timestamp: '2026-09-24T03:16:30.000Z',
    relativeTime: '20 menit lalu',
    orderId: '#FLR-10284',
  },
  {
    id: 'act-3',
    type: 'order',
    title: 'Pesanan CapCut Pro berhasil dibuat',
    description: 'Order baru #FLR-10284 durasi 1 Bulan berhasil terdaftar di sistem.',
    timestamp: '2026-09-24T03:15:00.000Z',
    relativeTime: '21 menit lalu',
    orderId: '#FLR-10284',
  },
  {
    id: 'act-4',
    type: 'reward',
    title: 'Reward 500 points diterima',
    description: 'Bonus loyalitas dari pembelian produk digital telah dikreditkan ke saldo akun Anda.',
    timestamp: '2026-09-23T20:00:00.000Z',
    relativeTime: 'Kemarin',
    points: 500,
  },
  {
    id: 'act-5',
    type: 'completed',
    title: 'Pesanan selesai',
    description: 'Pesanan Canva Pro #FLR-09852 telah aktif dan dapat langsung digunakan.',
    timestamp: '2026-09-18T10:12:15.000Z',
    relativeTime: '6 hari lalu',
    orderId: '#FLR-09852',
  },
];

export const initialRewardProfile: UserRewardProfile = {
  currentPoints: 1450,
  pointValueInIdr: 14500,
  completedTasks: 3,
  totalTasks: 14,
  nextMilestoneAmount: 27000,
  nextMilestonePoints: 500,
  tasks: [
    {
      id: 'task-1',
      title: 'Verifikasi Nomor WhatsApp',
      progress: 1,
      maxProgress: 1,
      rewardPoints: 100,
      completed: true,
      actionText: 'Terverifikasi',
      actionLink: '#',
    },
    {
      id: 'task-2',
      title: 'Transaksi Pertama di Toko',
      progress: 1,
      maxProgress: 1,
      rewardPoints: 250,
      completed: true,
      actionText: 'Selesai',
      actionLink: '#',
    },
    {
      id: 'task-3',
      title: 'Beli Produk Kategori Video',
      progress: 1,
      maxProgress: 1,
      rewardPoints: 150,
      completed: true,
      actionText: 'Selesai',
      actionLink: '#',
    },
    {
      id: 'task-4',
      title: 'Belanja minimal Rp50.000',
      progress: 35000,
      maxProgress: 50000,
      rewardPoints: 500,
      completed: false,
      actionText: 'Lanjutkan',
      actionLink: '/#super-offers',
    },
    {
      id: 'task-5',
      title: 'Review pesanan Anda',
      progress: 0,
      maxProgress: 1,
      rewardPoints: 200,
      completed: false,
      actionText: 'Tulis Review',
      actionLink: '/transaksi',
    },
    {
      id: 'task-6',
      title: 'Coba Produk AI (ChatGPT / Gemini)',
      progress: 0,
      maxProgress: 1,
      rewardPoints: 300,
      completed: false,
      actionText: 'Lihat AI',
      actionLink: '/produk/chatgpt',
    },
  ],
};

export const initialUserProfile: UserProfile = {
  id: 'usr-8b5ad04d',
  name: 'Maya Andini',
  email: 'mayaandini.id@gmail.com',
  whatsapp: '0812-3456-7890',
  avatarUrl: '',
  rewardPoints: 1450,
  purchaseCount: 3,
  memberTier: 'Silver',
  memberSince: 'Agustus 2025',
};

// Global in-memory mutable store for development & server runtime
class AureliaDatabase {
  private products: Product[] = [...initialProducts];
  private banners: Banner[] = [...initialBanners];
  private orders: Order[] = [...initialOrders];
  private activities: Activity[] = [...initialActivities];
  private categories: Category[] = [...initialCategories];
  private rewardProfile: UserRewardProfile = { ...initialRewardProfile };
  private userProfile: UserProfile = { ...initialUserProfile };

  // Product methods
  getProducts(): Product[] {
    return this.products;
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find((p) => p.slug === slug);
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  updateProduct(id: string, updates: Partial<Product>): Product | null {
    const idx = this.products.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    this.products[idx] = { ...this.products[idx], ...updates };
    return this.products[idx];
  }

  createProduct(product: Product): Product {
    this.products.unshift(product);
    return product;
  }

  // Category methods
  getCategories(): Category[] {
    return this.categories;
  }

  // Banner methods
  getBanners(): Banner[] {
    return this.banners.filter((b) => b.active).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  // Order methods
  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find((o) => o.id === id);
  }

  createOrder(order: Order): Order {
    this.orders.unshift(order);
    // Auto-record an activity
    this.activities.unshift({
      id: `act-${Date.now()}`,
      type: 'order',
      title: `Pesanan ${order.productName} berhasil dibuat`,
      description: `Order ${order.id} berhasil terdaftar dengan metode ${order.paymentMethod}.`,
      timestamp: new Date().toISOString(),
      relativeTime: 'Baru saja',
      orderId: order.id,
    });
    return order;
  }

  updateOrderStatus(orderId: string, status: Order['status']): Order | null {
    const order = this.orders.find((o) => o.id === orderId);
    if (!order) return null;
    order.status = status;
    if (status === 'Paid') {
      order.paidAt = new Date().toISOString();
      this.activities.unshift({
        id: `act-${Date.now()}`,
        type: 'payment',
        title: `Pembayaran ${order.paymentMethod} diterima`,
        description: `Pembayaran untuk order ${order.id} telah diverifikasi otomatis.`,
        timestamp: new Date().toISOString(),
        relativeTime: 'Baru saja',
        orderId: order.id,
      });
    } else if (status === 'Completed') {
      order.completedAt = new Date().toISOString();
      this.activities.unshift({
        id: `act-${Date.now()}`,
        type: 'completed',
        title: `Pesanan selesai`,
        description: `Akun/Aktivasi untuk ${order.productName} telah aktif dan siap digunakan.`,
        timestamp: new Date().toISOString(),
        relativeTime: 'Baru saja',
        orderId: order.id,
      });
      // award points
      this.rewardProfile.currentPoints += 250;
      this.rewardProfile.pointValueInIdr = this.rewardProfile.currentPoints * 10;
      this.userProfile.rewardPoints += 250;
      this.userProfile.purchaseCount += 1;
    }
    return order;
  }

  // Activity methods
  getActivities(): Activity[] {
    return this.activities;
  }

  // Reward and User Profile
  getRewardProfile(): UserRewardProfile {
    return this.rewardProfile;
  }

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  updateUserProfile(updates: Partial<UserProfile>): UserProfile {
    this.userProfile = { ...this.userProfile, ...updates };
    return this.userProfile;
  }
}

// Singleton for in-app runtime
export const db = new AureliaDatabase();
