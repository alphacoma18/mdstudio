import { useState } from "react";
import styles from "../index.module.css";
interface IRecursiveProject1 {
	_isDir: true;
	_files: {
		[key: string]: {
			_isDir: false;
			_content: string;
		};
	};
	_folders: {
		[key: string]: IRecursiveProject1 | {};
	};
}
const Recur: React.FC<{ folder: IRecursiveProject1 }> = ({ folder }) => {
	const [open, setOpen] = useState<boolean>(false);
	function toggleOpen() {
		setOpen((prev) => !prev);
	}
	function renderFX() {
		try {
			const { _isDir, _files, _folders } = folder;
			if (_isDir) {
				return (
					<div className={styles.folder}>
						{Object.keys(_files).map((file, index) => (
							<div key={index} className={styles.file}>
								<i className="icon-doc-text"></i>
								{file}
							</div>
						))}
						{Object.keys(_folders).map((folder, index) => (
							<Recur
								key={index}
								folder={_folders[folder] as IRecursiveProject1}
							/>
						))}
					</div>
				);
			} else {
				return (
					<div className="file">{_files[Object.keys(_files)[0]]._content}</div>
				);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="folder">
			<div className="folder-name" onClick={toggleOpen}>
				<i className="icon-folder"></i>
				{Object.keys(folder._folders)[0]}
			</div>
			{open && renderFX()}
		</div>
	);
};

export default Recur;
