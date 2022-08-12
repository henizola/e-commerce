import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";
import logo from "../../../assets/images/logo.png";
import { Dispatcher, Constants } from "../../../flux";

class SidebarMainNavbar extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
	}

	handleToggleSidebar() {
		Dispatcher.dispatch({
			actionType: Constants.TOGGLE_SIDEBAR,
		});
	}

	render() {
		return (
			<div className='main-navbar'>
				<Navbar
					className='align-items-stretch bg-white flex-md-nowrap border-bottom p-0'
					type='light'
				>
					<NavbarBrand
						className='w-100 mr-0'
						href='#'
						style={{ backgroundColor: " #fff" }}
					>
						<div
							className='d-table m-auto'
							style={{
								color: "#fff",
								paddingLeft: "80px!improtant",
								marginTop: "-8px",
							}}
						>
							<img
								src={logo}
								alt='logo'
								style={{ maxwidth: "240px", height: "20px" }}
							/>
						</div>
					</NavbarBrand>
					{/* eslint-disable-next-line */}
					<a
						className='toggle-sidebar d-sm-inline d-md-none d-lg-none'
						onClick={this.handleToggleSidebar}
					>
						<i className='material-icons'>&#xE5C4;</i>
					</a>
				</Navbar>
			</div>
		);
	}
}

SidebarMainNavbar.propTypes = {
	/**
	 * Whether to hide the logo text, or not.
	 */
	hideLogoText: PropTypes.bool,
};

SidebarMainNavbar.defaultProps = {
	hideLogoText: false,
};

export default SidebarMainNavbar;
