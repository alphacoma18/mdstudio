interface Params {
	url: string;
}
export default async function MailerHTMLSignup({ url }: Params) {
	return `
	<body
		style="
			padding: 0;
			margin: 0;
			display: flex;
			border-top: 3px solid #007acc;
			height: calc(100vh - 3px);
			line-height: 1.6rem;
		"
	>
		<div
			style="
				border: 3px solid #007acc;
				border-radius: 1.2rem;
				box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
				margin: auto;
				max-width: 500px;
				padding: 2rem;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
					Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			"
		>
			<img
				src=".../../../../../../public/logo/mymd_pc_logo_light.png"
				alt="MyMD Light Theme Desktop Logo"
				height="80"
				width="160"
				style="display: block; margin: auto"
			/>
			<h2 style="padding: 0; margin: 0; text-align: center">
				MyMD&nbsp;Markdown Editor&nbsp;Verify
			</h2>
			<hr
				style="
					background-color: #007acc;
					color: #007acc;
					margin: 1rem auto;
					width: 70%;
				"
			/>
			<p style="padding: 0; margin: 0">
				Thank you for signing up for MyMD Markdown Editor. Please click the link
				below to verify your email address.
			</p>
			<a
				href="${url}"
				style="
					display: block;
					text-decoration: none;
					border-radius: 0.6rem;
					border: var(--border-blue);
					box-sizing: content-box;
					padding: 0.2rem;
					text-align: center;
					margin: 0;
				"
				>Confirm Verification and Go to Site</a
			>
			<hr
				style="
					background: #007acc;
					color: #007acc;
					margin: 1rem auto;
					width: 70%;
				"
			/>
			<p style="padding: 0; margin: 0">
				If you did not sign up for MyMD Markdown Editor, please ignore this
				email.
			</p>
			<p style="padding: 0; margin: 0">
				From the MyMD Team [
				<a href="https://mymd.vercel.app">
					<img
						src=".../../../../../../public/logo/mymd_mobile_logo_light_2.png"
						width="25"
						height="25"
						alt="MyMD Light Theme Mobile Logo"
						style="vertical-align: middle"
				/></a>
				]
			</p>
		</div>
	</body>
   `;
}
