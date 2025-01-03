import React from "react";

const HeroSection = () => (
  <div className="relative h-48 md:h-[300px] bg-gradient-to-r from-purple-800 to-purple-600 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r left-1/2 w-1/4 from-purple-800/90 to-purple-800/0 backdrop-blur-0 z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-r left-0 w-1/2 from-purple-800/90 to-purple-800/90 z-10"></div>

    <div className="relative max-w-7xl mx-auto px-4 h-full z-20">
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 md:mb-4">
          Center Locator
        </h1>
      </div>
    </div>

    <div className="absolute top-0 right-0 h-full w-1/2 md:w-2/5">
      <img
        src="/assets/image.png"
        alt="Doctor in laboratory"
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute bottom-2 right-2 text-white/70 text-xs">
        Image: bazaar
      </div>
    </div>
  </div>
);

export default HeroSection;
