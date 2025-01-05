/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'sway': 'sway 3s ease-in-out infinite',
        'sway-gentle': 'sway-gentle 3s ease-in-out infinite',
        'sway-slow': 'sway-slow 4s ease-in-out infinite',
        'sway-medium': 'sway-medium 3.5s ease-in-out infinite',
        'grass-sway': 'grass-sway 2s ease-in-out infinite',
        'cloud-drift': 'cloud-drift 60s linear infinite',
        'sun-pulse': 'sun-pulse 3s ease-in-out infinite',
        'sun-glow': 'sun-glow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'tree-sway': 'tree-sway 4s ease-in-out infinite',
        'scroll-right': 'scroll-right 40s linear infinite', // Added carousel Animation
      },
      keyframes: {
        'twinkle': {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'scale(0.7)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'shooting-star': {
          '0%': {
            transform: 'translate(0, 0) rotate(45deg)',
            opacity: 1,
          },
          '80%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translate(-200px, 200px) rotate(45deg)',
            opacity: 0,
          }
        },
        'tree-sway': {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(1deg)'
          }
        },
        'sway': {
          '0%, 100%': {
            transform: 'rotate(-8deg)'
          },
          '50%': {
            transform: 'rotate(8deg)'
          }
        },
        'petal-sway': {
          '0%, 100%': {
            transform: 'rotate(0deg) translateY(-6px)'
          },
          '50%': {
            transform: 'rotate(15deg) translateY(-6px)'
          }
        },
        'grass-sway': {
          '0%, 100%': {
            transform: 'rotate(-5deg)'
          },
          '50%': {
            transform: 'rotate(5deg)'
          }
        },
        'cloud-drift': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100vw)'
          }
        },
        'sun-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.9'
          }
        },
        'sun-glow': {
          '0%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0.2'
          },
          '50%': {
            transform: 'scale(2)',
            opacity: '0.1'
          }
        },
        'scroll-right': {  // Added carousel keyframes
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      }
    },
  },
  plugins: [],
}