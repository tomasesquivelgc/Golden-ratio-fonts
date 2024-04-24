/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        gr1: '61.8%',
        gr2: '38.2%',
        gr3: '23.6%',
        gr4: '14.6%',
        gr5: '9%',
        gr6: '5.6%',
        gr7: '3.4%',
        gr8: '2.1%',
        gr9: '1.3%',
      },
      height: {
        gr1: '61.8%',
        gr2: '38.2%',
        gr3: '23.6%',
        gr4: '14.6%',
        gr5: '9%',
        gr6: '5.6%',
        gr7: '3.4%',
        gr8: '2.1%',
        gr9: '1.3%',
      },
      colors: {
        gold: '#FFD60A',
        mikadoYellow: '#CCA000',
        yaleBlue: '#003566',
        richBlack: '#000814',
        oxfordBlue: '#001D3D',
      },
      backgroundImage: {
        metalTexture: 'url(public/metal-texture.png)',
      },
    },
  },
  plugins: [],
};
