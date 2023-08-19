import { createTransport } from "nodemailer";
interface MailerOptions {
	recipient: string;
	subject: string;
	html?: string;
}
export const serverDetails = {
	host: "smtp.markdownstudio.tech",
	port: 587,
	pool: true,
	tls: {
		rejectUnauthorized: false,
	},
	// DO NOT SET TO TRUE
	// https://nodemailer.com/smtp/ on secure: false,
	// secure: false,
	secure: false,
	auth: {
		user: "alpha@markdownstudio.tech",
		pass: "fD@WuCxo4",
	},
	from: `MD Studio Team <${process.env.EMAIL_USER}>`,
	opportunisticTLS: true,
	priority: "high",
	connectionTimeout: 10 * 60 * 1000, // 10 minutes
	greetingTimeout: 5 * 60 * 1000, // 5 minutes
} as const;

export default async function Mailer({
	recipient,
	subject,
	html,
}: MailerOptions) {
	try {
		const transporter = createTransport({
			host: "smtp.markdownstudio.tech",
			port: 587,
			pool: true,
			tls: {
				rejectUnauthorized: false,
			},
			// DO NOT SET TO TRUE
			// https://nodemailer.com/smtp/ on secure: false,
			// secure: false,
			secure: false,
			auth: {
				user: "alpha@markdownstudio.tech",
				pass: "fD@WuCxo4",
			},
			from: `MD Studio Team <${process.env.EMAIL_USER}>`,
			opportunisticTLS: true,
			priority: "high",
			connectionTimeout: 10 * 60 * 1000, // 10 minutes
			greetingTimeout: 5 * 60 * 1000, // 5 minutes
		});
		const info = await transporter.sendMail({
			to: recipient,
			subject,
			html,
		});
		console.log("Message sent: %s", info.response);
		if (info.rejected.length > 0) throw new Error("Email not sent");
	} catch (error) {
		console.error(error);
	}
}
