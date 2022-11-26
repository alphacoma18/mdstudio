import { useState } from "react";
import { FSSchema } from "../../../../../../../utils/db/account";
import styles from "../index.module.css";
const Recur: React.FC<{ folder: FSSchema; name: string }> = ({
	folder,
	name,
}) => {
	const [open, setOpen] = useState<boolean>(false);
	function renderFX() {
		try {
			const { _isDir, _files, _folders } = folder;
			if (_isDir) {
				return (
					<div className={styles.folder}>
						<div className={styles.folderName} onClick={() => setOpen(!open)}>
							{open ? (
								<i className="icon-folder-open"></i>
							) : (
								<i className="icon-folder"></i>
							)}
							{name}
						</div>
						{open && (
							<>
								{Object.keys(_files).map((file, index) => (
									<div key={index} className={styles.file}>
										<i className="icon-doc-text"></i>
										{file}
									</div>
								))}
								{Object.keys(_folders).map((folder, index) => (
									<Recur
										key={index}
										name={folder}
										folder={_folders[folder] as FSSchema}
									/>
								))}
							</>
						)}
					</div>
				);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return <>{renderFX()}</>;
};

export default Recur;
