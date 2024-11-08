import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../public/a.png')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="text-4xl md:text-6xl text-white text-center"></h2>
      </div>
    </div>
  );
};

export default HeroSection;