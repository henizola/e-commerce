import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
	width: 100%;
	padding: 0px 0%;
	h5 {
		margin: 30px !important;
	}
	@media screen and (max-width: 600px) {
		h5 {
			text-align: left;
			padding-left: 50px;
		}
	}
`;

export const Rounded = styled.button`
	cursor: pointer;
	background-color: transparent;
	width: 100px !important;
	height: 100px !important;
	border-radius: 20%;
	margin-left: 50px !important;
	border: 1px solid #fefefe;
	/* padding: 50px; */

	color: #ffffff;
	@media screen and (max-width: 600px) {
		margin-left: 40px;
	}
	p {
		margin: 40% 0;
		text-align: center !important;
	}
`;
