interface Props {
	props: {
		label: string;
		onClick?: () => void;
		className?: string;
		type?: "submit" | "button";
	};
	children?: React.ReactNode;
}

const GenButton: React.FC<Props> = ({ props, children }) => {
	const { label, onClick, className, type = "button" } = props;
	return (
		<button
			onClick={onClick}
			role={"presentation"}
			title={label}
			name={label}
			aria-label={label}
			className={className}
			type={type}
		>
			{children}
		</button>
	);
};
export default GenButton;
