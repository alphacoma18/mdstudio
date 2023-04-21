import db_projects, { mongooseId } from "@/db/projects/flat";
import clientPromise from "@/db/projects/mongo";
import html from "@/utils/mailer/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import nodeMailer from "nodemailer";
export const authOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		EmailProvider({
			server: {
				name: process.env.HOST_URL,
				host: process.env.EMAIL_SERVER_HOST,
				port: +process.env.EMAIL_SERVER_PORT,
				// DO NOT SET TO TRUE
				// https://nodemailer.com/smtp/ on secure: false,
				secure: false,
				auth: {
					user: process.env.EMAIL_USER,
					pass: process.env.EMAIL_PASSWORD,
				},
				from: process.env.EMAIL_USER,
				opportunisticTLS: true,
				requireTLS: true,
				priority: "high",
				connectionTimeout: 5 * 60 * 1000,
				greetingTimeout: 5 * 60 * 1000,
			},
			from: `MD Studio Team <${process.env.EMAIL_USER}>`,
			sendVerificationRequest({
				identifier: email,
				url,
				provider: { server, from },
			}) {
				(async () => {
					console.log("Sending email to", email, "with url", url, "from", from);

					const transporter = nodeMailer.createTransport(server);
					return await transporter.sendMail({
						from,
						to: email,
						subject: "Sign in to Markdown Studio",
						html: html({ url }),
					});
				})();
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_ID,
			clientSecret: process.env.LINKEDIN_SECRET,
			token: {
				url: "https://www.linkedin.com/oauth/v2/accessToken",
				async request({ client, params, checks, provider }) {
					const response = await client.oauthCallback(
						provider.callbackUrl,
						params,
						checks,
						{
							exchangeBody: {
								client_id: process.env.LINKEDIN_ID,
								client_secret: process.env.LINKEDIN_SECRET,
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
			clientId: process.env.TWITTER_ID,
			clientSecret: process.env.TWITTER_SECRET,
			version: "2.0",
		}),
		Auth0Provider({
			clientId: process.env.AUTH0_ID,
			clientSecret: process.env.AUTH0_SECRET,
			issuer: process.env.AUTH0_ISSUER,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	events: {
		async signIn({ user, account, profile, isNewUser }) {
			try {
				if (!isNewUser) return;
				const { id } = user;
				await db_projects.create({ userId: mongooseId(id), projects: [] });
			} catch (error) {
				console.error(error);
			}
		},
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, token, user }) {
			session.user.userId = user.id;
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
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
		logo: `${process.env.HOST_URL}/android-chrome-256x256.png`,
		buttonText: "#007acc",
	},
	debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
