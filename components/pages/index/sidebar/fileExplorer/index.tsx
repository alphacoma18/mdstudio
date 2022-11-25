/* eslint-disable react/jsx-key */
import { GetServerSideProps } from "next";
import { memo, useContext, useEffect } from "react";
import axios from "../../../../../utils/axios";
import ContextGlobal from "../../../../../utils/context/_global";
import styles from "./index.module.css";
const FileExplorer: React.FC = () => {
	const { isMobile } = useContext(ContextGlobal);
	async function renderFX() {
		try {
			const res = await axios.get("/index/fileExplorer");
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		renderFX();
	}, []);
	const regex = /^[a-zA-Z]{1}[a-zA-Z0-9]{1,9}$/;
	function handlePrompt(txt: string): string {
		try {
			const input = prompt(txt);
			if (input === null) return "";
			if (!regex.test(input)) throw "Invalid name";
			return input;
		} catch (error) {
			alert(error);
			return handlePrompt(txt);
		}
	}
	function handleNewFile() {
		const result = handlePrompt("Enter file name:");
		if (!result) return;
		console.log(result);
	}

	function handleNewFolder() {
		const result = handlePrompt("Enter folder name:");
		if (!result) return;
		console.log(result);
	}
	return (
		<section className={styles.fileExplorer}>
			<div className={styles.head}>
				<span className={`${styles.headItem} hoverParent`}>
					<button>
						<i className="icon-upload-cloud"></i>
					</button>
				</span>
				<span className={`${styles.headItem} hoverParent`}>
					<button onClick={handleNewFile}>
						<i className="icon-doc-add"></i>
					</button>
					<button onClick={handleNewFolder}>
						<i className="icon-folder-add"></i>
					</button>
					<button>
						<i className="icon-arrows-cw"></i>
					</button>
					<button>
						<i className="icon-minus-squared"></i>
					</button>
				</span>
			</div>
			<div className={styles.body}></div>
		</section>
	);
};

export default memo(FileExplorer);

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { req, res } = context;
	const { cookies } = req;
	const { token } = cookies;
	console.log("Hello world");
	if (!token) {
		res.writeHead(302, { Location: "/login" });
		res.end();
	}
	return {
		props: {},
	};
};
