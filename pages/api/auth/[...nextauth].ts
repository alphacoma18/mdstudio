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
import DB_PROJECTS from "../../../utils/db/account";

export const authOptions: NextAuthOptions = {
	adapter: MongooseAdapter(process.env.MONGO_URI as string),
	providers: [
		EmailProvider({
			server: {
				host: "smtp.gmail.com",
				secure: true,
				port: 465,
				auth: {
					user: process.env.EMAIL_USER as string,
					pass: process.env.EMAIL_PASSWORD as string,
				},
				from: process.env.EMAIL_FROM as string,
			},
			sendVerificationRequest({
				identifier: email,
				url,
				provider: { server, from },
			}) {
				// eslint-disable-next-line unicorn/prefer-module
				const nodemailer = require("nodemailer");
				const transporter = nodemailer.createTransport(server);
				return transporter.sendMail({
					from,
					to: email,
					subject: "Sign in to AnyMD: Markdown Publisher",
					html: html({ url }),
				});
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID as string,
			clientSecret: process.env.FACEBOOK_SECRET as string,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_ID as string,
			clientSecret: process.env.LINKEDIN_SECRET as string,
			token: {
				url: "https://www.linkedin.com/oauth/v2/accessToken",
				async request({ client, params, checks, provider }) {
					const response = await client.oauthCallback(
						provider.callbackUrl,
						params,
						checks,
						{
							exchangeBody: {
								client_id: process.env.LINKEDIN_ID as string,
								client_secret: process.env.LINKEDIN_SECRET as string,
							},
						}
					);
					return {
						tokens: response,
					};
				},
			},
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID as string,
			clientSecret: process.env.TWITTER_SECRET as string,
			version: "2.0",
		}),
		Auth0Provider({
			clientId: process.env.AUTH0_ID as string,
			clientSecret: process.env.AUTH0_SECRET as string,
			issuer: process.env.AUTH0_ISSUER,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	events: {
		async signIn({ user, account, profile, isNewUser }) {
			if (isNewUser === false) return;
			const { id } = user;
			await DB_PROJECTS.create({ id, projects: [] });
			console.log("New user signed in", id);
		},
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log("signIn", user, account, profile, email, credentials);
			return true;
		},
		async redirect({ url, baseUrl }) {
			// console.log("redirect", url, baseUrl);
			return baseUrl;
		},
		async session({ session, token, user }) {
			// console.log("session", session, token, user);
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			// console.log("jwt", token, user, account, profile, isNewUser);
			return token;
		},
	},
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		// error: "/auth/error",
		// verifyRequest: "/auth/verify-request",
		// newUser: "/auth/new-user",
	},
	theme: {
		colorScheme: "auto",
		brandColor: "#1a2632",
		logo: "http://localhost:3000/android-chrome-256x256.png",
		buttonText: "#007acc",
	},
	// debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
