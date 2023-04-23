namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		MONGO_URI: string;
		EMAIL_SERVER_HOST: string;
		EMAIL_SERVER_PORT: string;
		EMAIL_USER: string;
		EMAIL_PASSWORD: string;

		GOOGLE_ID: string;
		GOOGLE_SECRET: string;
		GITHUB_ID: string;
		GITHUB_SECRET: string;
		FACEBOOK_ID: string;
		FACEBOOK_SECRET: string;
		LINKEDIN_ID: string;
		LINKEDIN_SECRET: string;

		TWITTER_ID: string;
		TWITTER_SECRET: string;
		TWITTER_BEARER_TOKEN: string;
		AUTH0_ID: string;
		AUTH0_SECRET: string;
		AUTH0_ISSUER: string;

		CLOUDINARY_CLOUD_NAME: string;
		CLOUDINARY_API_KEY: string;
		CLOUDINARY_API_SECRET: string;

		NEXTAUTH_URL: string;
		NEXTAUTH_SECRET: string;
		AUTH_TRUST_HOST: boolean;

		HOST_URL: string;
		API_URL: string;
		MIN_NOT_EMPTY_STRING_LENGTH: string;
		MAX_FILE_NAME_LENGTH: string;
		MAX_PROJECT_NAME_LENGTH: string;
		MAX_PROJECT_DESCRIPTION_LENGTH: string;
		AUTO_SAVE_INTERVAL: string;
	}
}
