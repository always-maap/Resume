import "../styles/font.css";
import { AppProps } from "next/app";
import { GlobalStyles } from "../theme/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
