import { useState, useMemo } from 'react';
import { Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { FilterPanel, FilterState } from '../components/FilterPanel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Package } from 'lucide-react';

interface ProductListingProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export function ProductListing({ products, onViewProduct }: ProductListingProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    ageGroups: [],
    priceRange: [0, 100],
    colors: [],
    searchQuery: '',
  });
  const [sortBy, setSortBy] = useState<string>('latest');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) => filters.categories.includes(p.category));
    }

    // Apply age group filter
    if (filters.ageGroups.length > 0) {
      filtered = filtered.filter((p) => filters.ageGroups.includes(p.ageGroup));
    }

    // Apply price range filter
    filtered = filtered.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Apply color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter((p) =>
        p.colors.some((color) => filters.colors.includes(color.name))
      );
    }

    // Apply search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        filtered.sort((a, b) => {
          const aScore = a.tag === 'Best Seller' ? 2 : a.tag === 'New' ? 1 : 0;
          const bScore = b.tag === 'Best Seller' ? 2 : b.tag === 'New' ? 1 : 0;
          return bScore - aScore;
        });
        break;
      case 'latest':
      default:
        // Keep default order (latest first)
        break;
    }

    return filtered;
  }, [products, filters, sortBy]);

  return (
    <div className="container mx-auto px-4 lg:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Shop All Products</h1>
        <p className="text-gray-600">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Filter Panel */}
        <FilterPanel filters={filters} onFilterChange={setFilters} />

        {/* Product Grid */}
        <div className="flex-1 space-y-6">
          {/* Mobile Filter and Sort */}
          <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
            <div className="flex-1">
              <FilterPanel filters={filters} onFilterChange={setFilters} />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="flex-1 rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Sort */}
          <div className="hidden lg:flex items-center justify-between">
            <p className="text-gray-600">
              {filteredAndSortedProducts.length} products found
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 rounded-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={onViewProduct}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-[#FFB4A2]/20 to-[#B8E5D2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
