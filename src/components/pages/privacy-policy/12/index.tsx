const PrivacyPolicy12: React.FC = () => {
	return (
		<>
			<p>
				California Civil Code Section 1798.83, also known as the &quot;Shine The
				Light&quot; law, permits our users who are California residents to
				request and obtain from us, once a year and free of charge, information
				about categories of personal information (if any) we disclosed to third
				parties for direct marketing purposes and the names and addresses of all
				third parties with which we shared personal information in the
				immediately preceding calendar year. If you are a California resident
				and would like to make such a request, please submit your request in
				writing to us using the contact information provided below.
			</p>
			<p>
				If you are under 18 years of age, reside in California, and have a
				registered account with Services, you have the right to request removal
				of unwanted data that you publicly post on the Services. To request
				removal of such data, please contact us using the contact information
				provided below and include the email address associated with your
				account and a statement that you reside in California. We will make sure
				the data is not publicly displayed on the Services, but please be aware
				that the data may not be completely or comprehensively removed from all
				our systems (e.g., backups, etc.).
			</p>
			<p className="bold">CCPA Privacy Notice</p>
			<p>
				The California Code of Regulations defines a &quot;resident&quot; as:
			</p>
			<ol>
				<li>
					every individual who is in the State of California for other than a
					temporary or transitory purpose and
				</li>
				<li>
					every individual who is domiciled in the State of California who is
					outside the State of California for a temporary or transitory purpose
				</li>
			</ol>
			<p>All other individuals are defined as &quot;non-residents.&quot;</p>
			<p>
				If this definition of &quot;resident&quot; applies to you, we must
				adhere to certain rights and obligations regarding your personal
				information.
			</p>
			<p className="bold">
				What categories of personal information do we collect?
			</p>
			<p>
				We have collected the following categories of personal information in
				the past twelve (12) months:
			</p>
			<table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Examples</th>
						<th>Collected</th>
					</tr>
				</thead>
				<tbody>
					{table.map((item, index) => (
						<tr key={index}>
							<td>{item.category}</td>
							<td>{item.examples}</td>
							<td>{item.collected}</td>
						</tr>
					))}
				</tbody>
			</table>
			<p>
				We will use and retain the collected personal information as needed to
				provide the Services or for:
			</p>
			<ul>
				<li>Category A - As long as the user has an account with us</li>
				<li>Category B - As long as the user has an account with us</li>
			</ul>
			<p>
				We may also collect other personal information outside of these
				categories through instances where you interact with us in person,
				online, or by phone or mail in the context of:
			</p>
			<ul>
				<li>Receiving help through our customer support channels;</li>
				<li>Participation in customer surveys or contests; and</li>
				<li>
					Facilitation in the delivery of our Services and to respond to your
					inquiries.
				</li>
			</ul>
			<p>How do we use and share your personal information?</p>
			<p>
				More information about our data collection and sharing practices can be
				found in this privacy notice.
			</p>
			<p>
				You may contact us by email at markdownstudio@gmail.com, or by referring
				to the contact details at the bottom of this document.
			</p>
			<p>
				If you are using an authorized agent to exercise your right to opt out
				we may deny a request if the authorized agent does not submit proof that
				they have been validly authorized to act on your behalf.
			</p>
			<p className="bold">Will your information be shared with anyone else?</p>
			<p>
				We may disclose your personal information with our service providers
				pursuant to a written contract between us and each service provider.
				Each service provider is a for-profit entity that processes the
				information on our behalf, following the same strict privacy protection
				obligations mandated by the CCPA.
			</p>
			<p>
				We may use your personal information for our own business purposes, such
				as for undertaking internal research for technological development and
				demonstration. This is not considered to be &quot;selling&quot; of your
				personal information.
			</p>
			<p>
				Coma Corporation has not disclosed, sold, or shared any personal
				information to third parties for a business or commercial purpose in the
				preceding twelve (12) months. Coma Corporation will not sell or share
				personal information in the future belonging to website visitors, users,
				and other consumers.
			</p>
			<p className="bold">Your rights with respect to your personal data</p>
			<p className="underline">
				Right to request deletion of the data — Request to delete
			</p>
			<p>
				You can ask for the deletion of your personal information. If you ask us
				to delete your personal information, we will respect your request and
				delete your personal information, subject to certain exceptions provided
				by law, such as (but not limited to) the exercise by another consumer of
				his or her right to free speech, our compliance requirements resulting
				from a legal obligation, or any processing that may be required to
				protect against illegal activities.
			</p>
			<p className="underline">Right to be informed — Request to know</p>
			<p>Depending on the circumstances, you have a right to know:</p>
			<ul>
				<li>whether we collect and use your personal information;</li>
				<li>the categories of personal information that we collect;</li>
				<li>
					the purposes for which the collected personal information is used;
				</li>
				<li>whether we sell or share personal information to third parties;</li>
				<li>
					the categories of personal information that we sold, shared, or
					disclosed for a business purpose;
				</li>
				<li>
					the categories of third parties to whom the personal information was
					sold, shared, or disclosed for a business purpose;
				</li>
				<li>
					the business or commercial purpose for collecting, selling, or sharing
					personal information; and
				</li>
				<li>
					the specific pieces of personal information we collected about you.
				</li>
			</ul>
			<p>
				In accordance with applicable law, we are not obligated to provide or
				delete consumer information that is de-identified in response to a
				consumer request or to re-identify individual data to verify a consumer
				request.
			</p>
			<p className="underline">
				Right to Non-Discrimination for the Exercise of a Consumer’s Privacy
				Rights
			</p>
			<p>
				We will not discriminate against you if you exercise your privacy
				rights.
			</p>
			<p className="underline">
				Right to Limit Use and Disclosure of Sensitive Personal Information{" "}
			</p>
			<p>We do not process consumer&apos;s sensitive personal information. </p>
			<p className="underline">Verification process</p>
			<p>
				Upon receiving your request, we will need to verify your identity to
				determine you are the same person about whom we have the information in
				our system. These verification efforts require us to ask you to provide
				information so that we can match it with information you have previously
				provided us. For instance, depending on the type of request you submit,
				we may ask you to provide certain information so that we can match the
				information you provide with the information we already have on file, or
				we may contact you through a communication method (e.g., phone or email)
				that you have previously provided to us. We may also use other
				verification methods as the circumstances dictate.
			</p>
			<p>
				We will only use personal information provided in your request to verify
				your identity or authority to make the request. To the extent possible,
				we will avoid requesting additional information from you for the
				purposes of verification. However, if we cannot verify your identity
				from the information already maintained by us, we may request that you
				provide additional information for the purposes of verifying your
				identity and for security or fraud-prevention purposes. We will delete
				such additionally provided information as soon as we finish verifying
				you.
			</p>
			<p className="underline">Other privacy rights</p>
			<ul>
				<li>You may object to the processing of your personal information.</li>
				<li>
					You may request correction of your personal data if it is incorrect or
					no longer relevant, or ask to restrict the processing of the
					information.
				</li>
				<li>
					You can designate an authorized agent to make a request under the CCPA
					on your behalf. We may deny a request from an authorized agent that
					does not submit proof that they have been validly authorized to act on
					your behalf in accordance with the CCPA.
				</li>
				<li>
					You may request to opt out from future selling or sharing of your
					personal information to third parties. Upon receiving an opt-out
					request, we will act upon the request as soon as feasibly possible,
					but no later than fifteen (15) days from the date of the request
					submission.
				</li>
			</ul>
			<p>
				To exercise these rights, you can contact us by email at
				markdownstudio@gmail.com, or by referring to the contact details at the
				bottom of this document. If you have a complaint about how we handle
				your data, we would like to hear from you.
			</p>
		</>
	);
};

export default PrivacyPolicy12;

interface Table {
	category: string;
	examples?: string;
	collected: "YES" | "NO";
}
const table: Table[] = [
	{
		category: "A. Identifiers",
		examples:
			"Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
		collected: "YES",
	},
	{
		category:
			"B. Personal information categories listed in the California Customer Records statute",
		examples:
			"Name, contact information, education, employment, employment history, and financial information",
		collected: "YES",
	},
	{
		category:
			"C. Protected classification characteristics under California or federal law",
		examples: "Gender and date of birth",
		collected: "NO",
	},
	{
		category: "D. Commercial information",
		examples:
			"Transaction information, purchase history, financial details, and payment information",
		collected: "NO",
	},
	{
		category: "E. Biometric information",
		examples: "Fingerprints and voiceprints",
		collected: "NO",
	},
	{
		category: "F. Internet or other similar network activity",
		examples:
			"Browsing history, search history, and information regarding a person's interaction with an Internet website, application, or advertisement",
		collected: "NO",
	},
	{
		category: "G. Geolocation data",
		examples: "Device location",
		collected: "NO",
	},
	{
		category:
			"H. Audio, electronic, visual, thermal, olfactory, or similar information",
		examples:
			"Images and audio, video or call recordings created in connection with our business activities",
		collected: "NO",
	},
	{
		category: "I. Professional or employment-related information",
		examples:
			"Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us ",
		collected: "NO",
	},
	{
		category: "J. Education information",
		examples: "Student records and directory information",
		collected: "NO",
	},
	{
		category: "K. Inferences drawn from other personal information",
		examples:
			"Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics ",
		collected: "NO",
	},
	{
		category: "L. Sensitive Personal Information",
		collected: "NO",
	},
];
