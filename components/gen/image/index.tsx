import Image from "next/image";

interface Props {
	src: string;
	height: number;
	width: number;
	alt: string;
}

const GenImage: React.FC<Props> = ({ src, height, width, alt }) => {
	return (
		<Image
			src={src}
			height={height}
			width={width}
			alt={alt}
			title={alt}
			lang="en"
		/>
	);
};

export default GenImage;
