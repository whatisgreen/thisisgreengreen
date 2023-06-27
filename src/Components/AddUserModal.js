import React, { useState, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../Styles/modal.css";

const AddUserModal = ({ setModalOpen }, props) => {
  const ChatToClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="AddUserModal-container" onClick={ChatToClose}>
      <div className="modal-body2" onClick={(e) => e.stopPropagation()}>
        <span className="addUser-text">유저 초대하기</span>
        <button type="submit">
          <AiOutlineClose className="closeBtn" onClick={ChatToClose} />
        </button>
        {props.children}
        <div className="user-item-div">
        <span className="chat-room_user-invite-text">사용자 초대</span>
          <span className="plus-icon">
            <IoMdAddCircleOutline className="IoMdAddCircleOutline" />
          </span>
          <input
            type="text"
            placeholder="박민규#0713"
            name="chat-room_user-invite"
            className="chat-room_user-invite"
          />

          <div className="chat-room_user-div">
            <div style={{ display: "block" }}>
              <span>박민규(mingyu0713@gmail.com)</span>
            </div>
          </div>

          <button type="submit" className="user-room-finish-btn">
            만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
