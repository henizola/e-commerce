import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { apiCall } from "../api/ApiCall";
import Loading from "../components/loading/loading.page";

const Activate = () => {
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		console.log(params.id);
		toast.promise(
			apiCall(
				"post",
				{
					activation_token: params.id,
				},
				"/user/activate-account",
				onSuccess,
				onFaileure
			),
			{
				pending: "Activating .......",
			}
		);
	}, []);

	const onFaileure = (error) => {
		console.log(error);
	};

	const onSuccess = () => {
		setTimeout(() => {
			navigate("/");
		}, 1000);
	};

	return (
		<div>
			<ToastContainer />
			<Loading />
		</div>
	);
};

export default Activate;
