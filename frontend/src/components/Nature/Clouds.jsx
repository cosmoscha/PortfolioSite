import React from 'react';

const Clouds = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={`cloud-${i}`}
        className="absolute bg-white opacity-90 animate-cloud-drift"
        style={{
          width: `${80 + Math.random() * 60}px`,
          height: `${50 + Math.random() * 30}px`,
          top: `${10 + Math.random() * 20}%`,
          left: `${-20 + (i * 30)}%`,
          animationDelay: `${i * 10}s`,
          animationDuration: `${60 + Math.random() * 30}s`,
          borderRadius: '40px',
          filter: 'blur(4px)'
        }}
      />
    ))}
  </div>
);

export default Clouds;