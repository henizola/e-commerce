import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Signup.css";

import { Form, LoginForm } from "./form-style";
import Input from "./components/textfield/input";
import InputGroup from "./components/textfield/input-group";
import Button from "./components/buttons/button";
class Signup extends Component {
	render() {
		return (
			<div classNameName='wrapper'>
				<nav className='breadcrumb text-center' aria-label='breadcrumbs'>
					<div className='container '>
						<h1 className='breadcrumb_title '>Sign Up</h1>
						<a href='/' title='Back to the frontpage'>
							Home
						</a>

						<span aria-hidden='true' className='breadcrumb__sep'>
							/
						</span>
						<span>Signup</span>
					</div>
				</nav>
				<div className='container'>
					<Form className='form-cont'>
						<InputGroup>
							<label htmlFor='firstNamme'>First Name</label>
							<Input
								type='text'
								placeholder='First Namme'
								id='firstNamme'
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</InputGroup>
						<InputGroup>
							<label htmlFor='lastName'>Last Name</label>
							<Input
								type='text'
								placeholder='Last Name'
								id='lastName'
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</InputGroup>
						<InputGroup>
							<label htmlFor='telPhone'>TelePhone</label>
							<Input
								type='tel'
								placeholder='Phone'
								id='telPhone'
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</InputGroup>
						<InputGroup>
							<label htmlFor='email'>Email Address</label>
							<Input
								type='email'
								placeholder='Email'
								id='email'
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</InputGroup>
						<InputGroup>
							<label htmlFor='password'>Password</label>
							<Input
								type='password'
								placeholder='Password'
								id='password'
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</InputGroup>
						<InputGroup>
							<label htmlFor='confirm'>Confirm password</label>
							<Input
								type='password'
								id='confirm'
								onChange={(e) => {
									console.log(e.target.value);
								}}
							/>
						</InputGroup>
					</Form>
					<LoginForm>
						<button className='send' type='submit' full>
							SignUp
						</button>
						<div className='flex'>
							<div></div>
							<div>
								you alredy have an account?{" "}
								<a href='/signin'>
									<span>signin</span>
								</a>
							</div>
						</div>
					</LoginForm>
				</div>
				{/* </nav> */}

				{/* card Section */}
				<CardList>
					<div classNameName='col-12 col-md-8 my-4'>
						<div classNameName='card bg-transparent pos-rel card-height'></div>
					</div>
				</CardList>
				<div className='footer_newsletter'>
					<h1>Newsletter</h1>
					<div className='footer_newsletter_input_wrapper'>
						<input
							type='email'
							className='footer_newsletter_input'
							placeholder='Your email*'
						/>
						<a
							href='/'
							className='btn btn-secondary btn-lg footer_newsletter_button'
						>
							SUBMIT
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
