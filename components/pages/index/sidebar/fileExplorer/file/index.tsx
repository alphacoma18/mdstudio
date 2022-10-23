import { memo, useContext, useEffect, useState } from "react";
import { DeleteFile } from "..";
import axios from "../../../../../../utils/axios";
import ContextIndex from "../../../../../../utils/context/index/index";
import { _ID } from "../../../../../../utils/db/account";
import styles from "./index.module.css";
interface Props {
	props: {
		_id: _ID;
		file_name: string;
		setDeleteFile: React.Dispatch<React.SetStateAction<DeleteFile>>;
		setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
	};
}
const File: React.FC<Props> = ({
	props: { _id, file_name, setDeleteFile, setShowDeleteModal },
}) => {
	const { files, setFiles, newFiles, setNewFiles, setCurrentFileId } =
		useContext(ContextIndex);
	const [isSelected, setIsSelected] = useState<boolean>(true);
	const [fileRename, setFileRename] = useState<string>(
		files[_id] ? files[_id].file_name : newFiles[_id].file_name
	);
	const isOnFiles = files[_id] ? true : false;
	useEffect(() => {
		if (newFiles[_id]) {
			setNewFiles((prev) => {
				const newFiles = { ...prev };
				newFiles[_id].file_name = fileRename;
				return newFiles;
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fileRename]);
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			delete newFiles[_id];
			setNewFiles({ ...newFiles });
			const regex = new RegExp(/^([a-zA-Z0-9]{1,55})(\.)(md|html)$/);
			if (!regex.test(fileRename)) throw "Invalid file name";
			const res = await axios.post(`/index/files/${_id}`, {
				file_name: fileRename,
			});
			setFiles(res.data.files);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<>
				{files[_id] ? (
					<button className={`icon-cog ${styles.deleteIcon}`}></button>
				) : (
					<button
						type="button"
						className={`icon-minus-squared ${styles.deleteIcon}`}
						onClick={() => {
							setDeleteFile({ _id, file_name });
							setShowDeleteModal(true);
						}}
					></button>
				)}
				<input
					type="text"
					className={styles.inputFileName}
					value={fileRename}
					onChange={(e) => setFileRename(e.currentTarget.value)}
					required
					readOnly={isOnFiles}
					autoFocus={isSelected}
					onBlur={() => setIsSelected(true)}
					minLength={5}
					maxLength={60}
					placeholder="untitled"
					pattern="^([a-zA-Z0-9]{1,55})(\.)(md|html)$"
				/>
			</>
		</form>
	);
};

export default memo(File);
