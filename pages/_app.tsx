import type { AppProps } from "next/app";
import { globalStyle } from "../styles/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyle();
  return <Component {...pageProps} />;
}

export default MyApp;
