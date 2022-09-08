import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../public/fontello/fontello-fd7a4a28/css/fontello.css";
function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
