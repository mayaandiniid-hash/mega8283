import { db } from './db';
import { Order, PaymentMethod } from '@/types';
import { generateOrderId } from './utils';

export interface CreateOrderInput {
  productId: string;
  duration: string;
  customerName: string;
  customerWhatsApp: string;
  customerEmail: string;
  paymentMethod: PaymentMethod;
  usePoints?: boolean;
}

export async function createNewOrder(input: CreateOrderInput): Promise<{ success: boolean; order?: Order; error?: string }> {
  const product = db.getProductById(input.productId);
  if (!product) {
    return { success: false, error: 'Produk tidak ditemukan.' };
  }

  // Calculate price securely on server side
  let basePrice = product.price;
  if (input.duration && product.durationOptions) {
    const selectedOption = product.durationOptions.find((opt) => opt.duration === input.duration);
    if (selectedOption) {
      basePrice = selectedOption.price;
    }
  }

  let pointsDiscount = 0;
  if (input.usePoints) {
    const rewardProfile = db.getRewardProfile();
    // Max 500 points discount = Rp5.000, or up to current points
    const maxPointsToUse = Math.min(rewardProfile.currentPoints, 500);
    pointsDiscount = maxPointsToUse * 10;
  }

  const finalAmount = Math.max(0, basePrice - pointsDiscount);

  // Generate payment instructions & credentials template
  let vaNumber: string | undefined;
  if (input.paymentMethod.includes('Virtual Account')) {
    vaNumber = `8808${Math.floor(10000000 + Math.random() * 90000000)}`;
  }

  const newOrder: Order = {
    id: generateOrderId(),
    productId: product.id,
    productName: product.name,
    productSlug: product.slug,
    brand: product.brand,
    duration: input.duration || product.duration,
    accessType: product.accessType,
    price: basePrice,
    discount: 0,
    pointsDiscount,
    totalAmount: finalAmount,
    customerName: input.customerName.trim(),
    customerWhatsApp: input.customerWhatsApp.trim(),
    customerEmail: input.customerEmail.trim(),
    paymentMethod: input.paymentMethod,
    status: 'Processing', // Simulating successful immediate verification or processing
    createdAt: new Date().toISOString(),
    paidAt: new Date().toISOString(),
    virtualAccountNumber: vaNumber,
    credentials: {
      accountEmail: `${input.customerName.toLowerCase().replace(/[^a-z0-9]/g, '')}.vip@aurelia.store`,
      accountPassword: '••••••••',
      instructions: `Akses ${product.name} telah dikaitkan. Tim kami mengirim panduan aktivasi ke WhatsApp ${input.customerWhatsApp}.`,
      expiredAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
  };

  const savedOrder = db.createOrder(newOrder);
  return { success: true, order: savedOrder };
}

export async function getOrders(): Promise<Order[]> {
  return db.getOrders();
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  return db.getOrderById(id);
}
