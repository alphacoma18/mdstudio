import GenLink from "@/components/gen/link";
import GenLogo from "@/components/gen/logo";
import { privacyPolicyAnchors } from "..";
import PrivacyPolicyDetails, { IPrivacyPolicyDetails } from "./details";
import styles from "./index.module.css";
const PrivacyPolicyHeader: React.FC = () => {
	return (
		<div className={styles.header}>
			<GenLogo
				props={{
					width: 64,
					height: 64,
					className: styles.logo,
				}}
				type="squareBlue"
			/>
			<span>
				<h1 className="textCenter">Markdown&nbsp;Studio Privacy&nbsp;Policy</h1>
				<p className="textCenter">Last updated April 23, 2023</p>
			</span>
			<hr />
			<p>
				This privacy notice for Coma Corporation{" "}
				<span className="note">
					(&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
					&quot;our&quot;)
				</span>
				, describes how and why we might collect, store, use, and/or share
				(&quot;process&quot;) your information when you use our services
				(&quot;Services&quot;), such as when you:
			</p>

			<ul>
				<li>
					Visit our website at{" "}
					<GenLink
						props={{
							href: "/",
							label: "Navigate to Markdown Studio website",
							isHighlighted: true,
						}}
					>
						https://markdownstudio.tech
					</GenLink>
					, or any website of ours that links to this privacy notice
				</li>
				<li>
					Download and use our mobile application (Markdown Studio), or any
					other application of ours that links to this privacy notice
				</li>
				<li>
					Engage with us in other related ways, including any sales, marketing,
					or events
				</li>
			</ul>

			<p>
				Questions or concerns? Reading this privacy notice will help you
				understand your privacy rights and choices. If you do not agree with our
				policies and practices, please do not use our Services. If you still
				have any questions or concerns, please contact us at{" "}
				<a
					href="mailto:alpha.coma.ict@gmail.com"
					className="anchor"
					target="_blank"
					rel="noreferrer"
				>
					alpha.coma.ict@gmail.com
				</a>
				.
			</p>
			<hr />
			<p className="bold">SUMMARY OF KEY POINTS</p>
			<p className="bold">
				This summary provides key points from our privacy notice, but you can
				find out more details about any of these topics by clicking the link
				following each key point or by using our{" "}
				<GenLink
					props={{
						href: "#toc",
						label: "Table of Contents",
						className: "anchor",
						isHighlighted: true,
					}}
				>
					table of contents
				</GenLink>{" "}
				below to find the section you are looking for.
			</p>
			{privacyPolicyDetails.map((detail) => {
				return (
					<PrivacyPolicyDetails key={detail.title} props={{ ...detail }} />
				);
			})}

			<p>
				Want to learn more about what Coma Corporation does with any information
				we collect?{" "}
				<GenLink
					props={{
						href: "#toc",
						label: "Navigate to Table of Contents",
						isHighlighted: true,
					}}
				>
					Review the privacy notice in full.
				</GenLink>
			</p>
			<hr />
			<p className="bold">TABLE OF CONTENTS</p>
			<ol id="toc">
				{privacyPolicyAnchors.map((anchor) => {
					return (
						<li key={anchor.id}>
							<GenLink
								props={{
									href: `#${anchor.id}`,
									label: `Navigate to ${anchor.title}`,
									isHighlighted: true,
								}}
							>
								{anchor.title}
							</GenLink>
						</li>
					);
				})}
			</ol>

			<hr />
		</div>
	);
};

export default PrivacyPolicyHeader;

const privacyPolicyDetails: IPrivacyPolicyDetails["props"][] = [
	{
		title: "What personal information do we process?",
		summary: (
			<>
				When you visit, use, or navigate our Services, we may process personal
				information depending on how you interact with Coma Corporation and the
				Services, the choices you make, and the products and features you use.
				Learn more about{" "}
				<GenLink
					props={{
						href: "#personalInfo",
						label: "Navigate to Personal Information",
						isHighlighted: true,
					}}
				>
					personal information you disclose to us.
				</GenLink>
			</>
		),
	},
	{
		title: "Do we receive any information from third parties?",
		summary: "We do not receive any information from third parties.",
	},
	{
		title: "How do we process your information?",
		summary: (
			<>
				We process your information to provide, improve, and administer our
				Services, communicate with you, for security and fraud prevention, and
				to comply with law. We may also process your information for other
				purposes with your consent. We process your information only when we
				have a valid legal reason to do so. Learn more about{" "}
				<GenLink
					props={{
						label: "Navigate to How we process your information",
						href: "#infoUse",
						isHighlighted: true,
					}}
				>
					how we process your information.
				</GenLink>
			</>
		),
	},
	{
		title:
			"In what situations and with which parties do we share personal information?",
		summary: (
			<>
				We may share information in specific situations and with specific third
				parties. Learn more about{" "}
				<GenLink
					props={{
						href: "#whoshare",
						label: "Navigate to Who we share your information with",
						isHighlighted: true,
					}}
				>
					when and with whom we share your personal information.
				</GenLink>
			</>
		),
	},
	{
		title: "How do we keep your information safe?",
		summary: (
			<>
				We have organizational and technical processes and procedures in place
				to protect your personal information. However, no electronic
				transmission over the internet or information storage technology can be
				guaranteed to be 100% secure, so we cannot promise or guarantee that
				hackers, cyber criminals, or other unauthorized third parties will not
				be able to defeat our security and improperly collect, access, steal, or
				modify your information. Learn more about{" "}
				<GenLink
					props={{
						href: "#infoSafe",
						label: "Navigate to How we keep your information safe",
						isHighlighted: true,
					}}
				>
					how we keep your information safe
				</GenLink>
				.
			</>
		),
	},
	{
		title: "What are your rights?",
		summary: (
			<>
				Depending on where you are located geographically, the applicable
				privacy law may mean you have certain rights regarding your personal
				information. Learn more about{" "}
				<GenLink
					props={{
						href: "#privacyRights",
						label: "Navigate to your privacy rights",
						isHighlighted: true,
					}}
				>
					your privacy rights.
				</GenLink>
			</>
		),
	},
	{
		title: "How do you exercise your rights? ",
		summary: (
			<>
				The easiest way to exercise your rights is by submitting a{" "}
				<a href="https://app.termly.io/notify/5a42962c-2cfd-4769-b68d-caa3981ff0de#">
					data subject access request
				</a>{" "}
				, or by contacting us. We will consider and act upon any request in
				accordance with applicable data protection laws.
			</>
		),
	},
];
