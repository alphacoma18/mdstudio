import Link from "next/link";
interface Props {
	props: {
		href: string;
		label: string;
		className?: string;
	};
	children: React.ReactNode;
}
const GenLink: React.FC<Props> = ({ children, props }) => {
	const { href, label, className } = props;
	return (
		<Link
			href={href}
			title={label}
			hrefLang="en-us"
			aria-label={label}
			className={className}
		>
			{children}
		</Link>
	);
};
export default GenLink;
