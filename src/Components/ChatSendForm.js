import React, { useState } from 'react'
import { BsSend, BsPlus } from "react-icons/bs";
import cookie from 'react-cookies';

export const ChatSendForm = ({ socket, room }) => {

  const [content, setContent] = useState('');

  const inputValue = (e) => {
    setContent(e.target.value);
  }

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      sendEmit();
    }
  }

  const sendEmit = () => {
    if (content.length > 0) {
      socket.emit('chat', {
        user: cookie.load('id'),
        username: cookie.load('username'),
        room: room,
        content: content,
        type: "text",
      });
      setContent('');
    }
  }

  return (
    <div className='message-send'>
      <div className='send-area'>
        <input className='send-input' placeholder='채팅을 입력해주세요' name='send_to_message' value={content} onChange={inputValue} onKeyUp={pressEnter}/>
        <BsSend className='send' onClick={sendEmit} />
      </div>
    </div>
  )
}
