import { registerLicense } from "@syncfusion/ej2-base";
import {
	DetailsView,
	FileManagerComponent,
	Inject,
	NavigationPane,
	Toolbar,
} from "@syncfusion/ej2-react-filemanager";
import { memo, useContext } from "react";
import ContextGlobal from "../../../../../utils/context/_global";
import styles from "./index.module.css";
registerLicense(SYNCFUSION_LICENSE as string);
const FileExplorer: React.FC = () => {
	const { isMobile } = useContext(ContextGlobal);
	const host_URL = "https://ej2-aspcore-service.azurewebsites.net/";
	return (
		<section className={styles.fileExplorer}>
			<FileManagerComponent
				ajaxSettings={{
					downloadUrl: host_URL + "api/FileManager/Download",
					getImageUrl: host_URL + "api/FileManager/GetImage",
					uploadUrl: host_URL + "api/FileManager/Upload",
					url: host_URL + "api/FileManager/FileOperations",
				}}
				height={"100%"}
				width={isMobile ? "100%" : "280px"}
				// width={"100%"}
				allowDragAndDrop={true}
				enablePersistence={true}
				cssClass={styles.fileManager}

				// Add new file functionality

				// toolbarSettings={{

				// }}
				// contextMenuSettings={{

				// }}

				// to do
				// 1. do not let non-signed in users to upload files

				className={styles.fileManager}
				uploadSettings={{
					maxFileSize: 500000,
					allowedExtensions:
						".md,.htm,.html,.txt,.jpg,.jpeg,.png,.svg,.gif,.webp,.mp3,.aac,.mp4",
					autoUpload: true,
				}}
			>
				{/* <Inject services={[NavigationPane, DetailsView, Toolbar]} /> */}
			</FileManagerComponent>
		</section>
	);
};

export default memo(FileExplorer);
