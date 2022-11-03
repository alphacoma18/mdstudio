import { MongooseAdapter } from "@choutkamartin/mongoose-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
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
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID!,
			clientSecret: process.env.FACEBOOK_SECRET!,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_ID!,
			clientSecret: process.env.LINKEDIN_SECRET!,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID!,
			clientSecret: process.env.TWITTER_SECRET!,
			version: "2.0",
		}),
		Auth0Provider({
			clientId: process.env.AUTH0_ID!,
			clientSecret: process.env.AUTH0_SECRET!,
			issuer: process.env.AUTH0_ISSUER,
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
