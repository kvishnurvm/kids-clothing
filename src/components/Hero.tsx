import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFB4A2]/20 via-[#FFD1DC]/20 to-[#B8E5D2]/20">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
              <Star className="w-4 h-4 text-[#FFB4A2] fill-[#FFB4A2]" />
              <span className="text-sm text-gray-700">Premium Quality Kids Wear</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight">
              Dress Your
              <span className="block text-[#FFB4A2]">Little Stars</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Discover comfortable, stylish, and affordable clothing for your little ones. 
              From everyday wear to special occasions, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onShopNow}
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#FFB4A2] to-[#FFD1DC] hover:opacity-90 text-gray-900"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl text-[#FFB4A2]">500+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl text-[#B8E5D2]">1000+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl text-[#E0BBE4]">4.9★</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xvdGhpbmclMjBmYXNoaW9ufGVufDF8fHx8MTc2NDA1NDA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kids Fashion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FFB4A2] to-[#FFD1DC] rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#B8E5D2] to-[#A8DADC] rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E0BBE4] to-[#FFD1DC] rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#B8E5D2] to-[#A8DADC] rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
