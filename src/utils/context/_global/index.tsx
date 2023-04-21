import useDarkMode from "@/utils/hooks/useDarkMode";
import useDeviceType from "@/utils/hooks/useDeviceType";
import { useSession } from "next-auth/react";
import { ReactNode, createContext } from "react";
import Theme from "@/styles/themes";
import { IContextGlobal } from "./type";
const ContextGlobal = createContext<IContextGlobal>({} as IContextGlobal);
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const { data: session } = useSession();
	const [isLightTheme, setIsLightTheme] = useDarkMode();
	const device = useDeviceType();
	return (
		<ContextGlobal.Provider
			value={{
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
