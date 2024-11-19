import React from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-wider text-gray-900">MUVADESK</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#specs" className="text-gray-600 hover:text-gray-900">Design</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Reviews</a>
            <button className="flex items-center bg-black text-white px-8 py-2.5 rounded-none hover:bg-gray-900 transition">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Pre-order
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
            <a href="#specs" className="block px-3 py-2 text-gray-600">Design</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600">Reviews</a>
            <button className="flex items-center bg-black text-white px-6 py-2 rounded-none hover:bg-gray-900 transition mt-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Pre-order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}