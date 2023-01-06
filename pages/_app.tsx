import { Partytown } from "@builder.io/partytown/react";
import { NextPage } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import "../public/fontello/fontello-76f6c27b/css/fontello.css";
import "../styles/editor.min.css";
import "../styles/globals.min.css";
import { ContextProviderGlobal } from "../utils/context/_global";
export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout & AppProps<{ session: Session }>) {
	const {
		Component,
		pageProps: { session, ...pageProps },
	} = props;
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>AnyMD | Markdown Publisher</title>
				<Partytown debug={true} forward={["dataLayer.push"]} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			{getLayout(
				<SessionProvider session={session}>
					<ContextProviderGlobal>
						<NextNProgress
							// puts the loader at the bottom right
							color={"#fff"}
							transformCSS={(css) => {
								return (
									<style>{css.replace("top: 15px;", "bottom: 15px;")}</style>
								);
							}}
						/>
						<div
							style={{
								background: "#007acc",
								height: "3px",
								position: "fixed",
								width: "100%",
								zIndex: 100,
							}}
						></div>
						{/* <Script src="https://example.com/script.js" type="" /> */}
						<Component {...pageProps} />
					</ContextProviderGlobal>
				</SessionProvider>
			)}
		</>
	);
}

export default MyApp;
