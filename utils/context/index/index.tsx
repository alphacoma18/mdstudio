import { ReactNode, createContext, useEffect, useState } from "react";
import { IContextIndex } from "./type";
const ContextIndex = createContext<IContextIndex>({
	projects: [] as IContextIndex["projects"],
	handleProjects: () => {
		return;
	},
});
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
	useEffect(() => {
		console.log(projects);
	}, [projects]);
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
