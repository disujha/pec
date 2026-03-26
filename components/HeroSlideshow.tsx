'use client';

import React from 'react';

export default function HeroSlideshow() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/pec_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-end justify-center">
        <div className="w-full max-w-7xl px-4 pb-0">
          {/* Semi-transparent white background */}
          <div className="bg-white/20 backdrop-blur-sm p-6">
            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-center">
              Engineering Excellence for Complex Challenges
            </h1>
            
            {/* Subtext */}
            <p className="text-sm lg:text-base text-white leading-relaxed text-center">
              For over two decades, PEC has delivered proven petrochemical engineering solutions across India, partnering with industry leaders who demand excellence. Ready to challenge us with your next complex project?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}