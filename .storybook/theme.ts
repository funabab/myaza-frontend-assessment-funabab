import { create } from "@storybook/theming/create";
import { getAbsoluteUrl } from "../src/utils/helpers";

export const appTheme = create({
  base: "dark",
  fontBase: '"Karla", sans-serif',
  brandTitle: "UIFly Dashboard",
  brandUrl: getAbsoluteUrl("/"),
  brandImage: getAbsoluteUrl("/images/logo.svg"),
  brandTarget: "_self",

  appBg: "#1D1D41",
  appContentBg: "#141332",
  appPreviewBg: "#141332",

  textColor: "#ffffff",

  barBg: "#141332",
  barTextColor: "#ffffff",

  inputBg: "#1D1D41",
  inputTextColor: "#ffffff",
  inputBorder: "#DCD9D9",

  buttonBg: "transparent",
  buttonBorder: "#cbc8ff",

  barSelectedColor: "#cbc8ff",

  colorSecondary: "#cbc8ff",

  barHoverColor: "#cbc8ff",

  booleanBg: "#1d1d41"
});
