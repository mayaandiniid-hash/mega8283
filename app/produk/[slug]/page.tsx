import React from 'react';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/products';
import { ProductDetailView } from '@/components/products/ProductDetailView';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan — Aurelia Cathērine',
    };
  }

  return {
    title: `${product.name} — Aurelia Cathērine`,
    description: product.shortDescription || product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} — Aurelia Cathērine`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
