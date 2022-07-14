import "../styles/globals.css";
import "../styles/fonts.css";

import type { AppProps } from "next/app";
import GlobalContext from "context/GlobalContext";
import { ThemeProvider } from "styled-components";
import getTheme from "resources/themes";
import useAuth from "hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = getTheme();
  const api = useAuth();

  return (
    <GlobalContext.Provider value={{ theme: theme, api: api }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
