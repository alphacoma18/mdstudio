import ContextGlobal from "@/context/_global";
import Image from "next/image";
import { useContext } from "react";
import { IImage } from "../image";
interface Props {
	light: IImage["props"];
	dark: IImage["props"];
}

const GenLogo: React.FC<Props> = ({ light, dark }) => {
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
