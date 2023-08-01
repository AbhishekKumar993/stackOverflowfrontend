import React, { useState } from 'react'
import { styles } from './styles.js'
import EmailForm from './OTPVerification/EmailForm.jsx'
// import ChatRoom from './ChatRoom.jsx'
import SearchBot from './SearchBot.jsx'
import './Bot.css'
const SupportWindow = props => {
    // const [user, setUser] = useState(false)
    // const [chat, setChat] = useState(false)
    const [isverified, setIsverified] = useState(false)
  return (
      <div
          className='transition-5'
          style={{
            ...styles.supportWindow,
            ...{display: props.visible ? '':'none'}
          }}
    >
    { !isverified ? 
      <EmailForm  
      visible={!isverified}
      setIsverified={ () => setIsverified(true)}
      /> :
      <SearchBot visible={isverified} />
    }
    </div>
  )
}

export default SupportWindow


// setUser={user => setUser(user)}
// setChat={chat => setChat(chat)}
// visible={chat === false}
// visible={user === false || chat === false}

// visible={user !== false && chat !== false}
// visible={chat !== false}
// chat={chat}
// user={user}

// {/* <ChatRoom
//           visible={user !==false && chat!==false}
//           chat={chat}
//           user={user}
//       /> */}