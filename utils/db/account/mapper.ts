import { TFile, TFlatFileSystem } from "./flat";
import { ITreeFolder, TTreeFileSystem } from "./tree";

export default function toTree(data: TFlatFileSystem): ITreeFolder[] {
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
			arr.push(item as TFile);
		}
	}
	const tree: ITreeFolder[] = [],
		arrLen = arr.length;
	for (let i = 0; i < arrLen; ++i) {
		const item = arr[i];
		// get current item
		if (item.parentId && item.isDir) {
			// if current item has parent id, then it is a child
			const parentItem = arrMap.get(item.parentId.toString());
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
			const parentItem = arrMap.get(item.parentId.toString());
			if (parentItem) {
				const { files } = parentItem;
				if (files) {
					parentItem.files.push(item as TFile);
				} else {
					parentItem.files = [item as TFile];
				}
			}
		} else {
			tree.push(item);
		}
	}
	return tree;
}

// console.log(JSON.stringify(toTree(dataOrig), null, 2));
