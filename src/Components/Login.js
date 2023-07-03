import React, { useState } from "react";
import axios from "axios";
import "../Styles/login.css";
import logo from "../images/로고.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = ({}) => {
  const [pwView, setPwView] = useState({
    type: "password",
    visible: false,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const pwHandler = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost/action/login.php", {
        userEmail: email,
        userPassword: password,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-div">
          <p className="paru-chat-text">Paru Chat</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            type="text"
            placeholder="E-mail"
            className="email-input"
            name="email"
            value={email}
            onChange={emailHandler}
          /> 
          <input
            type={pwView.type}
            placeholder="Password"
            className="pw-input"
            name="password"
            value={password}
            onChange={pwHandler}
          />
          <input type="submit" value="로그인" className="login-btn" />
          <Link to="/signup">
            <p className="sign-text">가입하기</p>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
