import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import getTheme from "resources/themes";
import { withThemes } from "@react-theming/storybook-addon";

addDecorator(withThemes(ThemeProvider, [getTheme()]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
