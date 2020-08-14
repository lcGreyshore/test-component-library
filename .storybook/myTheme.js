import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#3272db",
  colorSecondary: "#3272db",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Helvetica Neue", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#3272db",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Prometric Storybook",
  brandUrl: "https://example.com",
  brandImage: "https://www.prometric.com/themes/custom/prometric_theme/logo.svg"
});