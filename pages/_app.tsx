import "../styles/globals.css";
import "../styles/fonts.css";

import type { AppProps } from "next/app";
import GlobalContext from "context/GlobalContext";
import { ThemeProvider } from "styled-components";
import getTheme from "resources/themes";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = getTheme();

  return (
    <GlobalContext.Provider value={{ theme: theme }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
