import { Product } from '../data/products';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HomeProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onShopNow: () => void;
}

export function Home({ products, onViewProduct, onShopNow }: HomeProps) {
  const featuredProducts = products.filter((p) => p.tag === 'Best Seller').slice(0, 4);
  const newArrivals = products.filter((p) => p.tag === 'New').slice(0, 4);

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <Hero onShopNow={onShopNow} />

      {/* Featured Categories */}
      <section className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-3">Shop by Category</h2>
          <p className="text-gray-600">Find the perfect outfit for your little one</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[
            { name: 'Boys', color: 'from-[#A8DADC] to-[#B8E5D2]', emoji: '👦' },
            { name: 'Girls', color: 'from-[#FFD1DC] to-[#E0BBE4]', emoji: '👧' },
            { name: 'Baby', color: 'from-[#FFB4A2] to-[#FCF4A3]', emoji: '👶' },
          ].map((category) => (
            <button
              key={category.name}
              onClick={onShopNow}
              className="group relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                <span className="text-5xl lg:text-6xl mb-3">{category.emoji}</span>
                <h3 className="text-white">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-[#FFB4A2]" />
              <h2 className="text-gray-900">Best Sellers</h2>
            </div>
            <p className="text-gray-600">Most loved by our customers</p>
          </div>
          <Button
            onClick={onShopNow}
            variant="outline"
            className="rounded-full hidden sm:flex"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-[#B8E5D2]" />
              <h2 className="text-gray-900">New Arrivals</h2>
            </div>
            <p className="text-gray-600">Fresh styles just for you</p>
          </div>
          <Button
            onClick={onShopNow}
            variant="outline"
            className="rounded-full hidden sm:flex"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFB4A2] via-[#FFD1DC] to-[#E0BBE4] p-8 lg:p-16 text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-white">Ready to Dress Your Little Stars?</h2>
            <p className="text-white/90 text-lg">
              Explore our full collection and find the perfect outfit for every occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onShopNow}
                size="lg"
                className="rounded-full bg-white text-gray-900 hover:bg-white/90"
              >
                Browse All Products
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
