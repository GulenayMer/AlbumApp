/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
	colors: {
		slate: "#0f172a",
		blue: "#4f46e5",
	}
  },
  plugins: [],
}

