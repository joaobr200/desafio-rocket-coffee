import { css } from "@stitches/react";
import { relative } from "path";

export const HeroMain = css({
  position: "relative",
  overflow: "hidden",
});

const blurMidia = {
  display: "none",
  "@media screen and (min-width: 600px)": {
    display: "block",
  },
};

export const HeroWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0px 28px 0px 28px",
});

export const HeroTitle = css({
  fontFamily: "$manrope",
  fontSize: 30,
  fontWeight: 600,
  letterSpacing: "2%",
  textAlign: "center",
  marginTop: "80px",

  "@media screen and (min-width: 640px)": {
    fontSize: 40,
  },
  "@media screen and (min-width: 768px)": {
    fontSize: 45,
  },
  "@media screen and (min-width: 1024px)": {
    display: "none",
  },
});

export const HeroButton = css({
  margin: "56px 0 0 0",
  "@media screen and (min-width: 1024px)": {
    display: "none",
  },
});

export const HeroGreat = css({
  textAlign: "center",
  marginTop: 98,

  fontSize: 30,
  fontWeight: 700,
  "@media screen and (min-width: 640px)": {
    fontSize: 40,
  },
  "@media screen and (min-width: 1024px)": {
    fontSize: 60,
  },
});

export const GreatOutline = css({
  color: "black",
  "-webkit-text-fill-color": "$background",
  "-webkit-text-stroke": "1px #8257E5",
  fontWeight: 700,
  letterSpacing: -3,
});

export const BlurTop = css({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  ...blurMidia,
});
export const BlurBottom = css({
  position: "absolute",
  bottom: -50,
  left: 0,
  zIndex: -1,
  ...blurMidia,
});

export const BlurMobile = css({
  position: "absolute",
  bottom: -50,
  zIndex: -1,
  "@media screen and (min-width: 600px)": {
    display: "none",
  },
});
