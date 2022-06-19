/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./themes/mayhugo/layouts/**/*.html",
        "./themes/mayhugo/static/js/*.js",
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        container: {
            padding: '2rem',
            center: true,
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
