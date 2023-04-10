import React from "react";
import "../Styles/login.css";
import logo from "../images/로고.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-div">
          <img src={logo} alt="logo" className="paru-chat-img" />
          <p className="paru-chat-text">Paru Chat</p>
        </div>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </div>
    </div>
  );
};

export default Login;
