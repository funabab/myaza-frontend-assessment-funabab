import { addons } from "@storybook/manager-api";
import { appTheme } from "./theme";
import "./custom-styles.css";

addons.setConfig({
  theme: appTheme
});
