import React from "react";
import "../Styles/login.css";
import logo from "../images/로고.png";

const Login = () => {
  let loginBox = document.querySelector(".outBox");
  let loginInputBox = document.querySelector("#sampleId");
  let email_text = document.querySelector("#email_text")

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-div">
          <img src={logo} alt="logo" className="paru-chat-img" />
          <p className="paru-chat-text">Paru Chat</p>
        </div>
        <div className="input-div">
            <input type="text" placeholder="E-mail" className="email-input" name="email"/>
            <input type="password" placeholder="Password" className="pw-input" name="password" />

            <input type="submit" value="로그인" className="login-btn" />
        </div>
      </div>
    </div>
  );
};

export default Login;
