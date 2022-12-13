import Image from "next/image";
import { useContext } from "react";
import ContextGlobal from "../../../utils/context/_global";
// interface IImage {
// 	src: string;
// 	height: number;
// 	width: number;
// 	alt: string;
// }
import { IImage } from "../image";
interface Props {
	logoLight: IImage;
	logoDark: IImage;
}

const GenLogo: React.FC<Props> = ({
	logoLight: { props: light },
	logoDark: { props: dark },
}) => {
	const { isLightTheme } = useContext(ContextGlobal);
	return (
		<Image
			src={isLightTheme ? light.src : dark.src}
			height={isLightTheme ? light.height : dark.height}
			width={isLightTheme ? light.width : dark.width}
			alt={isLightTheme ? light.alt : dark.alt}
		/>
	);
};

export default GenLogo;
