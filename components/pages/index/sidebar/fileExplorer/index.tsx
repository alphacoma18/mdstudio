import { memo, useContext, useState } from "react";
import GlobalContext from "../../../../../utils/context/index";
import { _ID } from "../../../../../utils/db/account";
import GenModalDelete from "../../../../gen/modals/delete";
import File from "./file";
import styles from "./index.module.css";
export interface DeleteFile {
	_id: _ID;
	file_name: string;
}
const FileExplorer: React.FC = () => {
	const { files, newFiles, setNewFiles } = useContext(GlobalContext);
	const [addFile, setAddFile] = useState<number>(0);
	const [deleteFile, setDeleteFile] = useState<DeleteFile>({} as DeleteFile);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
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
	function handleFileDelete() {
		try {
			if (newFiles[deleteFile._id]) {
				delete newFiles[deleteFile._id];
				setNewFiles({ ...newFiles });
			}
			setNewFiles((prev) => {
				const newFiles = { ...prev };
				delete newFiles[addFile];
				return newFiles;
			});
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
					<ul className={styles.filesList}>
						{newFiles &&
							Object.keys(newFiles).map((newFile) => (
								<>
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
								</>
							))}
						{newFiles && <hr />}
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
