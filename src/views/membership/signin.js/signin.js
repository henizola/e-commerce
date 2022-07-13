import React from "react";
import { Form, LoginForm } from "../form-style";
import InputGroup from "../components/textfield/input-group";
import Input from "../components/textfield/input";
import Button from "../components/buttons/button";
const SignIn = () => {
	return (
		<div classNameName='wrapper'>
			<nav className='breadcrumb text-center' aria-label='breadcrumbs'>
				<div className='container '>
					<h1 className='breadcrumb_title '>Sign in</h1>
					<a href='/' title='Back to the frontpage'>
						Home
					</a>

					<span aria-hidden='true' className='breadcrumb__sep'>
						/
					</span>
					<span>Signin</span>
				</div>
			</nav>
			<div className='container'>
				<LoginForm>
					<InputGroup>
						<label htmlFor='email'>Email Address</label>
						<Input
							type='email'
							placeholder='joe@gmail.com'
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
							id='password'
							onChange={(e) => {
								console.log(e.target.value);
							}}
						/>
					</InputGroup>

					<button className='send' type='submit' full>
						SignIn
					</button>
					<div className='flex'>
						<div></div>
						<div>
							you don't have an account?{" "}
							<a href='/sign-up'>
								<span>signup</span>
							</a>
						</div>
					</div>
				</LoginForm>
			</div>
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
};
export default SignIn;
