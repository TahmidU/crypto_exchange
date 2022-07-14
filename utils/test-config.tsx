import React, { FC, ReactElement, ReactNode } from "react";
import { RenderOptions, render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import getTheme from "resources/themes";

interface Props {
  children: ReactNode;
}

const AllTheProviders: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
