import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Signup.css";
 
import {Form} from './form-style'
import Input from "./components/textfield/input";
import InputGroup from "./components/textfield/input-group";
import Button from "./components/buttons/button";
class Signup extends Component {
	render() {
		return (
			<div classNameName='wrapper'>
				{/* <nav className='breadcrumb text-center' aria-label='breadcrumbs'> */}
					<div className='container' style={{width:'100%',display:'flex',justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                         <Form>
						 <InputGroup>
						<label htmlFor="firstNamme">First Name</label>
						<Input type='text' placeholder='joe' id='firstNamme'  onChange={(e)=>{
							console.log(e.target.value);
						}} />
						</InputGroup>
						<InputGroup>
						<label htmlFor="lastName">Last Name</label>
						<Input type='text' placeholder='doe' id='lastName'  onChange={(e)=>{
							console.log(e.target.value);
						}} />
						</InputGroup>
						<InputGroup>
						<label htmlFor="telPhone">TelePhone</label>
						<Input type='tel' placeholder='+2518989898989' id='telPhone'  onChange={(e)=>{
							console.log(e.target.value);
						}} />
						</InputGroup>
						 <InputGroup>
						<label htmlFor="email">Email Address</label>
						<Input type='email' placeholder='joe@gmail.com' id='email'  onChange={(e)=>{
							console.log(e.target.value);
						}} />
						</InputGroup>
						<InputGroup>
						<label htmlFor="password">Password</label>
						<Input type='password'   id='password'  onChange={(e)=>{
							console.log(e.target.value);
						}} />
						</InputGroup>
						<InputGroup>
						<label htmlFor="confirm">Confirm password</label>
						<Input type='password'  id='confirm'  onChange={(e)=>{
							console.log(e.target.value);
						}} />
						</InputGroup>
						<Button type='submit' full>SignUp</Button>
						 <div style={{color:'white'}}>
							Alreay have an account?<a href="/signin">
							<span style={{color:'#2f8bfd',textDecoration:'underline',fontSize:"2rem"}}>signin</span>
							</a>
						 </div>
						 </Form>

					</div>
				{/* </nav> */}

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

export default Signup;
