/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
    theme: {
        extend: {
            colors: {
                main: '#0090A3',
                accent: '#73A300',
                dark: {
                    bg: '#121212',
                    text: '#ffffff',
                },
                light: {
                    bg: '#f5f5f5',
                    text: '#121212',
                }
            },
        },
    },
    plugins: [],
}