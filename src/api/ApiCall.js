import axios from "axios";
import { ENDPOINT } from "./Api";

// import { toast } from "react-toastify";

export const apiCall = (method, data, path, callback, onFailure, token) =>
	new Promise((resolve, reject) => {
		console.log("this is request", method, data, path);
		const config = {
			headers: {
				// Authorization: `${token ? token : sessionStorage.getItem("token")}`,
				Authorization:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmUxODcxZjc0YjI4ZjdiNGU3NTNhZGQiLCJpYXQiOjE2NTk3NjUyMzksImV4cCI6MTY1OTc2NzAzOSwidHlwZSI6ImFjY2VzcyJ9.qSZ45xdOvk2FppaY4CjQ60UjG3gKT6F-Y65wQxnFU5s",
			},
		};
		axios[method](`${ENDPOINT}${path}`, data && data, config)

			.then((res) => {
				resolve();
				callback(res.data);
				// toast.success(res.data.message);
			})
			.catch((error) => {
				reject();

				onFailure(error);
				// toast.error(error.response.data.message);
			});
	});
export const apiCall2 = (method, data, path, callback, onFailure, token) =>
	new Promise((resolve, reject) => {
		console.log("this is request", method, data, path);
		const config = {
			headers: {
				// Authorization: `${token ? token : sessionStorage.getItem("token")}`,
				Authorization:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmUxODcxZjc0YjI4ZjdiNGU3NTNhZGQiLCJpYXQiOjE2NTk3NjUyMzksImV4cCI6MTY1OTc2NzAzOSwidHlwZSI6ImFjY2VzcyJ9.qSZ45xdOvk2FppaY4CjQ60UjG3gKT6F-Y65wQxnFU5s",
			},
		};
		//axios[method](`${ENDPOINT}${path}`, data && data, config)
		//
		axios({
			method: method,
			url: `${ENDPOINT}${path}`,
			...data,
			headers: config.headers,
		})
			.then((res) => {
				resolve();
				callback(res.data);
				// toast.success(res.data.message);
			})
			.catch((error) => {
				reject();

				onFailure(error);
				// toast.error(error.response.data.message);
			});
	});
export const apiFetch = (method, path, callback, onFailure) =>
	new Promise((resolve, reject) => {
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};
		axios[method](`${ENDPOINT}${path}`, config)
			.then((res) => {
				resolve();
				callback(res.data);
				console.log(res.data.message);
			})
			.catch((error) => {
				reject();
				onFailure(error);
			});
	});
