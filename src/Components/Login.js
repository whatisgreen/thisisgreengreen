import React, { useState } from "react";
import "../Styles/login.css";
import logo from "../images/로고.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = ({}) => {
  const [pwView, setPwView] = useState({
    type: "password",
    visible: false,
  });

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-div">
          <p className="paru-chat-text">Paru Chat</p>
        </div>
        <div className="input-div">
          <input
            type="text"
            placeholder="E-mail"
            className="email-input"
            name="email"
          />
          <input
            type={pwView.type}
            placeholder="Password"
            className="pw-input"
            name="password"
          />
          <input type="submit" value="로그인" className="login-btn" />

          <Link to="/signup">
            <p className="sign-text">가입하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
