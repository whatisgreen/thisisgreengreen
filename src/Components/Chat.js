import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BsPersonWorkspace } from "react-icons/bs"
import '../Styles/chat.css';
import ChatRoomItem from './ChatRoomItem';
import ChatUserItem from './ChatUserItem';
import FuckYouBitch from './FuckYouBitch';
import { ChatSendForm } from './ChatSendForm';
import AddChatModal from './AddChatModal';
import AddUserModal from "./AddUserModal";
import io from'socket.io-client';
import cookie from 'react-cookies';
import { useParams } from 'react-router-dom/dist';

const socket = io('http://localhost:8000',{
  cors: { origin: '*' }
});
  
const Chat = () => {

  const {room} = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState([{'name':  'junhwan', 'content': 'ㅋㅋㅋ'}, {'name':  '박민규', 'content': 'fd'}, {'name':  '박민규', 'content': 'dfd'}]);

  const chattingHistory = () => {

    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('id', "1", {
      path : '/',
      expires,
    });
    cookie.save('username', "junhwan", {
      path : '/',
      expires,
    });
    
    const result = [];
    let last = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i]['name'] === cookie.load('username')) {
        result.push(<FuckYouBitch who='me' key={i} name={data[i]['name']} last={last} content={data[i]['content']} />);
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

  socket.on('chat', (msg) => {
    if (msg.room === room) {
      setData([...data, {'name': msg.username, 'content': msg.content}]);
    }
  })

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
          <ChatSendForm socket={socket} room={room == undefined ? 0 : room} />
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