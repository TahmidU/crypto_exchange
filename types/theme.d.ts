import "styled-components";

export interface IColours {
  almostBlack: string;
  red: string;
  white: string;
  almostWhite: string;
  black: string;
  grey: string;
}

export interface IFonts {
  main: {
    small: string;
    regular: string;
    medium: string;
    big: string;
    bigger: string;
    massive: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme {
    colours: IColours;
    fonts: IFonts;
  }
}
