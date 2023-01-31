import { useContext } from "react";
import GenImage, { IImage } from "..";
import ContextGlobal from "@/context/_global";
import styles from "./index.module.css";
interface Props {
	props: {
		isCircle?: boolean;
		height: IImage["props"]["height"];
		width: IImage["props"]["width"];
		className?: string;
	};
}
const GenProfilePicture: React.FC<Props> = ({ props }) => {
	const { session } = useContext(ContextGlobal);
	if (!session) return <i className="icon-user-circle"></i>;
	return (
		<GenImage
			props={{
				src: session.user.image,
				height: props.height,
				width: props.width,
				alt: `User: ${session.user.name}`,
				className: `${props.className} ${styles.profilePicture} ${
					props.isCircle ? styles.circled : ""
				}`,
			}}
		></GenImage>
	);
};
export default GenProfilePicture;
