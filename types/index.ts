export type AccessType =
  | 'Private Access'
  | 'Shared Access'
  | 'Activation Service'
  | 'Account'
  | 'Subscription Service';

export type ProductStatus = 'Available' | 'Limited' | 'Sold Out';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  duration: string;
  durationOptions?: {
    label: string;
    duration: string;
    price: number;
    originalPrice?: number;
    isPopular?: boolean;
  }[];
  category: string;
  status: ProductStatus;
  accessType: AccessType;
  tags: string[];
  description: string;
  shortDescription: string;
  features: string[];
  faq: { question: string; answer: string }[];
  stockCount: number;
  soldCount: number;
  rating: number;
  reviewCount: number;
  accentColor: string;
  bgColor: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  isHotDeal?: boolean;
  isFlashSale?: boolean;
  flashSaleDiscount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export type PaymentMethod =
  | 'QRIS'
  | 'BCA Virtual Account'
  | 'Mandiri Virtual Account'
  | 'BRI Virtual Account'
  | 'GoPay'
  | 'OVO'
  | 'DANA'
  | 'ShopeePay';

export type OrderStatus =
  | 'All'
  | 'Pending'
  | 'Paid'
  | 'Processing'
  | 'Completed'
  | 'Cancelled';

export interface Order {
  id: string;
  productId: string;
  productName: string;
  productSlug: string;
  brand: string;
  duration: string;
  accessType: AccessType;
  price: number;
  discount: number;
  pointsDiscount: number;
  totalAmount: number;
  customerName: string;
  customerWhatsApp: string;
  customerEmail: string;
  paymentMethod: PaymentMethod;
  status: 'Pending' | 'Paid' | 'Processing' | 'Completed' | 'Cancelled';
  createdAt: string;
  paidAt?: string;
  completedAt?: string;
  virtualAccountNumber?: string;
  qrCodeData?: string;
  credentials?: {
    accountEmail?: string;
    accountPassword?: string;
    activationKey?: string;
    instructions: string;
    expiredAt: string;
  };
}

export interface Activity {
  id: string;
  type: 'order' | 'payment' | 'processing' | 'completed' | 'reward' | 'security';
  title: string;
  description: string;
  timestamp: string;
  orderId?: string;
  points?: number;
  relativeTime: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  backgroundColor: string;
  textColor: string;
  ctaText: string;
  ctaLink: string;
  highlightText?: string;
  highlightPrice?: number;
  appIcons?: string[];
  sortOrder: number;
  active: boolean;
  startDate?: string;
  endDate?: string;
}

export interface RewardTask {
  id: string;
  title: string;
  progress: number;
  maxProgress: number;
  rewardPoints: number;
  completed: boolean;
  actionText: string;
  actionLink: string;
}

export interface UserRewardProfile {
  currentPoints: number;
  pointValueInIdr: number;
  completedTasks: number;
  totalTasks: number;
  nextMilestoneAmount: number;
  nextMilestonePoints: number;
  tasks: RewardTask[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  avatarUrl: string;
  rewardPoints: number;
  purchaseCount: number;
  memberTier: 'Classic' | 'Silver' | 'Gold' | 'VIP';
  memberSince: string;
}
