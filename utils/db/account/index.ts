export interface FSSchema {
	_isDir: true;
	_files: {
		[key: string]: {
			_isDir: false;
			_content: string;
			_title: string;
			_description: string;
		};
	};
	_folders: {
		[key: string]: FSSchema | Record<string, never>;
	};
}
interface ProjectSettingSchema {
	UI: {
		scrollIndicator?: boolean;
		backToTop?: boolean;
		width?: {
			min?: string;
			max?: string;
		};
		theme?: {
			bg1?: string;
			bg2?: string;
			bg3?: string;
			color?: string;
			font?: string;
		};
	};
	Functionality: {
		autosave?: boolean;
		smoothScroll?: boolean;
		horizontalScroll?: boolean;
		googleTranslate?: boolean;
	};
	Meta: {
		title?: string;
		icon?: string;
		description?: string;
	};
}
export interface ProjectSchema {
	settings: ProjectSettingSchema;
	fileStructure: FSSchema;
}

export interface UserSchema {
	userId: string;
	projects: ProjectSchema[];
}
