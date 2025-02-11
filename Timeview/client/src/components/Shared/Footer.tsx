import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-chasGray text-white py-8">
      <div className="text-center text-2xl font-bold mb-6">This is footer</div>
      <div className="flex justify-center space-x-12 text-sm">
        <a href="/contact" className="hover:underline">
          Kontakt vid frågor kring bokningar
        </a>
        <a href="/room-map" className="hover:underline">
          Rumskarta
        </a>
        <a href="/chas-academy" className="hover:underline">
          Chas Academy
        </a>
        <a href="/policy" className="hover:underline">
          Tillgänglighetspolicy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
