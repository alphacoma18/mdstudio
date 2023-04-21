import ContextGlobal from "@/context/_global";
import GenLink from "@/gen/link";
import { OmitNest } from "@/utils/omit";
import { useContext } from "react";
import GenImage, { IImage } from "..";
import styles from "./index.module.css";
type Props = OmitNest<
	IImage,
	{
		props: Omit<IImage["props"], "src" | "alt">;
		isCircle?: boolean;
	}
>;

const GenProfilePicture: React.FC<Props> = ({
	props: { height, width, className },
	isCircle,
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
		<>
			{session.user.image ? (
				<GenImage
					props={{
						src: session.user.image,
						height,
						width,
						alt: `User: ${session.user.name}`,
						className: `${styles.profilePicture} ${
							isCircle ? styles.circled : ""
						} ${(className ??= "")}`,
					}}
				></GenImage>
			) : (
				<i className="Eicon-user-circle"></i>
			)}
		</>
	);
};
export default GenProfilePicture;
