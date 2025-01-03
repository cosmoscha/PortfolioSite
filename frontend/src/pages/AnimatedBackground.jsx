// src/pages/AnimatedBackground.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import Sun from '../components/SunMoon/Sun';
import Moon from '../components/SunMoon/Moon';
import Clouds from '../components/Nature/Clouds';
import Flower from '../components/Nature/Flower';
import Tree from '../components/Nature/Tree';
import Mountains from '../components/Nature/Mountains';
import ShootingStars from '../components/Sky/ShootingStars';

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();
  const [sunPosition, setSunPosition] = useState('top');

  useEffect(() => {
    const positions = ['top', 'left', 'right'];
    setSunPosition(positions[Math.floor(Math.random() * positions.length)]);
  }, []);

  const renderMeadow = () => (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-200" />
      <Clouds />
      {isDarkMode ? <Moon /> : <Sun />}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-green-600 to-green-500" />
      <div className="absolute bottom-0 w-full">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              bottom: `${15 + Math.random() * 15}vh`,
              left: `${(i * 6) + Math.random() * 5}%`,
              zIndex: Math.floor(Math.random() * 10),
            }}
          >
            <Flower index={i} />
          </div>
        ))}
      </div>
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`grass-${i}`}
          className="absolute bottom-0 w-1 bg-green-700 origin-bottom animate-grass-sway"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${6 + Math.random() * 8}vh`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  const renderNightScene = () => (
    <div className="relative w-full h-full bg-gray-900" style={{ isolation: 'isolate' }}>
      <Moon />
      <Mountains />
      <ShootingStars />

      <div className="absolute inset-0" style={{ zIndex: 4 }}>
        {[...Array(10)].map((_, i) => (
          <Tree
            key={`tree-front-${i}`}
            x={Math.random() * 30}
            height={80 + Math.random() * 60}
            variation={Math.random() * 15}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <Tree
            key={`tree-mid-${i}`}
            x={30 + Math.random() * 40}
            height={70 + Math.random() * 50}
            variation={Math.random() * 20}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <Tree
            key={`tree-back-${i}`}
            x={70 + Math.random() * 30}
            height={75 + Math.random() * 55}
            variation={Math.random() * 15}
          />
        ))}
      </div>

      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-gray-800 to-gray-900 z-2" />
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {isDarkMode ? renderNightScene() : renderMeadow()}
    </div>
  );
};

export default AnimatedBackground;