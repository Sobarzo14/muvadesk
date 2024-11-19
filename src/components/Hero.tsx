import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Premium workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <span className="text-white/90 font-medium tracking-wider">INTRODUCING</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            MUVADESK
          </h1>
          <p className="mt-6 text-xl text-gray-100">
            The revolutionary desk mat that transforms into a briefcase, preserving your workspace layout as you move. Experience seamless transitions between workspaces while maintaining absolute organization.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-gray-100 transition">
              Pre-order Now
            </button>
            <button className="flex items-center text-white px-8 py-3 rounded-none border border-white hover:bg-white/10 transition">
              Discover More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}