import localFont from "next/font/local";

// Only weights visible on the card are preloaded. Keep loader arguments static
// so Next can emit font CSS, hashed files and preload hints at build time.
export const peyda = localFont({
  src: [
    { path: "./fonts/peyda-400-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/peyda-600-semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/peyda-800-extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-peyda",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

// This weight is needed only when a drawer (or the no-JS details) is visible.
export const peydaBold = localFont({
  src: "./fonts/peyda-700-bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-peyda-bold",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
});
