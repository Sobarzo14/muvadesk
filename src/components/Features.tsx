import React from 'react';
import { Briefcase, Layout, Zap, Shield, Sparkles, Laptop } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: "Layout Preservation",
    description: "Maintains your exact workspace arrangement during transport"
  },
  {
    icon: Briefcase,
    title: "Elegant Transformation",
    description: "Seamlessly converts from desk mat to premium briefcase"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Resume work in seconds, exactly where you left off"
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Crafted from luxury Italian leather and aerospace-grade materials"
  },
  {
    icon: Sparkles,
    title: "Executive Design",
    description: "Sophisticated aesthetic that elevates any workspace"
  },
  {
    icon: Laptop,
    title: "Device Optimized",
    description: "Perfect for laptops up to 16 inches with accessories"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Redefining Mobile Workspaces
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Where luxury meets functionality in a revolutionary workspace solution
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-50 p-8 border border-gray-100"
            >
              <div className="absolute -top-4 left-6">
                <span className="inline-block p-3 bg-black rounded-none text-white">
                  <feature.icon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}