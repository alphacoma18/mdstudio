import { Suspense } from "react";
interface Props {
	fallback: string;
	children: React.ReactNode;
}
const GenSuspense: React.FC<Props> = ({ fallback, children }) => {
	return <Suspense fallback={<div>{fallback}</div>}>{children}</Suspense>;
};

export default GenSuspense;
