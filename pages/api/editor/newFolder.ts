import serverWrapper from "components/server/wrapper";
import GenError from "utils/gen/error";
interface IBody {
	id: string;
	path: string;
	folderName: string;
}
export default serverWrapper(async (req, res, session) => {
	const { id, path, folderName }: IBody = req.body;
	if (!session?.user.userId) throw new GenError("Unauthorized", 401);
	res.status(200).json({ message: "success" });
});
