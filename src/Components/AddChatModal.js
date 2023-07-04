import React, { useState, useCallback } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../Styles/modal.css";

const AddChatModal = ({setModalOpen}, props) => { 

  const ChatToClose = () => {
    setModalOpen(false);
  };

  const [roomName, setRoomName] = useState('');

  const roomNameChange = (e) => {
    setRoomName(e.target.value);
  }

  const handleCreateRoomName = async () => {
    try {
      const res = await axios.get('http://localhost/api/reportdata_api.php', {
        params: {
          name: roomName,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="AddChatModal-container" onClick={ChatToClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <span className="addChat-text">채팅방 만들기</span>
        <button type="submit">
          <AiOutlineClose className="closeBtn" onClick={ChatToClose} />
        </button>
        {props.children}
        <div className="chat-item-div">
          <span className="chat-room_name-text">채팅방 이름</span>
          <input
            type="text"
            placeholder="채팅방 이름을 입력하세요"
            name="chat_room_name"
            className="chat-room_name"
            value={roomName}
            onChange={roomNameChange}
          />
          
          <button type="submit" className="chat-room-finish-btn" onClick={handleCreateRoomName}>
            만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddChatModal;