import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Hello! I would like to know more about your kids clothing collection.';
    const whatsappUrl = `https://wa.me/‪919986719548‬?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-40 rounded-full w-14 h-14 p-0 shadow-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}
