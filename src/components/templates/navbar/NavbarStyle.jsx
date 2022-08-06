import styled from "styled-components";
const NavBarStyle = styled.div`
	.logo {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		/* max-height: 100%; */
	}
	.nav-links {
		padding: 18px 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-width: 300px;
	}
	.nav-links li {
		display: inline-block;
		margin: 0 15px;
	}
	.nav-links li .links {
		text-decoration: none;
		color: #fff;
		padding: 5px 0;
		position: relative;
		font-size: 1.2em;
	}
	.nav-links li .links::after {
		content: "";
		background: #ff3d00;
		width: 0;
		height: 2px;
		position: absolute;
		bottom: 0;
		left: 0;
		transition: width 0.3s;
	}
	.nav-links li .links:hover::after {
		width: 100%;
	}

	.number {
		width: 20px !important;
		height: 15px;
		border-radius: 30px;
		position: absolute;
		font-size: 12px;
		text-align: center;
		padding: 3px 0;
		right: 50px;
		top: 10px;
		z-index: 999;
		color: #fff !important;
	}
`;
export default NavBarStyle;
