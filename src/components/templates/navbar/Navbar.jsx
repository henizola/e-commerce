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
							<a href='/' className='rightsidenav_item_link'>
								Home
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='/about' className='rightsidenav_item_link'>
								About us
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								Membership
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								Blog
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								Contact
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								Shop
							</a>
						</li>
					</ul>
					<ul className='rightsidenav'>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaSearch className='navbar_icons' />
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaRegUser className='navbar_icons' />
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaRegHeart className='navbar_icons' />
							</a>
						</li>
						<li className='rightsidenav_item'>
							<a href='' className='rightsidenav_item_link'>
								{/* <span className="icon search_nav"></span> */}
								<FaShoppingBag className='navbar_icons' />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
