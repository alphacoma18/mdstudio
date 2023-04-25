interface Props {
	summary: string;
}
const PrivacyPolicySummary: React.FC<Props> = ({ summary }) => {
	return (
		<p className="italic">
			<span className="bold">In Short: </span>
			{summary}
		</p>
	);
};

export default PrivacyPolicySummary;
