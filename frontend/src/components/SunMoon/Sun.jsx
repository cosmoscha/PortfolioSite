import React from 'react';

const Sun = ({ size = 16 }) => {
  const largerSize = size * 9.0;

  return (
    <div
      className="absolute right-12 top-12"
      style={{
        width: `${largerSize}px`,
        height: `${largerSize}px`,
      }}
    >
      <div className="relative">
        <div
          className="w-full h-full bg-yellow-400 rounded-full animate-spin-slow"
          style={{
            boxShadow: "0 0 120px rgba(255, 223, 0, 0.8)",
          }}
        />
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`radiation-${i}`}
              className="absolute w-full h-full border border-yellow-300 rounded-full opacity-50"
              style={{
                animation: `radiate ${4 + i}s infinite`,
                transform: `scale(${1.5 + i * 0.5})`,
                zIndex: -1,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 left-1/2 -ml-0.5 origin-bottom"
              style={{
                width: `${largerSize * 0.06}px`,
                height: `${largerSize * 0.5}px`,
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sun;
