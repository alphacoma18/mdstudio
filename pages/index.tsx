import React from "react";
import styles from "./index.module.css";
import type { NextPage } from "next";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Canvas from "../components/canvas";
import BotBar from "../components/botbar";
const App: NextPage = () => {
	return (
		<main className={styles.main}>
			<Nav />
			<Sidebar />
			<Canvas />
			<BotBar />
		</main>
	);
};
export default App;
