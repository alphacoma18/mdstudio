import { TFlatFileSystem } from "./flat";
import { ITreeFolder, TTreeFileSystem } from "./tree";

function isTFlatFileSystem(pet: TFlatFileSystem | any): pet is TFlatFileSystem {
	return (pet as TFlatFileSystem)[0]._id !== undefined;
}

export default function toTree(data: TFlatFileSystem | any): ITreeFolder {
	if (!isTFlatFileSystem(data)) throw new Error("Invalid Tree Conversion");
	const arrMap: Map<string, ITreeFolder> = new Map();
	const arr: TTreeFileSystem = [],
		dataLen = data.length;
	for (let i = 0; i < dataLen; ++i) {
		const item = data[i];
		if (item.isDir) {
			const folder: ITreeFolder = {
				_id: item._id,
				folderName: item.folderName,
				isDir: true,
				files: [],
				folders: [],
				parentId: item.parentId,
			};
			arr.push(folder);
			arrMap.set(arr[i]._id.toString(), folder);
		} else {
			arr.push(item);
		}
	}
	const tree: ITreeFolder = {} as ITreeFolder,
		arrLen = arr.length;
	for (let i = 0; i < arrLen; ++i) {
		const item = arr[i];
		// get current item
		if (item.parentId && item.isDir) {
			// if current item has parent id, then it is a child
			const parentItem = arrMap.get(item.parentId?.toString());
			// get parent item from map
			// important: this is passed by reference, so any changes to parentItem will be reflected in arrMap

			if (parentItem) {
				const { folders } = parentItem;
				// get existing array of children

				if (folders) {
					parentItem.folders.push(item);
					// if have existing array of children, just push to it
				} else {
					parentItem.folders = [item];
					// if no existing array of children, create it and initialize with current item
				}
			}
		} else if (!item.isDir) {
			const parentItem = arrMap.get(item.parentId?.toString());
			if (parentItem) {
				const { files } = parentItem;
				if (files) {
					parentItem.files.push(item);
				} else {
					parentItem.files = [item];
				}
			}
		} else {
			// if current item has no parent id and is a folder, then it is a root
			tree._id = item._id;
			tree.folderName = item.folderName;
			tree.isDir = true;
			tree.files = [];
			tree.folders = [];
			tree.parentId = null;
			arrMap.set(item._id.toString(), tree);
		}
	}
	return tree;
}
/**
export default function toTree(data: TFlatFileSystem): ITreeFolder {
	const arrMap: Map<string, ITreeFolder> = new Map();
	const tree: ITreeFolder = {} as ITreeFolder;
	
	for (let i = 0; i < data.length; ++i) {
		const item = data[i];
		let node: ITreeFolder | TFlatFile;
		
		if (item.isDir) {
			const folder: ITreeFolder = {
				_id: item._id,
				folderName: item.folderName,
				isDir: true,
				files: [],
				folders: [],
				parentId: item.parentId || null,
			};
			node = folder;
		} else {
			node = item;
		}
		
		const { parentId } = node;
		if (parentId) {
			const parentItem = arrMap.get(parentId.toString());
			if (parentItem) {
				if (parentItem.isDir) {
					parentItem.folders.push(node as ITreeFolder);
				} else {
					throw new Error(`Parent item with ID ${parentId} is not a directory.`);
				}
			} else {
				throw new Error(`Parent item with ID ${parentId} not found in the map.`);
			}
		} else {
			if (node.isDir) {
				Object.assign(tree, node);
			} else {
				throw new Error(`Root node cannot be a file.`);
			}
		}
		
		arrMap.set(node._id.toString(), node as ITreeFolder);
	}
	
	return tree;
}

 */
