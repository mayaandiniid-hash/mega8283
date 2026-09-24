import React from 'react';
import { getAllProducts, getProductBySlug } from '@/lib/products';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';

interface CheckoutPageProps {
  searchParams: Promise<{
    product?: string;
    duration?: string;
  }>;
}

export const metadata = {
  title: 'Checkout Pembayaran — Aurelia Cathērine',
  description: 'Selesaikan transaksi produk digital premium dengan aman dan cepat.',
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { product: productSlug, duration: initialDuration } = await searchParams;

  const allProducts = await getAllProducts();
  const selectedProduct = productSlug
    ? await getProductBySlug(productSlug)
    : allProducts[0];

  const defaultProduct = selectedProduct || allProducts[0];

  return (
    <CheckoutForm
      products={allProducts}
      initialProduct={defaultProduct}
      initialDuration={initialDuration}
    />
  );
}
