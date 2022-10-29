import { signOut } from "next-auth/react";

const SignOut = () => {
	return (
		<div>
			<button onClick={() => signOut()}>Sign Out</button>
		</div>
	);
};
export default SignOut;
