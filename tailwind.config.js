/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F59E0B",
        accent: "#10B981",
      },
      fontSize: {
        lg: "1.125rem",
        xl: "1.25rem",
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(to right, #E0C3FC, #8EC5FC)",
      },
    },
  },
  plugins: [],
};
