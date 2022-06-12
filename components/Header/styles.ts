import { css, keyframes, styled } from "@stitches/react";

export const HeaderWrapper = css({
  width: "100%",
  height: "80px",

  margin: "35px 0 0 0",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderBottom: "1px solid $border",

  "@media screen and (min-width: 1024px)": {
    justifyContent: "space-evenly",
  },
});

export const HeaderLogo = css({
  margin: "0 0 0 5px",
  cursor: "pointer",

  "> svg:nth-child(2)": {
    display: "none",
  },
  "@media screen and (min-width: 768px)": {
    "> svg:nth-child(1)": {
      display: "none",
    },
    "> svg:nth-child(2)": {
      display: "block",
    },
  },
});

export const ButtonWrapper = css({
  display: "none",
  "@media screen and (min-width: 1024px)": {
    display: "block",
  },
});

export const MenuButton = css({
  margin: "0 5px 0 0",
  cursor: "pointer",

  "@media screen and (min-width: 768px)": {
    display: "none",
    cursor: "not-allowed",
  },
});

const FadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.98 },
});

export const HeroMenu = css({
  position: "absolute",

  width: "100%",
  height: "100%",
  background: "$background",

  opacity: "0",
  animation: `${FadeIn} 0.3s linear`,

  top: 115,
  zIndex: -1,
  display: "none",

  "> ul": {
    padding: 0,
  },

  "> ul li": {
    position: "relative",
    padding: "18px 0px 18px 40px",
    borderBottom: "1px solid rgb(168, 168, 171, 0.2)",
    borderTop: "1px solid rgb(168, 168, 171, 0.2)",
    "-webkit-background-clip": "padding-box",
    backgroundClip: "padding-box",

    "> a": {
      color: "$textColorMenuMobile",
      fontSize: "18px",
      fontWeight: 400,
      "&:hover": {
        color: "$textColor",
        fontWeight: 700,
      },
    },

    transition: "all 0.2s linear",
    "&:hover": {
      "&::before": {
        content: "",
        width: 5,
        height: 60,
        background: "$button",
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
      },
    },
  },

  variants: {
    visible: {
      true: {
        opacity: 0.98,
        zIndex: 1,
        display: "block",
      },
    },
  },

  "@media screen and (min-width: 768px)": {
    position: "relative",

    width: "auto",
    height: "auto",
    background: "none",

    opacity: "1",
    zIndex: 1,
    top: 0,
    display: "block",

    "> ul": {
      padding: 0,
      margin: "0 0 0 25px",
      display: "flex",

      "li, li + li": {
        marginRight: 25,
      },
    },

    "> ul li": {
      position: "relative",
      padding: "18px 0px 18px 0px",
      border: "none",

      transition: "all 0.2s linear",

      "> a": {
        fontSize: "20px",
        fontWeight: 400,
        "&:hover": {
          fontWeight: 700,
        },
      },

      "&:hover": {
        "&::before": {
          display: "none",
        },
      },
    },
  },
});
