import React, { Component } from "react";
import "./Navbar.css";
import { FaSearch, FaRegUser, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar fixed-top'>
				<div className='container-fluid'>
					<Link to='/' className='navbar_logo_wrapper'>
						<img
							src='/images/logo/logo-white.png'
							alt=''
							className='navbar_logo_img'
						/>
					</Link>
					<ul className='rightsidenav centerd'>
						<li className='rightsidenav_item'>
							<Link to='/' className='rightsidenav_item_link'>
								Home
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='/about' className='rightsidenav_item_link'>
								About us
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='/sign-up' className='rightsidenav_item_link'>
								Membership
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='/blog' className='rightsidenav_item_link'>
								Blog
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='/contact' className='rightsidenav_item_link'>
								Contact
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='/shop' className='rightsidenav_item_link'>
								Shop
							</Link>
						</li>
					</ul>
					<ul className='rightsidenav'>
						<li className='rightsidenav_item'>
							<Link to='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaSearch className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaRegUser className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaRegHeart className='navbar_icons' />
							</Link>
						</li>
						<li className='rightsidenav_item'>
							<Link to='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaShoppingBag className='navbar_icons' />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
