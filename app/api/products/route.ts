import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { searchProducts } from '@/lib/products';

const ProductSchema = z.object({
  name: z.string().min(2),
  brand: z.string().min(2),
  price: z.number().positive(),
  duration: z.string().default('1 Month'),
  category: z.string(),
  accessType: z.enum([
    'Private Access',
    'Shared Access',
    'Activation Service',
    'Account',
    'Subscription Service',
  ]),
  description: z.string().min(10),
  shortDescription: z.string().optional(),
  features: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || undefined;
    const query = searchParams.get('q') || undefined;
    const slug = searchParams.get('slug') || undefined;

    if (slug) {
      const product = db.getProductBySlug(slug);
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json({ data: product });
    }

    const products = await searchProducts(query, category);
    return NextResponse.json({ data: products });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve products', details: (error as Error).message },
      { status: 500 }
    );
  }
}

// Admin-ready endpoint to create or update product price/info without code changes
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = ProductSchema.parse(body);

    const slug = validated.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newProduct = {
      id: `prod-${slug}-${Date.now()}`,
      slug,
      name: validated.name,
      brand: validated.brand,
      price: validated.price,
      duration: validated.duration,
      category: validated.category,
      status: 'Available' as const,
      accessType: validated.accessType,
      tags: validated.tags,
      description: validated.description,
      shortDescription: validated.shortDescription || validated.description.slice(0, 100),
      features: validated.features,
      faq: [],
      stockCount: 50,
      soldCount: 0,
      rating: 5.0,
      reviewCount: 0,
      accentColor: '#111827',
      bgColor: '#f3f4f6',
    };

    const saved = db.createProduct(newProduct);
    return NextResponse.json({ success: true, data: saved }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
