import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../utils/context";
import "../public/fontello/fontello-a3264dce/css/fontello.css"
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Component {...pageProps} />;
		</ContextProvider>
	);
}

export default MyApp;
