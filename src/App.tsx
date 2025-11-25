import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductDetails } from './components/ProductDetails';
import { EnquiryModal } from './components/EnquiryModal';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { products, Product } from './data/products';

type Page = 'home' | 'shop' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [enquiryData, setEnquiryData] = useState<{
    product: Product;
    size: string;
    color: string;
  } | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleOpenEnquiry = (product: Product, size: string, color: string) => {
    setEnquiryData({ product, size, color });
    setSelectedProduct(null);
  };

  const handleCloseEnquiry = () => {
    setEnquiryData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="min-h-screen">
        {currentPage === 'home' && (
          <Home
            products={products}
            onViewProduct={handleViewProduct}
            onShopNow={() => handleNavigate('shop')}
          />
        )}

        {currentPage === 'shop' && (
          <ProductListing products={products} onViewProduct={handleViewProduct} />
        )}

        {currentPage === 'about' && (
          <div className="container mx-auto px-4 lg:px-6 py-16">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <h1 className="text-gray-900">About Little Stars</h1>
              <p className="text-lg text-gray-600">
                Welcome to Little Stars, your trusted destination for quality kids clothing. 
                We believe every child deserves to feel comfortable, confident, and stylish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFB4A2]/10 to-[#FFD1DC]/10">
                  <h3 className="text-gray-900 mb-2">Quality First</h3>
                  <p className="text-gray-600">
                    Premium fabrics that are gentle on sensitive skin
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#B8E5D2]/10 to-[#A8DADC]/10">
                  <h3 className="text-gray-900 mb-2">Affordable Prices</h3>
                  <p className="text-gray-600">
                    Great value without compromising on quality
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E0BBE4]/10 to-[#FFD1DC]/10">
                  <h3 className="text-gray-900 mb-2">Happy Kids</h3>
                  <p className="text-gray-600">
                    Designs that kids love and parents trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="container mx-auto px-4 lg:px-6 py-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-gray-900 mb-3">Get In Touch</h1>
                <p className="text-gray-600">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FFB4A2]/10 to-[#FFD1DC]/10 text-center">
                  <h3 className="text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">hello@littlestars.com</p>
                </div>
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#B8E5D2]/10 to-[#A8DADC]/10 text-center">
                  <h3 className="text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white shadow-lg">
                <h3 className="text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-[#FFB4A2]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-[#FFB4A2]"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-[#FFB4A2] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#FFB4A2] to-[#FFD1DC] hover:opacity-90 text-gray-900 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseProductDetails}
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {/* Enquiry Modal */}
      {enquiryData && (
        <EnquiryModal
          product={enquiryData.product}
          selectedSize={enquiryData.size}
          selectedColor={enquiryData.color}
          onClose={handleCloseEnquiry}
        />
      )}
    </div>
  );
}
