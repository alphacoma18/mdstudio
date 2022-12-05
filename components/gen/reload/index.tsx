import { useRouter } from "next/router";
interface Props {
	children: React.ReactNode;
}
const GenReload: React.FC<Props> = ({ children }) => {
	const router = useRouter();
	return (
		<button className="imageAnchor" onClick={() => router.reload()}>
			{children}
		</button>
	);
};

export default GenReload;
