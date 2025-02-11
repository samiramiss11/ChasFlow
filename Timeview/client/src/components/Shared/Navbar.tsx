import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-chasGray text-white px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">This is Navbar</div>
      <div className="flex space-x-6">
        <a href="/chas-academy" className="hover:underline">CHAS ACADEMY</a>
        <a href="/room-map" className="hover:underline">RUMSKARTA</a>
        <a href="/login" className="hover:underline flex items-center">
          LOGGA IN <i className="fas fa-user ml-2"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
