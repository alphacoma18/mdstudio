import ContextGlobal from "@/context/_global";
import ContextEditor from "@/context/editor";
import { TFile } from "@/db/projects/flat";
import { ITreeFolder } from "@/db/projects/tree";
import GenButton from "@/gen/button";
import { useContext } from "react";
import styles from "../index.module.css";
import EditorFSOptions from "../options";
interface Props {
	props: {
		files: TFile[];
		folder: ITreeFolder;
		parent: string;
		currPath: string;
		handleToggle(): void;
	};
}
const EditorFile: React.FC<Props> = ({
	props: { files, folder, parent: prev, currPath, handleToggle },
}) => {
	const {
		device: { isHandheld },
	} = useContext(ContextGlobal);
	const { setEditorState, updateBarState } = useContext(ContextEditor);
	return (
		<>
			{files?.map((file) => (
				<GenButton
					key={`file-${file.fileName}`}
					props={{
						label: `File: ${file.fileName}`,
						className: styles.rootFile,
						onClick: () => {
							setEditorState({
								id: file._id.toString(),
								name: file.fileName,
								pid: folder._id.toString(),
								path: `${prev}/${currPath}`,
							});
							if (isHandheld) updateBarState({ type: "explorerClose" });
						},
					}}
				>
					<i className="icon-doc-text"></i>
					{file.fileName}
					<EditorFSOptions
						props={{
							handleToggle,
						}}
					/>
				</GenButton>
			))}
		</>
	);
};

export default EditorFile;
