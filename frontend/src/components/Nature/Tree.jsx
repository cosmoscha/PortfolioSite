import React from 'react';

const Tree = ({ x, height, variation }) => (
  <div
    className="absolute origin-bottom animate-tree-sway"
    style={{
      left: `${x}%`,
      bottom: `${25 + Math.random() * 10}vh`,
      animationDelay: `${Math.random() * 4}s`,
      zIndex: 999
    }}
  >
    {[...Array(5)].map((_, i) => (
      <div key={i}>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '4px',
            height: `${height * 0.4}px`,
            transform: `translateX(-50%) rotate(${-2 + Math.random() * 4}deg)`,
            background: 'linear-gradient(to right, #2d3320, #3d4427, #2d3320)',
            zIndex: 5 - i
          }}
        />
        {[...Array(4)].map((_, j) => {
          const sectionWidth = (20 + variation) * (1 - j * 0.1);
          return (
            <div
              key={`section-${j}`}
              style={{
                position: 'absolute',
                bottom: `${height * (0.2 + j * 0.2)}px`,
                left: '50%',
                width: 0,
                height: 0,
                borderBottom: `${height * (0.3 - j * 0.05)}px solid`,
                borderLeft: `${sectionWidth}px solid transparent`,
                borderRight: `${sectionWidth}px solid transparent`,
                borderBottomColor: `rgba(${30 + i * 5}, ${70 + i * 8}, ${30 + i * 3}, ${1 - i * 0.15})`,
                transform: `translateX(-50%) rotate(${-1 + Math.random() * 2}deg)`,
                filter: `brightness(${1 - j * 0.1})`,
                zIndex: 4 - i
              }}
            />
          );
        })}
        {[...Array(3)].map((_, k) => (
          <div
            key={`detail-${k}`}
            style={{
              position: 'absolute',
              bottom: `${height * 0.4 + k * height * 0.2}px`,
              left: '50%',
              width: '1px',
              height: `${20 + Math.random() * 30}px`,
              background: 'rgba(35, 60, 35, 0.4)',
              transform: `translateX(-50%) rotate(${60 + Math.random() * 60}deg)`,
              zIndex: 6 - i
            }}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Tree;