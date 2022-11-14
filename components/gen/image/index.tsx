import Image from "next/future/image";
interface Image {
	props: {
		src: string;
		height: number;
		width: number;
		alt: string;
		className?: string;
	};
}

const GenImage: React.FC<Image> = ({ props }) => {
	return (
		<>
			<Image
				src={props.src}
				height={props.height}
				width={props.width}
				title={props.alt}
				alt={props.alt}
				className={props.className}
			/>
		</>
	);
};

export default GenImage;
