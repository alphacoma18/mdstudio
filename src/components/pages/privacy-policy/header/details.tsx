export interface IPrivacyPolicyDetails {
	props: {
		title: string;
		summary: React.ReactNode;
	};
}
const PrivacyPolicyDetails: React.FC<IPrivacyPolicyDetails> = ({
	props: { title, summary },
}) => {
	return (
		<details>
			<summary className="bold">{title}</summary>
			{summary}
		</details>
	);
};

export default PrivacyPolicyDetails;
