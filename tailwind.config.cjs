/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            mobile: "720px",
            laptop: "1024px",
            desktop: "1280px",
        },
        fontFamily: {
            secular: ['"Secular One"', "monospace"],
            inconsolata: ['"Inconsolata"', "monospace"],
            space: ['"Space Mono"', "monospace"],
        },
        extend: {
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
        },
    },
    plugins: [],
};
