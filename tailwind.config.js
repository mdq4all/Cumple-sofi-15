/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('/i1_edited_mobile.jpg')",
        'desktop': "url('/i1_upscaled.jpeg')",
      },
      fontFamily: {
        'windsong': ['WindSong', 'cursive'],
        'roboto': ['Roboto', 'sans-serif' ],
        'josefina': ['Josefin Sans', 'sans-serif']
      }
    },
    colors: {
      primary: '#F4EDD1',
      secondary: '#BB7071',
    },
    animation: {
      'name_entrance': 'fadeEntrance 4s ease 0s 1 normal forwards',
      'title_entrance': 'fadeEntrance 4s ease 2s 1 normal forwards',
      'slide_down': 'slideDown 2s ease 2s infinite normal forwards',
      'party': 'fiesta 2s ease 0s infinite normal both',
    },
  },
  plugins: [],
};
