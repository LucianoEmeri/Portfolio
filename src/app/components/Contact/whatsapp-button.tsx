import React from 'react'
import Image from 'next/image'

export default function WhatsAppButton({ phoneNumber = "+543435048422", message = "Hola, estoy interesado en tus servicios." }) {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 bg-white hover:bg-black rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 z-50"
      aria-label="Abrir chat de WhatsApp"
    >
      <div className="relative w-7 h-7">
        <Image
          src="/assets/skills/whatsapp.svg"
          alt="WhatsApp Icon"
          layout="fill"
          className="transition-all duration-300 invert-0 hover:invert"
        />
      </div>
    </button>
  );
}