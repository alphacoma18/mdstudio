import GenLink from "@/components/gen/link";
import PrivacyPolicySummary from "../_summary";
const PrivacyPolicy1: React.FC = () => {
	return (
		<>
			<p className="bold">Personal information you disclose to us</p>
			<PrivacyPolicySummary summary="We collect personal information that you provide to us" />
			<p>
				We collect personal information that you voluntarily provide to us when
				you register on the Services, express an interest in obtaining
				information about us or our products and Services, when you participate
				in activities on the Services, or otherwise when you contact us.
			</p>

			<p>
				<span className="bold">Personal Information Provided by You.</span> The
				personal information that we collect depends on the context of your
				interactions with us and the Services, the choices you make, and the
				products and features you use. The personal information we collect may
				include the following:
			</p>
			<ul>
				<li>names</li>
				<li>email addresses</li>
				<li>usernames</li>
			</ul>
			<p>
				<span className="bold">Sensitive Information. </span> We do not process
				sensitive information.
			</p>

			<p>
				<span className="bold">Social Media Login Data. </span>
				We may provide you with the option to register with us using your
				existing social media account details, like your Facebook, Twitter, or
				other social media account. If you choose to register in this way, we
				will collect the information described in the section called{" "}
				<GenLink
					props={{
						href: "#socialLogins",
						label: "Navigate to Social Logins",
						isHighlighted: true,
					}}
				>
					&quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;
				</GenLink>{" "}
				below.
			</p>

			<p>
				All personal information that you provide to us must be true, complete,
				and accurate, and you must notify us of any changes to such personal
				information.
			</p>

			<p className="bold">Information automatically collected</p>
			<PrivacyPolicySummary summary="Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services." />

			<p>
				We automatically collect certain information when you visit, use, or
				navigate the Services. This information does not reveal your specific
				identity (like your name or contact information) but may include device
				and usage information, such as your IP address, browser and device
				characteristics, operating system, language preferences, referring URLs,
				device name, country, location, information about how and when you use
				our Services, and other technical information. This information is
				primarily needed to maintain the security and operation of our Services,
				and for our internal analytics and reporting purposes.
			</p>

			<p>
				Like many businesses, we also collect information through cookies and
				similar technologies.
			</p>

			<p>The information we collect includes:</p>
			<ul>
				<li>
					<span className="italic">Log and Usage Data. </span>
					Log and usage data is service-related, diagnostic, usage, and
					performance information our servers automatically collect when you
					access or use our Services and which we record in log files. Depending
					on how you interact with us, this log data may include your IP
					address, device information, browser type, and settings and
					information about your activity in the Services (such as the date/time
					stamps associated with your usage, pages and files viewed, searches,
					and other actions you take such as which features you use), device
					event information (such as system activity, error reports (sometimes
					called &quot;crash dumps&quot;), and hardware settings).
				</li>
			</ul>
		</>
	);
};

export default PrivacyPolicy1;
