import { _ID } from "../../db/account";
export interface User {
	_id: _ID;
	username: string;
}
export interface IContextGlobal {
	isLightTheme: boolean;
	handleTheme: () => void;
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
}
