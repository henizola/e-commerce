import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { styled as newStyled } from "@mui/material/styles";

export const Container = styled.div`
	max-width: 100vw;
	display: flex;
	flex-direction: column;
	padding: 150px 100px;
	background-color: black;
	color: #fff !important;

	.logo {
		width: 150px;
		height: auto;
		margin: 0px 0px;
		margin-bottom: 100px;
	}

	ul {
		list-style: none;
		padding: 10px 0;
		margin: 0;
		li {
			margin-top: 5px;
		}
		span {
			margin: 0;
		}
	}
	img {
		max-width: 100%;
		width: 100%;
		height: 150px;
		margin-bottom: 10px;
		border-radius: 5px;
		object-fit: cover;
	}

	.card {
		background-color: #000;
		border-radius: 20px;

		padding: 0 !important;
		padding-top: 30px !important;
	}
	.contact {
		padding: 0 30px !important;
	}
	.MuiTextField-root {
		width: 100% !important ;
	}
	.css-hxvg31-MuiGrid-root > .MuiGrid-item {
		padding: 0 !important;
	}
	.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input {
		border: 1px solid white !important;
	}
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: white !important;
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: white !important;
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: white !important;
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: white !important;
	}
	.legend span {
		color: white !important;
	}
	.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
		color: white !important;
	}

	.tow-by-two {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	}
	.price {
		width: 99%;
		margin: 20px 15px;
		color: white !important;
		margin-top: 30px;

		button {
			border-radius: 20px;
			padding: 5px 35px;
			background-color: #000;
			color: #fff;
			border: none;
			max-height: 40px;
		}
		.inside {
			display: grid;

			grid-template-columns: 1fr 1fr;
			h4 {
				text-align: right;
			}
		}
	}
	.contact {
		padding-bottom: 30px !important;
	}
	.outline {
		background-color: #fff;
		border: 1px solid black;
		color: #000;
	}
	.checkout {
		border: 1px solid white;
		color: #fff;
		border-radius: 20px;
		margin-left: 10px;
		padding: 10px !important;
		height: fit-content;
		text-align: center;
	}
`;

export const Item = newStyled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	display: "grid",
}));

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;
	max-width: 50vw;
	padding: 1.3rem;
	grid-column-gap: 50px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 auto;
	margin-top: 30px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		max-width: 100%;
	}
	/* border:2px solid green; */
`;
