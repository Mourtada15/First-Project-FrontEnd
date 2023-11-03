import { useState } from 'react';
import './subscribe.css'
// eslint-disable-next-line react/prop-types
const Subscribe = ({onHide}) =>{
    const [email,setEmail]= useState('');
    const [inputBackground, setInputBackground]= useState("white");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    }
    const handleFormValidation = () =>{
       if(email =="" || !emailRegex.test(email)){
            setInputBackground("notValid");
        }else{
             setInputBackground("white")
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
            <h1 className='pop
            up-title'>Join our newsletter</h1>
           </header>
           <div className="popup-body">
            <p className='popup-note'>Enter your email here to join our newsletter</p>
            <input type="text" value={email} className={`popup-input ${inputBackground} `} placeholder='Email' onChange={handleEmailInput}/>
                <button onClick={handleFormValidation} className="popup-send-btn">Send</button>
           </div>
        </div>
    );
}
export default Subscribe;