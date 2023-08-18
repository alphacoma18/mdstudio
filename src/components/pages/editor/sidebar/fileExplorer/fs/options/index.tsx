import GenButton from "@/gen/button";
import styles from "./index.module.css";
interface Props {
	props: {
		handleToggle(): void;
	};
}
const EditorFSOptions: React.FC<Props> = ({ props: { handleToggle } }) => {
	return (
		<GenButton
			props={{
				label: "Options",
				onClick: handleToggle,
				className: `icon-cog ${styles.options}`,
				type: "button",
			}}
		/>
	);
};

export default EditorFSOptions;
