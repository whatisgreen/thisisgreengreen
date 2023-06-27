import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonWorkspace } from "react-icons/bs";
import "../Styles/chat.css";
import ChatRoomItem from "./ChatRoomItem";
import ChatUserItem from "./ChatUserItem";
import FuckYouBitch from "./FuckYouBitch";
import AddChatModal from "./AddChatModal";
import AddUserModal from "./AddUserModal";


const Chat = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const chattingHistory = () => {
    const result = [];
    let last = "";
    const data = [
      { name: "임재현", content: "ㅋㅋㅋ" },
      { name: "박민규", content: "우흥" },
      { name: "박민규", content: "딱좋노 이기!" },
    ];
    for (let i = 0; i < data.length; i++) {
      if (data[i]["name"] === "임재현") {
        result.push(
          <FuckYouBitch
            who="me"
            key={i}
            name={data[i]["name"]}
            last={last}
            content={data[i]["content"]}
          />
        );
      } else {
        result.push(
          <FuckYouBitch
            who="other"
            key={i}
            name={data[i]["name"]}
            last={last}
            content={data[i]["content"]}
          />
        );
      }
      last = data[i]["name"];
    }
    return result;
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="chat-room">
        <div className="chat-title">채팅방</div>
        <div className="chat-bottom">
          <div className="chat-room-list">
            <ChatRoomItem title="개발자 잡담방" content="(사진)" n="1" />
            <div className="chat-room-new" onClick={showModal}>
              새로운 채팅방 만들기
            </div>
            {modalOpen && <AddChatModal setModalOpen={setModalOpen} />}
          </div>
        </div>
      </div>
      <div className="chat-list">
        <div className="chat-title">개발자 잡담방</div>
        <div className="fuckYou_bitch">
          <div className="chat-list-history">{chattingHistory()}</div>
        </div>
      </div>
      <div className="chat-user">
          <span className="goToWorkLog">
            <Link to="/work_log">
            <BsPersonWorkspace className="BsPersonWorkspace" />
            </Link>
          </span>
          <div className="chat-bottom">
            <div className="chat-user-num-div">
            <span className="chat-user-num">채팅방 인원</span>
            </div>
            <div className="chat-user-list">
              <ChatUserItem />
              <div className="chat-user-new" onClick={showModal}>
                채팅방 초대
              </div>
              {modalOpen && <AddUserModal setModalOpen={setModalOpen} />}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Chat;
