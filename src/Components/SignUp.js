import React, { useState } from "react";
import "../Styles/signup.css";
import logo from "../images/로고.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = ({}) => {

  const [pw, setPw] = useState({
    type: "password",
    visible: false,
  });

  const [pwChk, setPwChk] = useState({
    type: "password",
    visible: false,
  });

  const handlePwView = (e) => {
    setPw(() => {
      if (!pw.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  const handlePwChkView = (e) => {
    setPwChk(() => {
      if (!pwChk.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <div className="logo-div-sign">
          <img src={logo} alt="logo" className="paru-chat-img" />
          <p className="paru-chat-text">Paru Chat</p>
        </div>
        <div className="input-div-sign">
          <input
            type="text"
            placeholder="E-mail"
            className="email-input"
            name="email"
          />
          <input
            type="text"
            placeholder="Nickname"
            className="name-input"
            name="nickname"
          />
          <input
            type={pw.type}
            placeholder="Password"
            className="pw-input"
            name="password"
          />
          <span onClick={handlePwView}>
            {pw.visible ? (
              <span className="no_visible-signUp">
                <AiOutlineEyeInvisible />
              </span>
            ) : (
              <span className="visible-signUp">
                <AiOutlineEye />
              </span>
            )}
          </span>
          <input
            type={pwChk.type}
            placeholder="Password Check"
            className="pw_chk-input"
            name="password"
          />
          <span onClick={handlePwChkView}>
            {pwChk.visible ? (
              <span className="no_visible-signUp_chk">
                <AiOutlineEyeInvisible />
              </span>
            ) : (
              <span className="visible-signUp_chk">
                <AiOutlineEye />
              </span>
            )}
          </span>

          <input
            type="submit"
            value="가입하기"
            className="signUp-btn"
            onClick={validation}
          />

          <p className="login-text">로그인하기</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
