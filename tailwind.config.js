module.exports = {
  purge: ["./pages/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans:
        'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      mono:
        '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      serif: '"Modern Antiqua", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      margin: {
        "2px": "2px",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
