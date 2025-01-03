import React from 'react';

const Mountains = () => (
  <div className="absolute inset-0" style={{ zIndex: -1000 }}>
    <div className="absolute bottom-0 w-full h-[75vh]">
      {[...Array(4)].map((_, i) => (
        <div
          key={`mountain-${i}`}
          className="absolute bottom-0"
          style={{
            left: `${-10 + (i * 30)}%`,
            width: '60%',
            height: '95%',
            zIndex: 1
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 clip-mountain transform -skew-x-3 shadow-2xl">
            <div className="absolute inset-0 bg-pattern opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-white via-slate-100 to-transparent" />
            {[...Array(12)].map((_, j) => (
              <div
                key={`ridge-${j}`}
                className="absolute bg-gradient-to-b from-slate-600 to-transparent blur-[0.5px]"
                style={{
                  width: '2px',
                  left: `${10 + (j * 8)}%`,
                  height: `${40 + Math.random() * 30}%`,
                  top: '30%',
                  transform: `rotate(${80 + Math.random() * 20}deg)`
                }}
              />
            ))}
          </div>
        </div>
      ))}
      {/* Middle and Front ranges implementation remains the same */}
    </div>
  </div>
);

export default Mountains;
