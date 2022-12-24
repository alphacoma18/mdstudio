import { ReactNode, createContext, useState } from "react";
import { IContextIndex } from "./type";
const ContextIndex = createContext<IContextIndex>({} as IContextIndex);
export default ContextIndex;
interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	const [projects, setProjects] = useState<IContextIndex["projects"]>(
		[] as IContextIndex["projects"]
	);
	function handleProjects(_projects: IContextIndex["projects"]) {
		setProjects(_projects);
	}
	return (
		<ContextIndex.Provider
			value={{
				projects,
				handleProjects,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
