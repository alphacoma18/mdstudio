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
		<>
			{isLightTheme ? (
				<Image
					src={logoLight.src}
					height={logoLight.height}
					width={logoLight.width}
					alt={logoLight.alt}
				/>
			) : (
				<Image
					src={logoDark.src}
					height={logoDark.height}
					width={logoDark.width}
					alt={logoDark.alt}
				/>
			)}
		</>
	);
};

export default GenLogo;
