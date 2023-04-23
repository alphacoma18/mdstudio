import GenButton from "@/gen/button";
import styles from "./index.module.css";
const EditorFSOptions = () => {
	return (
		<GenButton
			props={{
				label: "Options",
				onClick: () => console.log("Options"),
				className: `icon-cog ${styles.options}`,
				type: "button",
			}}
		/>
	);
};

export default EditorFSOptions;
