import styles from "./index.module.css";
import Recur from "./recur";
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
interface Props {
	project: IRecursiveProject1;
}
const Folder: React.FC<Props> = ({ project }) => {
	function renderFX() {
		try {
			const { _isDir, _files, _folders } = project;
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
					<div className={styles.file}>
						{_files[Object.keys(_files)[0]]._content}
					</div>
				);
			}
		} catch (error) {
			console.log(error);
		}
	}
	return <>{renderFX()}</>;
};

export default Folder;
