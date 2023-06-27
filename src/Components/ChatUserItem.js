import React from 'react'

const ChatUserItem = (props) => {
  const {name, email} = props
  return (
    <div className='chat-user-list-item'>
      <div className='chat-user-list-text'>
        <span className='chat-user-list-name'>{name}박민규</span>
        <span className='chat-user-list-email'>({email}mingyu9570@gmail.com)</span>
      </div>
    </div>
    
  )
}

export default ChatUserItem