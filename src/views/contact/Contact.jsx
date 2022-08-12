import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Contact.css";

import {
	AiOutlinePhone,
	AiOutlineMail,
	AiOutlineInstagram,
} from "react-icons/ai";
import InputGroup from "../membership/components/textfield/input-group";
import Input from "../membership/components/textfield/input";

class Contact extends Component {
	render() {
		return (
			<div className='wrapper black'>
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
						<div classNameName='card bg-transparent pos-rel card-height'>
							<p className='title'>Get intouch</p>
							<div className='box'>
								<p>
									<AiOutlinePhone />
									+1 234 223 1234
								</p>
								<p>
									<AiOutlineMail />
									info@shop.com
								</p>
								<p>
									<AiOutlineInstagram />
									@shopname
								</p>
							</div>

							<div className='contact-form'>
								<InputGroup>
									<label htmlFor='confirm'>Your Email</label>
									<Input
										type='text'
										id='confirm'
										onChange={(e) => {
											console.log(e.target.value);
										}}
									/>
								</InputGroup>
								<InputGroup>
									<label htmlFor='confirm'>Subject</label>
									<Input
										type='text'
										id='confirm'
										onChange={(e) => {
											console.log(e.target.value);
										}}
									/>
								</InputGroup>
								<InputGroup
									setyle={{
										height: "400px!improtant",
										maxHeight: "400px!improtant",
									}}
								>
									<label htmlFor='confirm'>Message</label>
									<textarea
										type='text'
										id='confirm'
										onChange={(e) => {
											console.log(e.target.value);
										}}
									/>
								</InputGroup>
								<button className='send'>Send</button>
							</div>
						</div>
					</div>
				</CardList>
			</div>
		);
	}
}

export default Contact;
