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
                'brand-dark': '#3C2F2F',   // Deep Chocolate
                'brand-terra': '#C05D3C',  // Warm Terracotta
                'brand-cream': '#F5F0E8',  // Soft Ivory
                'brand-olive': '#5A6A4E',  // Olive Accents
                'brand-gold': '#D4AF37',   // Metallic Gold
                'brand-black': '#1a1a1a',  // Rich Black for text
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
            }
        },
    },
    plugins: [],
}
