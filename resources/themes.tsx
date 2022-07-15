import { IColours, IFonts } from "types/theme";

import type { DefaultTheme } from "styled-components";

const colours: IColours = {
  almostBlack: "#211f1b",
  red: "#FD1C1C",
  white: "#FFFFFF",
  almostWhite: "#e8e8e8",
  black: "#000000",
  grey: "#bebebe",
};

const fonts: IFonts = {
  main: {
    small: `font-family: 'Nunito', sans-serif;
        font-size: 8px;`,
    regular: `font-family: 'Nunito', sans-serif;
          font-size: 14px;`,
    medium: `font-family: 'Nunito', sans-serif;
        font-size: 16px;`,
    big: `font-family: 'Nunito', sans-serif;
        font-size: 20px;`,
    bigger: `font-family: 'Nunito', sans-serif;
        font-size: 24px;`,
    massive: `font-family: 'Nunito', sans-serif;
        font-size: 36px;`,
  },
};

export default function getTheme(): DefaultTheme {
  return {
    colours,
    fonts,
  } as DefaultTheme;
}
