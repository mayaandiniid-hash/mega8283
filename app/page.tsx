import { getAllProducts, getCategories } from '@/lib/products';
import { HomeFeed } from '@/components/home/HomeFeed';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const products = await getAllProducts();
  const categories = await getCategories();

  return <HomeFeed initialProducts={products} initialCategories={categories} />;
}
