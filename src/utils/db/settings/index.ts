import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
class FileSettings {
	@prop({ index: true, unique: true, required: true })
	_id!: Types.ObjectId;
}

class FolderSettings {
	@prop({ index: true, unique: true, required: true })
	_id!: Types.ObjectId;
}
// use 60/30/10 rule
class Theme {
    
}
class ProjectSettings {
	@prop({ index: true, unique: true, required: true })
	_id!: Types.ObjectId;

	@prop()
	theme!: Theme;
}

export { FileSettings, FolderSettings, ProjectSettings };
