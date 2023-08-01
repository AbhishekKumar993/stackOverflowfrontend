import React, { useState } from "react";
import { styles } from "../styles.js";
import { LoadingOutlined } from "@ant-design/icons";
import AvatarChatbot from "../AvatarChatbot.jsx";
import { generateOTP, verifyOTP } from "../../../actions/verifyOTP.js";
// import axios from 'axios'

const EmailForm = (props) => {
  const [email, setEmail] = useState("");
  const [loading,setLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const [otpStatus, setOtpStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)  
    setOtpStatus("Sending...");
    setOtpStatus(await generateOTP(email));
    setLoading(false)  
  };

  const verify = async (e) => {
    e.preventDefault();
    const bool = await verifyOTP(email, otp)
    console.log(typeof(bool))  
    if (bool) {
      props.setIsverified();
    }
  };
  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: props.visible ? "100%" : "0%",
          opacity: props.visible ? "1" : "0",
        },
      }}
    >
      <div style={{ height: "0px" }}>
        <div style={styles.stripe} />
      </div>
      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? "0.33" : "0",
          },
        }}
      />
          {
            loading
                    &&
              <LoadingOutlined
                className="transition-5"
                style={{
                ...styles.loadingIcon,
                ...{
                    zIndex: loading ? "10" : "-1",
                    opacity: loading ? "1" : "0",
                    fontSize: "82px",
                    top: "calc(50% - 41px)",
                    left: "calc(50% - 41px)",
                },
            }}
            />
          }
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <AvatarChatbot
          style={{
            position: "relative",
            left: "calc(50% - 44px)",
            top: "10%",
          }}
        />

        <div style={styles.topText}>
          Welcome to our <br /> ChatBot
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "19.75%" }}
        >
          <input
            style={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email and Click Enter"
          />
        </form>
        <div style={styles.bottomText}>
          Type your email &  <br /> Press Enter to get OTP <br /> {otpStatus} <br /> Enter OTP Below &  Press Enter
        </div>
        <form
          onSubmit={(e) => verify(e)}
          style={{ position: "relative", width: "100%", top: "39.75%" }}
        >
          <input
            style={styles.emailInput}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP and Click Enter"
          />
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
// const EmailForm = props => {
//     const [email, setEmail] = useState('')
//     const [loading, setLoading] = useState(false)

//     function getOrCreateUser(callback) {
//         axios.put(
//             'https://api.chatengine.io/users/',
//             {
//                 "username": email,
//                 "secret": email,
//                 "email": email
//             },
//             {headers: {"Private-key": process.env.REACT_APP_CE_PRIVATE_KEY }}
//         ).then(r=>callback(r.data))
//     }
//     function getOrCreateChat(callback) {
//         axios.put(
//             'https://api.chatengine.io/chats/',
//             {
//                 "usernames": ["Namachu", email],
//                 "is_direct_chat": true
//             },
//             {headers: {"Private-key": process.env.REACT_APP_CE_PRIVATE_KEY }}
//         ).then(r=>callback(r.data))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setLoading(true)
//         console.log('emailing.....');
//         getOrCreateUser(
//             user =>{
//                 props.setUser(user)
//                 getOrCreateChat(
//                     chat=>
//                          props.setChat(chat)
//                 )
//             })
//     }

//   return (
//     <div
//         style={{
//             ...styles.emailFormWindow,
//             ...{
//                 height: props.visible ? '100%' : '0%',
//                 opacity: props.visible ? '1': '0'
//             }
//         }}
//     >
//         <div style={{height: '0px'}}>
//             <div style={styles.stripe}/>
//         </div>
//         <div
//             className='transition-5'
//               style={{
//                 ...styles.loadingDiv,
//                 ...{
//                     zIndex: loading ? '10': '-1',
//                     opacity: loading ? '0.33': '0'
//                 }
//             }}
//         />
//         <LoadingOutlined
//             className='transition-5'
//             style={{
//                 ...styles.loadingIcon,
//                 ...{
//                     zIndex: loading ? '10': '-1',
//                     opacity: loading ? '1' : '0',
//                     fontSize: '82px',
//                     top: 'calc(50% - 41px)',
//                     left: 'calc(50% - 41px)',
//                 }
//             }}
//         />
//         <div style={{position:'absolute', height:'100%', width:'100%', textAlign:'center'}}>
//             <AvatarChatbot
//                 style={{
//                     position: 'relative',
//                     left: 'calc(50% - 44px)',
//                     top:  '10%'
//                 }}
//             />

//             <div style={styles.topText}>
//                 Welcome to our <br /> ChatBot
//             </div>

//             <form
//                 onSubmit={e => handleSubmit(e)}
//                 style={{position: 'relative', width: '100%', top: '19.75%'}}
//             >
//                 <input
//                     style={styles.emailInput}
//                     onChange={e => setEmail(e.target.value)}
//                     palceholder='Your Email'
//                 />
//             </form>
//             <div style={styles.bottomText}>
//                 Enter your email <br /> to get Verified
//             </div>
//         </div>
//     </div>
//   )
// }
