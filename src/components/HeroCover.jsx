import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* 3D interactive cover */}
      <Spline
        scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Subtle gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70" />

      {/* Hero copy */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="px-6 md:px-10 pb-8 md:pb-0 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Manage posts with a modern, fast React stack
          </h2>
          <p className="mt-4 text-white/80 text-sm md:text-base max-w-xl">
            Includes routing, state via Context, a custom HTTP client with interceptors, and a clean UI powered by Tailwind. Start with search, filters and role-based views.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
