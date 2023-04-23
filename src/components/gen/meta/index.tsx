import Head from "next/head";
import { useRouter } from "next/router";
interface Props {
	props: {
		title: string;
		description: string;
		// icon?: string;
		// image?: string;
	};
}
const GenMeta: React.FC<Props> = ({ props }) => {
	const { asPath: url } = useRouter();
	let { title } = props;
	const { description } = props;
	title += " | Markdown Studio";
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:url" content={url} />
		</Head>
	);
};

export default GenMeta;
