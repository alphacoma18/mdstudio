import Image from "next/image";
import { useContext } from "react";
import ContextGlobal from "../../../utils/context";
interface Image {
	src: string;
	height: number;
	width: number;
	alt: string;
}
interface Props {
	imageLight: Image;
	imageDark: Image;
}

const GenImage: React.FC<Props> = ({ imageLight, imageDark }) => {
	const { isLightTheme } = useContext(ContextGlobal);
	return (
		<>
			{isLightTheme ? (
				<Image
					src={imageLight.src}
					height={imageLight.height}
					width={imageLight.width}
					alt={imageLight.alt}
				/>
			) : (
				<Image
					src={imageDark.src}
					height={imageDark.height}
					width={imageDark.width}
					alt={imageDark.alt}
				/>
			)}
		</>
	);
};

export default GenImage;
