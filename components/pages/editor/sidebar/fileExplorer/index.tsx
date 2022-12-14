import { memo } from "react";
import GenButton from "../../../../gen/button";
import { project1 } from "./data";
import EditorFolder from "./folder";
import styles from "./index.module.css";
const EditorFileExplorer: React.FC = () => {
	const regex = /^[a-zA-Z]{1}[a-zA-Z0-9]{1,9}$/;
	function handlePrompt(txt: string): string {
		try {
			const input = prompt(txt);
			if (input === null) return "";
			if (!regex.test(input)) throw new Error("Invalid input");
			return input;
		} catch (error) {
			alert(error);
			return handlePrompt(txt);
		}
	}
	function handleNewFile() {
		const result = handlePrompt("Enter file name:");
		if (result === "") return;
		console.log(result);
	}

	function handleNewFolder() {
		const result = handlePrompt("Enter folder name:");
		if (result === null) return;
		console.log(result);
	}
	return (
		<section className={styles.fileExplorer}>
			<div className={styles.head}>
				<span className={`${styles.headItem} hoverParent`}>
					<GenButton props={{ label: "Explorer: upload to cloud" }}>
						<i className="icon-upload-cloud"></i>
					</GenButton>
				</span>
				<span className={`${styles.headItem} hoverParent`}>
					<GenButton
						props={{
							label: "Explorer: new file",
							onClick: handleNewFile,
						}}
					>
						<i className="icon-doc-add"></i>
					</GenButton>
					<GenButton
						props={{
							label: "Explorer: new folder",
							onClick: handleNewFolder,
						}}
					>
						<i className="icon-folder-add"></i>
					</GenButton>

					<GenButton
						props={{
							label: "Explorer: reload files",
							onClick: () => console.log("reload"),
						}}
					>
						<i className="icon-arrows-cw"></i>
					</GenButton>
				</span>
			</div>
			<div className={styles.body}>
				<EditorFolder project={project1} />
			</div>
		</section>
	);
};

export default memo(EditorFileExplorer);
