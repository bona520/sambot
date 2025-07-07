import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#333",
        'secondary': "#fce9c2",
      },
      fontFamily: {
        moul: ['var(--font-moul)', 'serif'],
        moulpali: ['var(--font-moulpali)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
