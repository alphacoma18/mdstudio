import GenLink from "@/components/gen/link";

const PrivacyPolicy13: React.FC = () => {
	return (
		<>
			<p className="bold">Virginia CDPA Privacy Notice</p>
			<p>Under the Virginia Consumer Data Protection Act (CDPA):</p>
			<p>
				&quot;Consumer&quot; means a natural person who is a resident of the
				Commonwealth acting in an individual or household context. It does not
				include a natural person acting in a commercial or employment context.
			</p>
			<p>
				&quot;Personal data&quot; means any information that is linked or
				reasonably linkable to an identified or identifiable natural person.
				&quot;Personal data&quot; does not include de-identified data or
				publicly available information.
			</p>
			<p>
				&quot;Sale of personal data&quot; means the exchange of personal data
				for monetary consideration.
			</p>
			<p>
				If this definition &quot;consumer&quot; applies to you, we must adhere
				to certain rights and obligations regarding your personal data.
			</p>
			<p>
				The information we collect, use, and disclose about you will vary
				depending on how you interact with Coma Corporation and our Services. To
				find out more, please visit the following links:
			</p>
			<ul>
				<li>
					<GenLink
						props={{
							href: "#infoCollect",
							label: "Navigate to Information We Collect",
							isHighlighted: true,
						}}
					>
						Personal data we collect
					</GenLink>
				</li>
				<li>
					<GenLink
						props={{
							href: "#infoUse",
							label: "Navigate to How We Use Your Personal Data",
							isHighlighted: true,
						}}
					>
						How we use your personal data
					</GenLink>
				</li>
				<li>
					<GenLink
						props={{
							href: "#whoShare",
							label:
								"Navigate to When and with whom we share your personal data",
							isHighlighted: true,
						}}
					>
						When and with whom we share your personal data
					</GenLink>
				</li>
			</ul>
			<p className="underline">
				Your rights with respect to your personal data
			</p>
			<ul>
				<li>
					Right to be informed whether or not we are processing your personal
					data
				</li>
				<li>Right to access your personal data</li>
				<li>Right to correct inaccuracies in your personal data</li>
				<li>Right to request deletion of your personal data</li>
				<li>
					Right to obtain a copy of the personal data you previously shared with
					us
				</li>
				<li>
					Right to opt out of the processing of your personal data if it is used
					for targeted advertising, the sale of personal data, or profiling in
					furtherance of decisions that produce legal or similarly significant
					effects (&quot;profiling&quot;)
				</li>
			</ul>
			<p>
				Coma Corporation has not sold any personal data to third parties for
				business or commercial purposes. Coma Corporation will not sell personal
				data in the future belonging to website visitors, users, and other
				consumers.
			</p>
			<p className="underline">
				Exercise your rights provided under the Virginia CDPA
			</p>
			<p>
				More information about our data collection and sharing practices can be
				found in this privacy notice.
			</p>
			<p>
				You may contact us by email at alpha.coma.ict@gmail.com, by submitting a{" "}
				<a href="https://app.termly.io/notify/5a42962c-2cfd-4769-b68d-caa3981ff0de#">
					data subject access request
				</a>
				, or by referring to the contact details at the bottom of this document.
			</p>
			<p>
				If you are using an authorized agent to exercise your rights, we may
				deny a request if the authorized agent does not submit proof that they
				have been validly authorized to act on your behalf.
			</p>
			<p className="underline">Verification process</p>
			<p>
				We may request that you provide additional information reasonably
				necessary to verify you and your consumer&apos;s request. If you submit
				the request through an authorized agent, we may need to collect
				additional information to verify your identity before processing your
				request.
			</p>
			<p>
				Upon receiving your request, we will respond without undue delay, but in
				all cases, within forty-five (45) days of receipt. The response period
				may be extended once by forty-five (45) additional days when reasonably
				necessary. We will inform you of any such extension within the initial
				45-day response period, together with the reason for the extension.
			</p>
			<p className="underline">Right to appeal</p>
			<p>
				If we decline to take action regarding your request, we will inform you
				of our decision and reasoning behind it. If you wish to appeal our
				decision, please email us at alpha.coma.ict@gmail.com. Within sixty (60)
				days of receipt of an appeal, we will inform you in writing of any
				action taken or not taken in response to the appeal, including a written
				explanation of the reasons for the decisions. If your appeal if denied,
				you may contact the{" "}
				<a href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint">
					Attorney General to submit a complaint.
				</a>
			</p>
		</>
	);
};

export default PrivacyPolicy13;
