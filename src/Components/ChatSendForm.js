import React from 'react'
import { BsSend, BsPlus } from "react-icons/bs";

export const ChatSendForm = () => {
  return (
    <div className='message-send'>
      <div className='send-area'>
        <BsPlus className='send-plus' />
        <input />
        <BsSend className='send' />
      </div>
    </div>
  )
}
