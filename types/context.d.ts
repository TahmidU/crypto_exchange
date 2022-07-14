import useAuth from "hooks/useAuth";
import { DefaultTheme } from "styled-components";

export interface IGlobalContext {
  theme: DefaultTheme;
  api: ReturnType<typeof useAuth>;
}
