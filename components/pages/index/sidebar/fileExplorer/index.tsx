import { memo, useContext, useState } from "react";
import axios from "../../../../../utils/axios";
import ContextIndex from "../../../../../utils/context/index/index";
import { _ID } from "../../../../../utils/db/account";
import GenModalDelete from "../../../../gen/modals/delete";
import File from "./file";
import styles from "./index.module.css";
export interface DeleteFile {
	_id: _ID;
	file_name: string;
}
const FileExplorer: React.FC = () => {
	const { files, newFiles, setFiles, setNewFiles } = useContext(ContextIndex);
	const [addFile, setAddFile] = useState<number>(0);
	const [deleteFile, setDeleteFile] = useState<DeleteFile>({} as DeleteFile);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
	async function handleFileRefresh() {
		try {
			const res = await axios.get("/index/files/0");
			setFiles(res.data.files);
		} catch (error) {
			console.error(error);
		}
	}

	function handleFileDeleteCancel() {
		setShowDeleteModal((prev) => !prev);
	}
	function handleNewFile() {
		setAddFile((prev) => prev + 1);
		setNewFiles((prev) => {
			return {
				...prev,
				[addFile]: {
					file_name: "",
					content: "",
				},
			};
		});
	}
	async function handleFileDelete() {
		try {
			if (newFiles[deleteFile._id]) {
				delete newFiles[deleteFile._id];
				setNewFiles({ ...newFiles });
				setNewFiles((prev) => {
					const newFiles = { ...prev };
					delete newFiles[addFile];
					return newFiles;
				});
			} else {
				const res = await axios.delete(`/index/files/${deleteFile._id}`);
				setFiles(res.data.files);
			}
			setShowDeleteModal(false);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<section className={styles.outerSection}>
				<div className={styles.paddingDiv}>
					<div className={styles.headerDiv}>
						<div className={styles.headerParagraph}>File-Explorer</div>
						<div className={styles.options}>
							<button
								className={`icon-plus-squared ${styles.optionsButtons}`}
								onClick={handleNewFile}
							></button>
							<button
								className={`icon-arrows-cw ${styles.optionsButtons}`}
								onClick={handleFileRefresh}
							></button>
						</div>
					</div>
					{showDeleteModal && (
						<GenModalDelete
							props={{
								file_name: deleteFile.file_name,
								handleFileDelete,
								handleFileDeleteCancel,
							}}
						/>
					)}
					<ul className={styles.newFilesList}>
						{newFiles &&
							Object.keys(newFiles).map((newFile) => (
								<li key={newFile} className={styles.file}>
									<File
										props={{
											_id: newFile,
											file_name: newFiles[newFile].file_name,
											setDeleteFile,
											setShowDeleteModal,
										}}
									/>
								</li>
							))}
					</ul>
					<ul className={styles.filesList}>
						{files &&
							Object.keys(files).map((file) => (
								<li key={file} className={styles.file}>
									<File
										props={{
											_id: file,
											file_name: files[file].file_name,
											setDeleteFile,
											setShowDeleteModal,
										}}
									/>
								</li>
							))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default memo(FileExplorer);
