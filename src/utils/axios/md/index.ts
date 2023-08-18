import handleAxios from "..";
async function postMDContent(
	projectId: string,
	fileId: string,
	content: string,
) {
	return handleAxios({
		url: `editor/update/${fileId}`,
		method: "post",
		payload: {
			projectId,
			content,
		},
	});
}
async function getMDContent(fileId: string) {
	return handleAxios({
		url: `editor/get/${fileId}`,
		method: "get",
	});
}

export { getMDContent, postMDContent };
