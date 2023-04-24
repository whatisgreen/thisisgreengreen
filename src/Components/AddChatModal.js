import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import "../Styles/modal_addChat_first.css"

const AddChatModal = () => {

  const [modalOpen, setModalOpen] = useState(false);

    const ChatToClose = () => {
        setModalOpen(false);
    };



  return (
    <div className='AddChatModal-container' onClick={ChatToClose}>
      <div className='modal-body' onClick={(e) => e.stopPropagation()}>
        <p className='addChat-text'>채팅방 만들기</p>
        <button type='submit'>
        <AiOutlineClose className='closeBtn' onClick={ChatToClose}/>
        </button>
        <div className='chat-item-div'>
          <span>채팅방 이름</span>
          <input type='text' placeholder='채팅방 이름을 입력하세요' name='chat_room_name'/>

          <span>채팅방 사진</span>
          
        </div>
      </div>
    </div>
  )
}

export default AddChatModal;