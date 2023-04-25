import Link from "next/link";
type TLink = `/${string}` | `#${string}`;
export interface ILink {
	props: {
		href: TLink;
		label: string;
		className?: string;
		isHighlighted?: boolean;
	};
	children: React.ReactNode;
}
const GenLink: React.FC<ILink> = ({ children, props }) => {
	const { href, label, className, isHighlighted } = props;
	return (
		<Link
			href={href}
			title={label}
			hrefLang="en-us"
			aria-label={label}
			className={`${className ?? ""} ${isHighlighted ? "highlight" : ""}`}
		>
			{children}
		</Link>
	);
};
export default GenLink;
