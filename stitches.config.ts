import { createStitches } from "@stitches/react";

export const { globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      background: "#000",
      textColor: "#FFF",
      button: "#8257E5",
      border: "#29292E",
      borderMenuMobile: "#A8A8B3",
      textColorMenuMobile: "#E1E1E6",
    },
    fonts: {
      manrope: "Manrope, sans-serif",
    },
  },
  media: {
    bp1: "@media (min-width: 640px)",
  },
});

export const globalStyle = globalCss({
  "*": {
    margin: 0,
    paddin: 0,
    outline: 0,
    boxSizing: "border-box",
  },

  ul: {
    listStyle: "none",
  },
  body: {
    maxWidth: "1920px",
    height: "100vh",
    background: "$background",
    color: "$textColor",
    fontFamily: "$manrope",
  },

  a: {
    textDecoration: "none",
  },
});
