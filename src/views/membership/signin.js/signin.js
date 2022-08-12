import React, { useState } from "react";
import { ErrorDisplay, LoginForm } from "../form-style";
import InputGroup from "../components/textfield/input-group";
import Input from "../components/textfield/input";
import Button from "../components/buttons/button";
import axios from "axios";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [somErrors, setSomeErrors] = useState("");
  const submmit = async () => {
    //  try {
    setError({});
    setSomeErrors("");
    await axios
      .post("https://e-commerce-backenda.herokuapp.com/e-commerce/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("response", res.data);
        setError({});
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("response error:", error.response.data);
          if (error.response.status == 400) {
            try {
              var obj = JSON.parse(error.response.data["message"]);

              if (obj) setError(obj);
            } catch (erro) {
              setSomeErrors(error.response.data["message"]);
            }
          } else {
            setSomeErrors(error.response.data["message"]);
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
      });
  };
  return (
    <div classNameName="wrapper">
      <nav className="breadcrumb text-center" aria-label="breadcrumbs">
        <div className="container ">
          <h1 className="breadcrumb_title ">Sign in</h1>
          <a href="/" title="Back to the frontpage">
            Home
          </a>

          <span aria-hidden="true" className="breadcrumb__sep">
            /
          </span>
          <span>Signin</span>
        </div>
      </nav>
      <div className="container">
        <LoginForm>
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
          <ErrorDisplay> {somErrors}</ErrorDisplay>
          <button
            className="send"
            type="submit"
            full
            onClick={(e) => {
              e.preventDefault();
              submmit();
            }}
          >
            Signin
          </button>
          <div className="flex">
            <div></div>
            <div>
              you don't have an account?{" "}
              <a href="/sign-up">
                <span>signup</span>
              </a>
            </div>
          </div>
        </LoginForm>
      </div>
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
export default SignIn;
