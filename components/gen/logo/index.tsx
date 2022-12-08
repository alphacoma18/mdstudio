import Image from "next/image";
import { useContext } from "react";
import ContextGlobal from "../../../utils/context/_global";
interface Image {
	src: string;
	height: number;
	width: number;
	alt: string;
}
interface Props {
	logoLight: Image;
	logoDark: Image;
}

const GenLogo: React.FC<Props> = ({ logoLight, logoDark }) => {
	const { isLightTheme } = useContext(ContextGlobal);
	return (
		<Image
			src={isLightTheme ? logoLight.src : logoDark.src}
			height={isLightTheme ? logoLight.height : logoDark.height}
			width={isLightTheme ? logoLight.width : logoDark.width}
			alt={isLightTheme ? logoLight.alt : logoDark.alt}
		/>
	);
};

export default GenLogo;
