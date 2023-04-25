import GenLink from "@/components/gen/link";
const PrivacyPolicy10: React.FC = () => {
	return (
		<>
			<p>
				In some regions (like the EEA, UK, and Canada), you have certain rights
				under applicable data protection laws. These may include the right (i)
				to request access and obtain a copy of your personal information, (ii)
				to request rectification or erasure; (iii) to restrict the processing of
				your personal information; and (iv) if applicable, to data portability.
				In certain circumstances, you may also have the right to object to the
				processing of your personal information. You can make such a request by
				contacting us by using the contact details provided in the section{" "}
				<GenLink
					props={{
						href: "#contact",
						label: "Navigate to Contact",
						isHighlighted: true,
					}}
				>
					&quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
				</GenLink>{" "}
				below.
			</p>
			<p>
				We will consider and act upon any request in accordance with applicable
				data protection laws.
			</p>
			<p>
				processing your personal information, you also have the right to
				complain to your{" "}
				<a href="https://ec.europa.eu/newsroom/article29/items/612080">
					Member State data protection authority
				</a>{" "}
				or{" "}
				<a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
					UK data protection authority.
				</a>
			</p>
			<p>
				If you are located in Switzerland, you may contact the{" "}
				<a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
					Federal Data Protection and Information Commissioner.
				</a>
			</p>
			<p>
				<span className="bold" id="withdrawContent">
					Withdrawing your consent:{" "}
				</span>
				If we are relying on your consent to process your personal information,
				which may be express and/or implied consent depending on the applicable
				law, you have the right to withdraw your consent at any time. You can
				withdraw your consent at any time by contacting us by using the contact
				details provided in the section{" "}
				<GenLink
					props={{
						href: "#contact",
						label: "Navigate to Contact",
						isHighlighted: true,
					}}
				>
					&quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
				</GenLink>{" "}
				below.
			</p>
			<p>
				However, please note that this will not affect the lawfulness of the
				processing before its withdrawal nor, when applicable law allows, will
				it affect the processing of your personal information conducted in
				reliance on lawful processing grounds other than consent.
			</p>
			<p className="bold">Account Information </p>
			<p>
				If you would at any time like to review or change the information in
				your account or terminate your account, you can:
			</p>
			<ul>
				<li>Contact us using the contact information provided.</li>
				<li>Log in to your account settings and update your user account.</li>
			</ul>
			<p>
				Upon your request to terminate your account, we will deactivate or
				delete your account and information from our active databases. However,
				we may retain some information in our files to prevent fraud,
				troubleshoot problems, assist with any investigations, enforce our legal
				terms and/or comply with applicable legal requirements.
			</p>
			<p>
				<span className="bold">Cookies and similar technologies: </span>
				Most Web browsers are set to accept cookies by default. If you prefer,
				you can usually choose to set your browser to remove cookies and to
				reject cookies. If you choose to remove cookies or reject cookies, this
				could affect certain features or services of our Services. You may also{" "}
				<a href="https://optout.aboutads.info/?c=2&lang=EN">
					opt out of interest-based advertising by advertisers
				</a>{" "}
				on our Services.
			</p>
			<p>
				If you have questions or comments about your privacy rights, you may
				email us at alpha.coma.ict@gmail.com.
			</p>
		</>
	);
};

export default PrivacyPolicy10;
