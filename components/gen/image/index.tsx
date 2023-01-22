import Image from "next/image";
export interface IImage {
	props: {
		src: string;
		height: number;
		width: number;
		alt: string;
		className?: string;
	};
}

const GenImage: React.FC<IImage> = ({ props }) => {
	return (
		<Image
			src={props.src}
			height={props.height}
			width={props.width}
			title={props.alt}
			alt={props.alt}
			className={props.className}
		/>
	);
};

export default GenImage;
