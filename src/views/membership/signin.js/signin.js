import React from "react";
import { Form } from "../form-style";
import InputGroup from "../components/textfield/input-group";
import Input from "../components/textfield/input";
import Button from "../components/buttons/button";
const SignIn =()=>{
    return ( 
       <div classNameName='wrapper'>
				{/* <nav className='breadcrumb text-center' aria-label='breadcrumbs'> */}
					<div className='container' style={{width:'100%',display:'flex',justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                         <Form>

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
						 
						<Button type='submit' full>SignUp</Button>
						 <div style={{color:'white',padding:'10px'}}>
							you don't have an account? <a href="/sign-up"><span style={{color:'#2f8bfd',textDecoration:'underline',fontSize:"2rem"}}>signup</span></a>
						 </div>
						 </Form>

					</div>
				{/* </nav> */}

				{/* card Section */}
				
			</div>
    );
}
export default SignIn;