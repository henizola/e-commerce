import React, { useState } from "react";
import "./Navbar.css";
import {
	FaSearch,
	FaRegUser,
	FaRegHeart,
	FaShoppingBag,
	FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBarStyle from "./NavbarStyle";
import Avatar from "@mui/material/Avatar";
import CartDrawer from "../../Cart-Drawer/Cart-Drawer.component";

const Navbar = () => {
	const [close, setClose] = useState(false);
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const cart = useSelector((state) => state.cart);

	const toggleDrawer = (anchor, open, permit) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		if (event.type === "click" && permit)
			setState({ ...state, [anchor]: open });
	};

	return (
		<NavBarStyle>
			<nav>
				<Link
					to='/'
					className='navbar_logo_wrapper'
					onClick={(e) => {
						setClose(false);
					}}
				>
					<img
						src='/images/logo/logo-white.png'
						alt=''
						className='navbar_logo_img'
					/>
				</Link>
				<input
					type='checkbox'
					checked={close}
					onChange={(e) => setClose(e.target.checked)}
					id='check'
				/>
				<label htmlFor='check' className='toggle-menu'>
					<FaBars className='navbar_icons' />
				</label>

				<div className='main-nav'>
					<ul className='rightsidenav centerd'>
						<li className='rightsidenav_item'>
							<Link
								to='/'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Home
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/about'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								About us
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/sign-up'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Membership
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/blog'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Blog
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/contact'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Contact
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to='/shop'
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								Shop
							</Link>
						</li>
					</ul>
					<ul className='rightsidenav rightsidnav2'>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaSearch className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaRegUser className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link
								to=''
								className='rightsidenav_item_link'
								onClick={(e) => {
									setClose(false);
								}}
							>
								{/* <span className="icon search_nav"></span> */}
								<FaRegHeart className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							{cart.length > 0 && <span className='number'>{cart.length}</span>}

							<button
								alt='Shop'
								onClick={toggleDrawer("right", true, true)}
								style={{
									backgroundColor: "transparent",
									border: "none",
									position: "relative",
									padding: "0",
								}}
							>
								<FaShoppingBag />
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<CartDrawer state={state} toggleDrawer={toggleDrawer} />
		</NavBarStyle>
	);
};
export default Navbar;
