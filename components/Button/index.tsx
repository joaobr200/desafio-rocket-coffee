import { css } from "@stitches/react";

const Button = css({
  background: "none",

  width: "200px",
  height: "40px",
  borderRadius: 6,
  border: "1px solid $button",
  color: "$textColor",
  fontSize: 12,
  fontWeight: 700,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",

  cursor: "pointer",
  transition: "all 0.2s linear",

  "&:hover": {
    background: "$button",
    opacity: 0.98,
  },

  variants: {
    size: {
      sm: {
        width: 175,
        height: 35,
        fontSize: 11,
      },
      md: {
        width: "200px",
        height: "40px",
        fontSize: 12,
      },
      lg: {
        width: "220px",
        height: "40px",
        fontSize: 14,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default Button;
