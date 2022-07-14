import "styled-components";

export interface IColours {
  almostBlack: string;
  red: string;
  crimson: string;
  white: string;
  almostWhite: string;
  black: string;
  grey: string;
}

export interface IAColours {
  cAlmostBlack: Color<string>;
  cRed: Color<string>;
  cCrimson: Color<string>;
  cWhite: Color<string>;
  cAlmostWhite: Color<string>;
  cBlack: Color<string>;
  cGrey: Color<string>;
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
    aColours: IAColours;
    fonts: IFonts;
  }
}
