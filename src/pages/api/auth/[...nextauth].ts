import db_projects, { mongooseId } from "@/db/projects/flat";
import clientPromise from "@/db/projects/mongo";
import Mailer, { serverDetails } from "@/utils/mailer";
import emailSignin from "@/utils/mailer/templates/signin";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
export const authOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		EmailProvider({
			server: serverDetails,
			from: serverDetails.from,
			async sendVerificationRequest({ identifier: emailAddr, url }) {
				await Mailer({
					recipient: emailAddr,
					subject: "Sign in to Markdown Studio",
					html: emailSignin({ url }),
				});
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
						},
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
		async signIn({ user, isNewUser }) {
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
		async signIn() {
			return true;
		},
		async redirect({ baseUrl }) {
			return baseUrl;
		},
		async session({ session, user }) {
			session.user.userId = user.id;
			return session;
		},
		async jwt({ token }) {
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
		brandColor: "#007acc",
		logo: `${process.env.HOST_URL}/android-chrome-256x256.png`,
		buttonText: "#007acc",
	},
	debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
