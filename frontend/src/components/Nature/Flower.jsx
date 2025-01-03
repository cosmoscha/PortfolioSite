import React from 'react';

const Flower = ({ index }) => {
  const petalColors = [
    'bg-pink-400',
    'bg-pink-300',
    'bg-rose-300',
    'bg-pink-200',
    'bg-blue-400',
    'bg-blue-300',
    'bg-violet-400',
    'bg-violet-300',
  ];
  const randomColor = () => petalColors[Math.floor(Math.random() * petalColors.length)];

  return (
    <div
      className="absolute w-1 h-16 bg-green-700 origin-bottom animate-sway"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="absolute -left-4 -top-4 w-8 h-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={`inner-${i}`}
            className={`absolute w-5 h-5 ${randomColor()} rounded-full animate-petal-sway`}
            style={{
              transform: `rotate(${i * 72}deg) translateY(-6px)`,
              animationDelay: `${i * 0.1}s`,
              zIndex: 2,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`outer-${i}`}
            className={`absolute w-6 h-6 ${randomColor()} rounded-full animate-petal-sway`}
            style={{
              transform: `rotate(${i * 45}deg) translateY(-8px)`,
              animationDelay: `${i * 0.1 + 0.05}s`,
              zIndex: 1,
            }}
          />
        ))}
        <div className="absolute left-2 top-2 w-4 h-4 bg-yellow-300 rounded-full z-10" />
      </div>
    </div>
  );
};

export default Flower;