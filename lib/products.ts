import { db } from './db';
import { Product, Category, Banner } from '@/types';

export async function getAllProducts(): Promise<Product[]> {
  return db.getProducts();
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return db.getProductBySlug(slug);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return db.getProductById(id);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return db.getProducts().filter((p) => p.isFeatured);
}

export async function getTrendingProducts(): Promise<Product[]> {
  return db.getProducts().filter((p) => p.isTrending);
}

export async function getHotDeals(): Promise<Product[]> {
  return db.getProducts().filter((p) => p.isHotDeal);
}

export async function getFlashSaleProducts(): Promise<Product[]> {
  return db.getProducts().filter((p) => p.isFlashSale);
}

export async function getCategories(): Promise<Category[]> {
  return db.getCategories();
}

export async function getBanners(): Promise<Banner[]> {
  return db.getBanners();
}

export async function searchProducts(query?: string, categorySlug?: string): Promise<Product[]> {
  let products = db.getProducts();

  if (categorySlug && categorySlug !== 'all') {
    products = products.filter((p) => {
      const cat = p.category.toLowerCase().replace(/\s+/g, '-');
      return cat.includes(categorySlug) || p.category.toLowerCase() === categorySlug.toLowerCase();
    });
  }

  if (query && query.trim() !== '') {
    const q = query.toLowerCase().trim();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return products;
}
