/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
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