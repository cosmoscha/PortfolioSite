import React from 'react';

const Moon = ({ size = 16 }) => {
  const largerSize = size * 9.0;

  return (
    <div
      className="absolute right-12 top-12 z-30"
      style={{
        width: `${largerSize}px`,
        height: `${largerSize}px`,
      }}
    >
      <div
        className="relative w-full h-full bg-gray-300 rounded-full overflow-hidden"
        style={{
          boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const craterSize = Math.random() * 0.1 * largerSize;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          return (
            <div
              key={`moon-crater-${i}`}
              className="absolute bg-gray-400 rounded-full"
              style={{
                width: `${craterSize}px`,
                height: `${craterSize}px`,
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%)`,
                opacity: 0.6,
              }}
            />
          );
        })}
        <div
          className="absolute bg-gray-900 rounded-full"
          style={{
            width: `${largerSize * 0.9}px`,
            height: `${largerSize * 0.9}px`,
            top: "10%",
            left: "15%",
          }}
        />
      </div>
    </div>
  );
};

export default Moon;
