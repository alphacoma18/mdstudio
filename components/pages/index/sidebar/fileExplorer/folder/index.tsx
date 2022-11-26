import { FSSchema } from "../../../../../../utils/db/account";
import styles from "./index.module.css";
import Recur from "./recur";
interface Props {
	project: FSSchema;
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
								name={folder}
								folder={_folders[folder] as FSSchema}
							/>
						))}
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
