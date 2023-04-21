import ContextGlobal from "@/context/_global";
import GenLink from "@/gen/link";
import { useContext } from "react";
import GenImage, { IImage } from "..";
import styles from "./index.module.css";
interface Props {
	props: {
		isCircle?: boolean;
		height: IImage["props"]["height"];
		width: IImage["props"]["width"];
		className?: string;
	};
}
const GenProfilePicture: React.FC<Props> = ({
	props: { isCircle, height, width, className },
}) => {
	const { session } = useContext(ContextGlobal);
	if (!session)
		return (
			<GenLink
				props={{
					href: "/auth/signin",
					label: "Sign in",
				}}
			>
				<i className="icon-user-circle"></i>
			</GenLink>
		);
	return (
		<GenImage
			props={{
				src: session.user.image,
				height: height,
				width: width,
				alt: `User: ${session.user.name}`,
				className: `${styles.profilePicture} ${
					isCircle ? styles.circled : ""
				} ${className ? className : ""}`,
			}}
		></GenImage>
	);
};
export default GenProfilePicture;
