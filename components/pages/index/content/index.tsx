import { useContext, useState } from "react";
import ContextIndex from "../../../../utils/context/index";
import GenButton from "../../../gen/button";
import styles from "./index.module.css";
const IndexContent: React.FC = () => {
	const { projects } = useContext(ContextIndex);
	const [isCreating, setIsCreating] = useState<boolean>(false);

	return (
		<section className={styles.section}>
			<GenButton
				props={{
					label: "Create New Project",
					type: "button",
					onClick: () => setIsCreating(true),
					className: styles.mobileNewProject,
				}}
			>
				<i className="icon-plus-circled"></i>
			</GenButton>
		</section>
	);
};

export default IndexContent;
