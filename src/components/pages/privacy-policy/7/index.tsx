import GenLink from "@/components/gen/link";
const PrivacyPolicy7: React.FC = () => {
	return (
		<>
			<p>
				Our servers are located in the United States. If you are accessing our
				Services from outside the United States, please be aware that your
				information may be transferred to, stored, and processed by us in our
				facilities and by those third parties with whom we may share your
				personal information (see{" "}
				<GenLink
					props={{
						href: "#whoShare",
						label:
							"Navigate to When and with whom we share your personal information",
						isHighlighted: true,
					}}
				>
					&quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&quot;
				</GenLink>{" "}
				above), in the United States, and other countries.
			</p>
			<p>
				If you are a resident in the European Economic Area (EEA) or United
				Kingdom (UK), then these countries may not necessarily have data
				protection laws or other similar laws as comprehensive as those in your
				country. However, we will take all necessary measures to protect your
				personal information in accordance with this privacy notice and
				applicable law.
			</p>
			<p>European Commission&apos;s Standard Contractual Clauses:</p>
			<p>
				We have implemented measures to protect your personal information,
				including by using the European Commission&apos;s Standard Contractual
				Clauses for transfers of personal information between our group
				companies and between us and our third-party providers. These clauses
				require all recipients to protect all personal information that they
				process originating from the EEA or UK in accordance with European data
				protection laws and regulations. Our Standard Contractual Clauses can be
				provided upon request. We have implemented similar appropriate
				safeguards with our third-party service providers and partners and
				further details can be provided upon request.
			</p>
		</>
	);
};

export default PrivacyPolicy7;
