import { MongooseAdapter } from "@choutkamartin/mongoose-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { html } from "../../../types/email";

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers

	adapter: MongooseAdapter(process.env.MONGO_URI!),
	providers: [
		EmailProvider({
			server: {
				host: "smtp.gmail.com",
				secure: true,
				port: 465,
				auth: {
					user: process.env.EMAIL_USER!,
					pass: process.env.EMAIL_PASSWORD!,
				},
				from: process.env.EMAIL_FROM!,
			},
			sendVerificationRequest({
				identifier: email,
				url,
				provider: { server, from },
			}) {
				const nodemailer = require("nodemailer");
				const transporter = nodemailer.createTransport(server);
				return transporter.sendMail({
					from,
					to: email,
					subject: "Sign in to MyMD: Markdown Publisher",
					html: html({ url }),
				});
			},
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID!,
			clientSecret: process.env.FACEBOOK_SECRET!,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_ID!,
			clientSecret: process.env.LINKEDIN_SECRET!,
		}),
	],
	secret: process.env.JWT_SECRET,
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log("signIn", user, account, profile, email, credentials);
			return true;
		},
	},
};

export default NextAuth(authOptions);
