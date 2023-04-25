import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import "../Styles/modal_addChat_second.css";

const AddChatModal2 = ({ name, email }) => {

  const [modalOpen, setModalOpen] = useState(false);

  const ChatToClose = () => {
    setModalOpen(false);
  }

  return (
    <div className='AddChatModal2' onClick={ChatToClose}>
      <div className='modal-body2' onClick={(e) => e.stopPropagation()}>
        <p className='addChat-text2'>채팅방 만들기</p>
        <button type='submit'>
          <AiOutlineClose className='closeBtn2' onClick={ChatToClose} />
        </button>
        <div className='chat-item-div2'>
          <span className='chat-room_user-invite-text'>사용자 초대</span>
          <input
            type="text"
            placeholder='박민규#0713'
            name='chat-room_user-invite'
            className='chat-room_user-invite'  
          />

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default AddChatModal2;