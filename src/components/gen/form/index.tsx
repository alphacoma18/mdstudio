import GenButton from "../button";
import styles from "./index.module.css";
interface Props {
	children: React.ReactNode;
	props: {
		isActive: boolean;
		title: string;
		id: string;
		submitFunc: () => void;
		backFunc: () => void;
		mobileModal?: boolean;
	};
}
const GenForm: React.FC<Props> = ({ children, props }) => {
	const {
		isActive,
		title,
		id,
		submitFunc,
		backFunc,
		mobileModal = false,
	} = props;
	return (
		<form
			className={`${styles.form} ${isActive ? styles.active : styles.inactive}`}
			id={id}
			onSubmit={(e) => {
				e.preventDefault();
				submitFunc();
			}}
		>
			<div className={mobileModal ? styles.mobCtr : styles.ctr}>
				<p className={styles.title}>
					<GenButton
						props={{
							type: "button",
							label: "Back button",
							onClick: backFunc,
							className: `${styles.back} btnPseudoBC `,
						}}
					>
						<i className={`icon-back`} />
					</GenButton>
					{title}
				</p>
				<hr />
				{children}
			</div>
		</form>
	);
};
export default GenForm;
