import PrivacyPolicy1 from "@/components/pages/privacy-policy/1";
import PrivacyPolicy10 from "@/components/pages/privacy-policy/10";
import PrivacyPolicy11 from "@/components/pages/privacy-policy/11";
import PrivacyPolicy12 from "@/components/pages/privacy-policy/12";
import PrivacyPolicy13 from "@/components/pages/privacy-policy/13";
import PrivacyPolicy14 from "@/components/pages/privacy-policy/14";
import PrivacyPolicy15 from "@/components/pages/privacy-policy/15";
import PrivacyPolicy16 from "@/components/pages/privacy-policy/16";
import PrivacyPolicy2 from "@/components/pages/privacy-policy/2";
import PrivacyPolicy3 from "@/components/pages/privacy-policy/3";
import PrivacyPolicy4 from "@/components/pages/privacy-policy/4";
import PrivacyPolicy5 from "@/components/pages/privacy-policy/5";
import PrivacyPolicy6 from "@/components/pages/privacy-policy/6";
import PrivacyPolicy7 from "@/components/pages/privacy-policy/7";
import PrivacyPolicy8 from "@/components/pages/privacy-policy/8";
import PrivacyPolicy9 from "@/components/pages/privacy-policy/9";
import PrivacyPolicyWrapper from "./_wrapper";
interface Props {
	id: string;
	title: string;
	summary?: string;
	children: React.ReactNode;
}
const sectionList: Props[] = [
	{
		id: "infoCollect",
		title: "WHAT INFORMATION DO WE COLLECT?",
		children: <PrivacyPolicy1 />,
	},
	{
		id: "infoUse",
		title: "HOW DO WE PROCESS YOUR INFORMATION?",
		children: <PrivacyPolicy2 />,
		summary:
			"We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.",
	},
	{
		id: "legalBases",
		title:
			"WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
		children: <PrivacyPolicy3 />,
		summary:
			"We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.",
	},
	{
		id: "whoShare",
		title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
		children: <PrivacyPolicy4 />,
		summary:
			"We may share information in specific situations described in this section and/or with the following third parties.",
	},
	{
		id: "cookies",
		title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
		children: <PrivacyPolicy5 />,
		summary:
			"We may use cookies and other tracking technologies to collect and store your information.",
	},
	{
		id: "socialLogins",
		title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
		children: <PrivacyPolicy6 />,
		summary:
			"If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.",
	},
	{
		id: "intlTransfers",
		title: "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
		children: <PrivacyPolicy7 />,
		summary:
			"We may transfer, store, and process your information in countries other than your own.",
	},
	{
		id: "infoRetain",
		title: "HOW LONG DO WE KEEP YOUR INFORMATION?",
		children: <PrivacyPolicy8 />,
		summary:
			"We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.",
	},
	{
		id: "infoSafe",
		title: "HOW DO WE KEEP YOUR INFORMATION SAFE?",
		children: <PrivacyPolicy9 />,
		summary:
			"We aim to protect your personal information through a system of organizational and technical security measures.",
	},
	{
		id: "privacyRights",
		title: "WHAT ARE YOUR PRIVACY RIGHTS?",
		children: <PrivacyPolicy10 />,
		summary:
			"In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.",
	},
	{
		id: "DNT",
		title: "CONTROLS FOR DO-NOT-TRACK FEATURES",
		children: <PrivacyPolicy11 />,
	},
	{
		id: "caResidents",
		title: "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
		children: <PrivacyPolicy12 />,
		summary:
			"Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.",
	},
	{
		id: "virginia",
		title: "DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
		children: <PrivacyPolicy13 />,
		summary:
			"Yes, if you are a resident of Virginia, you may be granted specific rights regarding access to and use of your personal information.",
	},
	{
		id: "policyUpdates",
		title: "DO WE MAKE UPDATES TO THIS NOTICE?",
		children: <PrivacyPolicy14 />,
		summary:
			"Yes, we will update this notice as necessary to stay compliant with relevant laws.",
	},
	{
		id: "contact",
		title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
		children: <PrivacyPolicy15 />,
	},
	{
		id: "request",
		title:
			"HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
		children: <PrivacyPolicy16 />,
	},
];

const PrivacyPolicyBody: React.FC = () => {
	return (
		<>
			{sectionList.map((section) => {
				return (
					<PrivacyPolicyWrapper
						key={section.id}
						props={{
							id: section.id,
							title: section.title,
							summary: section.summary,
						}}
					>
						{section.children}
					</PrivacyPolicyWrapper>
				);
			})}
		</>
	);
};

export default PrivacyPolicyBody;

const privacyPolicyAnchors = sectionList.map((section) => {
	return {
		id: section.id,
		title: section.title,
	};
});

export { privacyPolicyAnchors };
