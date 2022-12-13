import { memo } from "react";
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
				</span>
			</div>
			<div className={styles.body}>
				<EditorFolder project={project1} />
			</div>
		</section>
	);
};

export default memo(EditorFileExplorer);
