import { ReactNode, createContext, useState } from "react";
import { IContextDashboard } from "./type";
const ContextDashboard = createContext<IContextDashboard>(
	{} as IContextDashboard
);
export default ContextDashboard;
interface Props {
	children: ReactNode;
}
export const ContextProviderDashboard: React.FC<Props> = ({ children }) => {
	const [projects, setProjects] = useState<IContextDashboard["projects"]>(
		[] as IContextDashboard["projects"]
	);
	return (
		<ContextDashboard.Provider
			value={{
				projects,
				setProjects,
			}}
		>
			{children}
		</ContextDashboard.Provider>
	);
};
