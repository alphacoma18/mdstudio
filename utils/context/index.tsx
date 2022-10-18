import React, { useEffect, useState } from "react";
import Theme from "../../styles/themes";
import { FileSchema } from "../db/account";
import { IGlobalContext, NewFileSchema, User } from "./interface";

const GlobalContext = React.createContext<IGlobalContext>({
	isLightTheme: true,
	handleTheme() {},
	user: {} as User,
	setUser() {},
	files: {},
	setFiles() {},
	newFiles: {},
	setNewFiles() {},
});
export default GlobalContext;

interface Props {
	children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		if (typeof window !== "undefined") {
			const theme = localStorage.getItem("theme-preference");
			if (theme === "light") return true;
			return false;
		}
		return true;
	});

	function handleTheme() {
		setIsLightTheme((prev) => !prev);
	}
	useEffect(() => {
		if (isLightTheme) return localStorage.setItem("theme-preference", "light");
		if (!isLightTheme) return localStorage.setItem("theme-preference", "dark");
	}, [isLightTheme]);

	const [user, setUser] = useState<User>({} as User);
	const [files, setFiles] = useState<FileSchema>({});
	const [newFiles, setNewFiles] = useState<NewFileSchema>({});
	return (
		<GlobalContext.Provider
			value={{
				isLightTheme,
				handleTheme,
				user,
				setUser,
				files,
				setFiles,
				newFiles,
				setNewFiles,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</GlobalContext.Provider>
	);
};
