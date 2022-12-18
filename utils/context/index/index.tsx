import { ReactNode, createContext, useState } from "react";
import { IContextIndex } from "./type";
const ContextIndex = createContext<IContextIndex>({
	projects: [] as unknown as IContextIndex["projects"],
	setProjects: () => {
		return {};
	},
});
export default ContextIndex;
interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	const [projects, setProjects] = useState<IContextIndex["projects"]>(
		[] as unknown as IContextIndex["projects"]
	);
	return (
		<ContextIndex.Provider
			value={{
				projects,
				setProjects,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
