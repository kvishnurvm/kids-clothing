import { Eye, Heart } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Tag Badge */}
      {product.tag && (
        <Badge
          className="absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs"
          variant={product.tag === 'Best Seller' ? 'default' : 'secondary'}
          style={{
            backgroundColor: product.tag === 'Best Seller' ? '#FFB4A2' : '#B8E5D2',
            color: '#1a1a1a',
          }}
        >
          {product.tag}
        </Badge>
      )}

      {/* Wishlist Button */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-4 right-4 z-10 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <Heart className="w-4 h-4" />
      </Button>

      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            onClick={() => onViewDetails(product)}
            className="rounded-full bg-white text-gray-900 hover:bg-white/90"
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-gray-900 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category} · {product.ageGroup} years</p>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-2">
          {product.colors.slice(0, 4).map((color) => (
            <div
              key={color.name}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-gray-900">${product.price.toFixed(2)}</p>
          <Button
            onClick={() => onViewDetails(product)}
            size="sm"
            variant="outline"
            className="rounded-full hover:bg-[#FFB4A2]/10 hover:border-[#FFB4A2] hover:text-[#FFB4A2]"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
