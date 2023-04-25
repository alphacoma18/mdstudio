import PrivacyPolicySummary from "../_summary";
interface Props {
	props: {
		id: string;
		title: string;
		summary?: string;
	};
	children: React.ReactNode;
}
const PrivacyPolicyWrapper: React.FC<Props> = ({
	props: { id, title, summary },
	children,
}) => {
	return (
		<li id={id}>
			<p>{title}</p>
			<span>
				{summary && <PrivacyPolicySummary summary={summary} />}
				{children}
			</span>
		</li>
	);
};

export default PrivacyPolicyWrapper;
