import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Contact.css";

class Contact extends Component {
	render() {
		return (
			<div classNameName='wrapper'>
				<nav className='breadcrumb text-center' aria-label='breadcrumbs'>
					<div className='container '>
						<h1 className='breadcrumb_title '>Contact Us</h1>
						<a href='/' title='Back to the frontpage'>
							Home
						</a>

						<span aria-hidden='true' className='breadcrumb__sep'>
							/
						</span>
						<span>Contact</span>
					</div>
				</nav>

				{/* card Section */}
				<CardList>
					<div classNameName='col-12 col-md-8 my-4'>
						<div classNameName='card bg-transparent pos-rel card-height'></div>
					</div>
				</CardList>
			</div>
		);
	}
}

export default Contact;
