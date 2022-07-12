import styled from "styled-components";

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 50vw;
	padding: 1.3rem;
	grid-column-gap: 50px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 auto;
	margin-top: 100px;

	/* border:2px solid green; */
`;

export const LoginForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 40vw;
	padding: 1.3rem;
	grid-column-gap: 50px;
	margin: 0 auto;

	.flex {
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		color: #fff;
		a {
			color: green;
		}
	}
	/* border:2px solid green; */
`;
