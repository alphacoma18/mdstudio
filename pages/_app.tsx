import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/fontello/fontello-9d0a19a6/css/fontello.css";
function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
