import { Fragment } from "react";
interface Props {
	children: React.ReactNode;
	key: string;
}

const GenFragment: React.FC<Props> = ({ children, key }) => {
	return <Fragment key={key}>{children}</Fragment>;
};

export default GenFragment;
