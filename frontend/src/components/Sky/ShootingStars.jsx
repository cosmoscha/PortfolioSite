import React from 'react';

const ShootingStars = () => (
  <div className="absolute inset-0 overflow-hidden z-20">
    {[...Array(100)].map((_, i) => {
      const baseSize = 1;
      const sizeVariation = baseSize * 0.2;
      const size = baseSize + (Math.random() * sizeVariation);

      return (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      );
    })}
    {[...Array(20)].map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 40;
      const baseSize = 2;
      const sizeVariation = baseSize * 0.2;
      const size = baseSize + (Math.random() * sizeVariation);

      return (
        <div
          key={`shooting-${i}`}
          className="absolute"
          style={{
            top: `${startY}%`,
            left: `${startX}%`,
            width: `${size}px`,
            height: `${size}px`,
            transform: 'rotate(45deg)',
            animation: `shooting-star ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        >
          <div
            className="w-full h-full bg-white rounded-full"
            style={{
              boxShadow: `
                0 0 0 ${size}px rgba(255,255,255,0.1),
                0 0 0 ${size * 1.5}px rgba(255,255,255,0.05),
                0 0 ${size * 4}px rgba(255,255,255,0.9),
                0 0 ${size * 8}px rgba(255,255,255,0.5),
                0 0 ${size * 12}px rgba(255,255,255,0.3)
              `
            }}
          />
        </div>
      );
    })}
  </div>
);

export default ShootingStars;
