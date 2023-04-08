import { useSession } from "next-auth/react";
import { ReactNode, createContext } from "react";
import useDarkMode from "utils/hooks/useDarkMode";
import useDeviceType from "utils/hooks/useDeviceType";
import Theme from "../../../styles/themes";
import { IContextGlobal } from "./type";
const ContextGlobal = createContext<IContextGlobal>({} as IContextGlobal);
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const url: IContextGlobal["url"] = {
		client: "https://markdownstudio.tech",
		server: "https://markdownstudio.tech/api",
	};
	const { data: session } = useSession();

	// const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
	// 	if (typeof window === "undefined") return true;
	// 	const themePreference = window.localStorage.getItem("theme-preference");
	// 	if (themePreference === "light") return true;
	// 	if (themePreference === "dark") return false;
	// 	return false;
	// });
	const [isLightTheme, setIsLightTheme] = useDarkMode();
	const device = useDeviceType();
	return (
		<ContextGlobal.Provider
			value={{
				url,
				session,
				isLightTheme,
				setIsLightTheme,
				device,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</ContextGlobal.Provider>
	);
};
