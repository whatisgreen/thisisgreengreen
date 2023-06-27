import React from 'react'
import { BsSend, BsPlus } from "react-icons/bs";

export const ChatSendForm = () => {
  return (
    <div className='message-send'>
      <div className='send-area'>
        <input className='send-input' placeholder='채팅을 입력해주세요' name='send_to_message'/>
        <BsSend className='send' />
      </div>
    </div>
  )
}
