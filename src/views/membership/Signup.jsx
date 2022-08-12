import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Signup.css";

import { Form, LoginForm, ErrorDisplay } from "./form-style";
import Input from "./components/textfield/input";
import InputGroup from "./components/textfield/input-group";
import Button from "./components/buttons/button";
import axios from "axios";
import { useState } from "react";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [somErrors, setSomeErrors] = useState("");
  const submmit = async () => {
    //  try {
    await axios
      .post(
        "https://e-commerce-backenda.herokuapp.com/e-commerce/auth/register",
        { firstName, lastName, email, password, phone, role: "customer" }
      )
      .then((res) => {
        console.log("response", res.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status == 400) {
            try {
              console.log("response error:", error.response.data);
              var obj = JSON.parse(error.response.data["message"]);

              if (obj) setError(obj);
            } catch (erro) {
              setSomeErrors(error.response.data["message"]);
            }
          } else {
          }
          //   console.log(error.response.status);
          //   console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("request error:", error.request);
          setSomeErrors("request error");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          setSomeErrors(error.message);
        }
        // console.log(error.config);
      });
    //  } catch (error) {
    // 	console.log(error.response.data);
    //  }
  };
  return (
    <div classNameName="wrapper">
      <nav className="breadcrumb text-center" aria-label="breadcrumbs">
        <div className="container ">
          <h1 className="breadcrumb_title ">Sign Up</h1>
          <a href="/" title="Back to the frontpage">
            Home
          </a>

          <span aria-hidden="true" className="breadcrumb__sep">
            /
          </span>
          <span>Signup</span>
        </div>
      </nav>
      <div className="container">
        <Form className="form-cont">
          <InputGroup>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              placeholder="First Name"
              id="firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <ErrorDisplay> {error["firstName"]}</ErrorDisplay>
          </InputGroup>
          <InputGroup>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type="text"
              placeholder="Last Name"
              id="lastName"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <ErrorDisplay> {error["lastName"]}</ErrorDisplay>
          </InputGroup>
          <InputGroup>
            <label htmlFor="telPhone">TelePhone</label>
            <Input
              type="tel"
              placeholder="Phone"
              id="telPhone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <ErrorDisplay> {error["phone"]}</ErrorDisplay>
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <ErrorDisplay> {error["email"]}</ErrorDisplay>
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <ErrorDisplay> {error["password"]}</ErrorDisplay>
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirm">Confirm password</label>
            <Input
              type="password"
              id="confirm"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </InputGroup>
        </Form>
        <ErrorDisplay> {somErrors}</ErrorDisplay>
        <LoginForm>
          <button
            className="send"
            type="submit"
            full
            onClick={(e) => {
              e.preventDefault();
              submmit();
            }}
          >
            SignUp
          </button>
          <div className="flex">
            <div></div>
            <div>
              you alredy have an account?{" "}
              <a href="/signin">
                <span>signin</span>
              </a>
            </div>
          </div>
        </LoginForm>
      </div>
      {/* </nav> */}

      {/* card Section */}
      <CardList>
        <div classNameName="col-12 col-md-8 my-4">
          <div classNameName="card bg-transparent pos-rel card-height"></div>
        </div>
      </CardList>
      <div className="footer_newsletter">
        <h1>Newsletter</h1>
        <div className="footer_newsletter_input_wrapper">
          <input
            type="email"
            className="footer_newsletter_input"
            placeholder="Your email*"
          />
          <a
            href="/"
            className="btn btn-secondary btn-lg footer_newsletter_button"
          >
            SUBMIT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
