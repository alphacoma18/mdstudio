import nodeMailer from "nodemailer";
interface MailerOptions {
	recipient: string;
	subject: string;
	text?: string;
	html?: string;
}
export default async function Mailer({
	recipient,
	subject,
	text,
	html,
}: MailerOptions) {
	try {
		const transporter = nodeMailer.createTransport({
			host: "smtp.gmail.com",
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
		const info = await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: recipient,
			subject,
			text,
			html,
		});
		if (info.rejected.length > 0) throw new Error("Email not sent");
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
