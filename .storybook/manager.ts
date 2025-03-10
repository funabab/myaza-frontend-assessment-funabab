import { addons } from "@storybook/manager-api";
import "./custom-styles.css";
import { appTheme } from "./theme";

addons.setConfig({
  theme: appTheme
});
