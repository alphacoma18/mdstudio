import Head from "next/head";
interface Props {
	props: {
		title: string;
		description: string;
		// icon?: string;
		// image?: string;
	};
}
const GenMeta: React.FC<Props> = ({ props }) => {
	const { title, description } = props;
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	);
};

export default GenMeta;
