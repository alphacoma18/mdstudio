import Image from "next/image";
import { OmitNest } from "utils/omit";
import { IImage } from "../image";

type Props = OmitNest<
	IImage,
	{
		props: Omit<IImage["props"], "src" | "alt">;
	}
>;

const logos = {
	squareBlue: {
		src: "/apple-touch-icon-180x180-precomposed.png",
		alt: "Markdown Studio Blue Square Logo",
	},
	squareClear: {
		src: "/logo/square_clear.png",
		alt: "Markdown Studio Clear Square Logo",
	},
	wideClear: {
		src: "/logo/og_clear.png",
		alt: "Markdown Studio Wide Logo",
	},
	wideBlue: {
		src: "/logo/og_blue.png",
		alt: "Markdown Studio Wide Logo",
	},
};

type LogoType = keyof typeof logos;
interface LogoProps {
	type: LogoType;
}

const GenLogo: React.FC<Props & LogoProps> = ({ props, type }) => {
	const { height, width, className } = props;
	const { src, alt } = logos[type];
	return (
		<Image
			src={src}
			height={height}
			width={width}
			title={alt}
			alt={alt}
			className={className}
		/>
	);
};

export default GenLogo;
