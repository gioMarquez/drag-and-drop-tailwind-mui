import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: ['./src/**/*.html', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
  ],
  corePlugins: {
    preflight: false,
  },
}
