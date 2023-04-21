interface Params {
	url: string;
}
export default function html(params: Params) {
	const { url } = params;
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
			margin: auto;
			max-width: 500px;
			padding: 2rem;
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
				Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		"
	>
		<img
			src="${process.env.HOST_URL}/logo/square_blue.png"
			alt="Markdown Studio Logo"
			height="64"
			width="64"
			style="display: block; margin: auto; border-radius: 0.4rem"
		/>
		<h2 style="padding: 0; margin: 0; text-align: center">
			Markdown&nbsp;Studio&nbsp;Signin
		</h2>
		<hr
			style="background: #007acc; color: #007acc; margin: 1rem auto; width: 70%"
		/>
		<p style="padding: 0; margin: 0">
			Thank you for signing up for Markdown Studio. Kindly click the link below
			to start publishing!
		</p>

		<a
			href="${url}"
			style="
				display: block;
				text-decoration: none;
				border-radius: 0.6rem;
				font-weight: bold;
				box-sizing: content-box;
				padding: 0.2rem;
				text-align: center;
				margin: 0;
			"
			>Go to MD Studio - Link Start!</a
		>
		<hr
			style="background: #007acc; color: #007acc; margin: 1rem auto; width: 70%"
		/>
		<p style="padding: 0; margin: 0">
			If you did not sign up for Markdown Studio, please ignore this email.
		</p>
		<p style="padding: 0; margin: 0">From the MD Studio Team.</p>
		<p>Keep in touch with us:</p>
		<div style="font-weight: bold; text-align: center">
			<a
				href="https://markdownstudio.tech"
				alt="MD Studio Website"
				target="_blank"
				style="padding: 0 0.2rem"
			>
				Website
			</a>
			<a
				href="https://www.linkedin.com/company/markdown-studio/"
				alt="MD Studio LinkedIn"
				target="_blank"
				style="padding: 0 0.2rem"
			>
				LinkedIn
			</a>
			<a
				href="https://www.facebook.com/markdownstudio"
				alt="MD Studio Facebook"
				target="_blank"
				style="padding: 0 0.2rem"
			>
				Facebook
			</a>
		</div>
	</div>
</body>


`;
}
