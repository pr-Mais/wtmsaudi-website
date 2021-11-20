module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        dubai: ["Dubai", "Helvetica", "Arial", "sans-serif"],
        googlesans: ["GoogleSans", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        green: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
      },
    },
  },
  variants: {
    extend: {
      float: ["direction"],
      margin: ["direction"],
      padding: ["direction"],
      inset: ["direction"],
      space: ["direction"],
      borderWidth: ["direction"],
      borderRadius: ["direction"],
      backgroundPosition: ["direction"],
      letterSpacing: ["direction"],
      scale: ["direction"],
      fontFamily: ["direction"],
      textDecoration: ["active"]
    },
  },
  plugins: [require("tailwindcss-dir")()],
};
