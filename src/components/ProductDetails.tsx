import { useState } from 'react';
import { X, MessageCircle, Mail, ChevronLeft, ChevronRight, Package, Ruler, Sparkles } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onOpenEnquiry: (product: Product, selectedSize: string, selectedColor: string) => void;
}

export function ProductDetails({ product, onClose, onOpenEnquiry }: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in:
    
Product: ${product.name}
Product ID: ${product.id}
SKU: ${product.sku}
Size: ${selectedSize}
Color: ${selectedColor.name}
Price: $${product.price}
Quantity: ${quantity}

Please let me know about availability and shipping details.`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8">
        {/* Close Button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-gray-900">Product Details</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
                <ImageWithFallback
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {product.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}

                {product.tag && (
                  <Badge
                    className="absolute top-4 left-4 rounded-full px-3 py-1"
                    style={{
                      backgroundColor: product.tag === 'Best Seller' ? '#FFB4A2' : '#B8E5D2',
                      color: '#1a1a1a',
                    }}
                  >
                    {product.tag}
                  </Badge>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-[#FFB4A2] scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[#FFB4A2]">${product.price.toFixed(2)}</p>
                  <Badge variant="outline" className="rounded-full">
                    {product.category}
                  </Badge>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-br from-[#FFB4A2]/10 to-[#B8E5D2]/10 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-xs text-gray-500">SKU</p>
                    <p className="text-sm">{product.sku}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-xs text-gray-500">Age Group</p>
                    <p className="text-sm">{product.ageGroup} years</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-xs text-gray-500">Material</p>
                    <p className="text-sm">{product.material}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="text-sm">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                  </div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-3">
                <label className="block text-gray-900">Select Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        selectedSize === size
                          ? 'border-[#FFB4A2] bg-[#FFB4A2]/10 text-[#FFB4A2]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="space-y-3">
                <label className="block text-gray-900">
                  Select Color: <span className="text-gray-600">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor.name === color.name
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="block text-gray-900">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full"
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Enquiry via WhatsApp
                </Button>
                <Button
                  onClick={() => onOpenEnquiry(product, selectedSize, selectedColor.name)}
                  variant="outline"
                  className="w-full rounded-full hover:bg-[#FFB4A2]/10 hover:border-[#FFB4A2]"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Enquiry Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
