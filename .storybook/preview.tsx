import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { fontKarla } from "../src/utils/fonts";
import { appTheme } from "./theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      disableSaveFromUI: true
    },
    docs: {
      theme: appTheme
    },
    layout: "centered"
  },
  decorators: [
    (Story) => (
      <div className={fontKarla.variable}>
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"]
};

export default preview;
