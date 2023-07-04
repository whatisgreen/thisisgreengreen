import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../Styles/modal.css";

const AddUserModal = ({ setModalOpen }, props) => {

  const ChatToClose = () => {
    setModalOpen(false);
  };

  const [code, setCode] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState(''); 

  const userCodeChange = (e) => {
    setCode(e.target.value);
  }

  const userNickChange = (e) => {
    setNick(e.target.value);
  }

  const userEmailChange = (e) => {
    setEmail(e.target.value);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.post('http://localhost/api/allUserdata_api.php');
      setNick(res.data);
      setEmail(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateUserName = async () => {
    try {
      const res = await axios.post('http://localhost/api/userdata_api.php', {
        code: code,
      });
    } catch (err) {
      console.error(err);
    } 
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
            onChange={userCodeChange}
          />

          <div className="chat-room_user-div">
            <div style={{ display: "block" }}>
              {nick.map((user) => (
                <span key={user.id}>{user.userNickname}</span>
              ))}
              {email.map((user) => (
                <span key={user.id}>{user.email}</span>
              ))}
            </div>
          </div>

          <button type="submit" className="user-room-finish-btn" onClick={handleCreateUserName}>
            만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;