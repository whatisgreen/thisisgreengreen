import React from "react";
import "../Styles/login.css";
import logo from "../images/로고.png";

const Login = () => {
  let loginBox = document.querySelector(".outBox");
  let loginInputBox = document.querySelector("#sampleId");
  let email_text = document.querySelector("#email_text")

  const form = () => {
    loginInputBox.addEventListener("keyup", () => {
      if (!loginInputBox.value == "") {
        loginBox.classList.add("existence");
      } else {
        loginBox.classList.remove("existence");
      }
    });

    loginInputBox.addEventListener("mouseup", () => {
      if (!loginInputBox.value !== "") {
        email_text.style.display = "none";
      }
    })
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-div">
          <img src={logo} alt="logo" className="paru-chat-img" />
          <p className="paru-chat-text">Paru Chat</p>
        </div>
        <div class="outBox">
          <div class="inputBox">
            <input type="text" id="sampleId" name="" />
            <label for="sampleId" id="email-text">E-mail</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
