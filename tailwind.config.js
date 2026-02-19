/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                chocolate: '#1C1917', // Warm Black
                gold: '#CA8A04',      // Premium Gold
                cream: '#FAFAF9',     // Warm White
                stone: '#44403C',     // Dark Grey
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
