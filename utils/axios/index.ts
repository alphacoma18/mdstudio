import Axios from "axios";

// import axios property interface

const axios = Axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Credentials": true,
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"Access-Control-Max-Age": "3600",
		"Access-Control-Expose-Headers":
			"Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials",
	},
});
interface IAxios {
	method: "get" | "post" | "put" | "delete";
	url: string;
	data?: { [key: string]: any };
}
async function handleAxios({
	method,
	url,
	data: payload,
}: IAxios): Promise<any> {
	try {
		return await axios[method](url, payload);
	} catch (error) {
		console.error(error);
		return error;
	}
}
export default handleAxios;
