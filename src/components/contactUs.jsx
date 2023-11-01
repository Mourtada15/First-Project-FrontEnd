import { useState } from 'react';
import './subscribe.css'
import './contactUs.css'
// eslint-disable-next-line react/prop-types
const ContactUs = ({onHide}) =>{
    const [email,setEmail]= useState('');
    const [userName,setUserName] = useState("");
    const [EmailBackground, setEmailBackground]= useState("white");
    const [UserNameBackground, setUserNameBackground]= useState("white");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleEmailValidation = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
        if(emailRegex.test(e.target.value)){
            setEmailBackground("valid")
        }
        else{
            setEmailBackground("notValid")
        }

        if(e.target.value==""){
            setEmailBackground("white")
        }
    }
    const handleUserNameValidation = (e) =>{
          setUserName(e.target.value);
        if(!e.target.value){
            setUserNameBackground("notValid");
        }else{
            setUserNameBackground("valid");
        }
    }
    
    return(
        <div className="subscribe-popup">
           <header className="popup-header">
            <button onClick={onHide} className='close-popup-btn'>
            <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    style={{
      display: "block",
      fill: "none",
      height: 16,
      width: 16,
      stroke: "currentcolor",
      strokeWidth: 3,
      overflow: "visible"
    }}
  >
    <path d="m6 6 20 20" />
    <path d="m26 6-20 20" /> </svg>
            </button>
            <h1 className='popup-title'>Contact Us</h1>
           </header>
           <div className="popup-body">
            <label htmlFor="username">Username</label>
            <input type="text" value={userName} className={`popup-input ${UserNameBackground} `} placeholder='user name' onChange={handleUserNameValidation} onBlur={handleUserNameValidation} autoFocus/>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} className={`popup-input ${EmailBackground} `} placeholder='Email' onChange={handleEmailValidation}/>
            <label htmlFor="message">Message</label>
            <textarea rows={5} className={`popup-textarea `} >

            </textarea>
                <button className="popup-send-btn">Send</button>
           </div>
        </div>
    );
}
export default ContactUs;