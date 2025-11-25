import { Mail, MessageCircle, Instagram, Facebook, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#FFB4A2]/10 via-[#B8E5D2]/10 to-[#E0BBE4]/10 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-gray-900">Little Stars</h3>
            <p className="text-gray-600">
              Dress Your Little Stars in comfort and style. Quality kids clothing for every occasion.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-[#FFB4A2]/20 hover:border-[#FFB4A2]"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-[#A8DADC]/20 hover:border-[#A8DADC]"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Contact', 'Size Guide', 'FAQs'].map((link) => (
                <li key={link}>
                  <button className="text-gray-600 hover:text-[#FFB4A2] transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-gray-900">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@littlestars.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#FFB4A2] transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@littlestars.com
              </a>
              <a
                href="https://wa.me/‪919986719548‬"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: ‪+91 99867 19548‬
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                Customer service hours: Mon-Fri, 9am-6pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2024 Little Stars. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-[#FFB4A2] fill-[#FFB4A2]" /> for kids
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
