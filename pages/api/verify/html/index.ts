interface Params {
	username: string;
}
export default async function MailerHTMLVerifyComplete({ username }: Params) {
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
				src=".../../../../../../public/logo/anymd_pc_logo_light.png"
				alt="AnyMD Light Theme Desktop Logo"
				height="80"
				width="160"
				style="display: block; margin: auto"
			/>
			<h2 style="padding: 0; margin: 0; text-align: center">
				Verification Complete!
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
            Hi ${username}, your email address has been verified. You can now log in to AnyMD Markdown Publisher.
            </p>
			<a
				href="http://localhost:3000/login"
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
				>Go to Site and Login</a
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
                Thank you for using AnyMD Markdown Publisher!
			</p>
			<p style="padding: 0; margin: 0">
				From the AnyMD Team [
				<a href="https://anymd.vercel.app">
					<img
						src=".../../../../../../public/logo/anymd_mobile_logo_light_2.png"
						width="25"
						height="25"
						alt="AnyMD Light Theme Mobile Logo"
						style="vertical-align: middle"
				/></a>
				]
			</p>
		</div>
	</body>
  `;
}
