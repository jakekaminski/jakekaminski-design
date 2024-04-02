/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['var(--font-body)'],
                heading: ['var(--font-heading)'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
