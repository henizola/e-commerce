import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

import { useDispatch, useSelector } from "react-redux";

import { userSignedOut } from "../../../../store/user-reducer";
import axios from "axios";
import { ENDPOINT } from "../../../../api/Api";

const Func = () => {
	const user = useSelector((state) => state.user[0]);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(userSignedOut([]));
		const config = {
			headers: {
				Authorization: `${sessionStorage.getItem("token")}`,
			},
		};

		axios
			.get(`${ENDPOINT}/user/logout`, config)
			.then((res) => {
				console.log("logged out", res);
			})
			.catch((error) => {
				console.log("cant log out", error);
			});
	};

	return (
		<Nav navbar className='border-left flex-row'>
			<Notifications />
			<UserActions onLogout={onLogout} user={user} />
		</Nav>
	);
};
export default Func;
