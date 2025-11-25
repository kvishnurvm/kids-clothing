import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Product } from '../data/products';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface EnquiryModalProps {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  onClose: () => void;
}

export function EnquiryModal({ product, selectedSize, selectedColor, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', {
      ...formData,
      productId: product.id,
      productName: product.name,
      size: selectedSize,
      color: selectedColor,
      price: product.price,
    });
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-gradient-to-br from-[#B8E5D2] to-[#A8DADC] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-gray-900 mb-3">Enquiry Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest. We'll get back to you within 24 hours.
          </p>
          <Button
            onClick={onClose}
            className="w-full rounded-full bg-gradient-to-r from-[#FFB4A2] to-[#FFD1DC] hover:opacity-90 text-gray-900"
          >
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-gray-900">Email Enquiry Form</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-6">
          {/* Product Summary */}
          <div className="p-4 bg-gradient-to-br from-[#FFB4A2]/10 to-[#B8E5D2]/10 rounded-2xl space-y-2">
            <h3 className="text-gray-900">Product Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Product:</p>
                <p className="text-gray-900">{product.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Product ID:</p>
                <p className="text-gray-900">{product.id}</p>
              </div>
              <div>
                <p className="text-gray-500">Size:</p>
                <p className="text-gray-900">{selectedSize}</p>
              </div>
              <div>
                <p className="text-gray-500">Color:</p>
                <p className="text-gray-900">{selectedColor}</p>
              </div>
              <div>
                <p className="text-gray-500">Price:</p>
                <p className="text-[#FFB4A2]">${product.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-500">SKU:</p>
                <p className="text-gray-900">{product.sku}</p>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Shipping Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter your shipping address"
                value={formData.address}
                onChange={handleChange}
                className="rounded-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Any special requests or questions? (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="rounded-2xl resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 rounded-full bg-gradient-to-r from-[#FFB4A2] to-[#FFD1DC] hover:opacity-90 text-gray-900"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Enquiry
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </div>
  );
}
