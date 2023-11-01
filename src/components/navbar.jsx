import { useState } from "react"
import "./navbar.css"
import logo from "../assets/Logo.png"
import subscribe from "../assets/subscribe.png"
import donate from '../assets/heart.png'
import Subscribe from "./subscribe"
import ContactUs from "./contactUs"
const Navbar = () =>{
    const [showSubscription,setShowSubscription]= useState(false);
    const [showContactUs, setShowContactUs]= useState(false);


    const handleShowContact = (e) =>{
        e.preventDefault();
        setShowContactUs(!showContactUs);
    }
    const handleHideContact = () =>{
        setShowContactUs(false);
    }

    const handleShowSubscription = () =>{
        setShowSubscription(!showSubscription);
    }
    const handleHideSubscription = () =>{
        setShowSubscription(false);
    }
    return(
<header className="navbar-header">
    <div className="header-section">
        <img src={logo} alt="logo-TPLL" className="header-logo"/>
        <div className="header-btns">
            <button onClick={handleShowSubscription} className="header-subscribe-btn place-items-center">
                <img src={subscribe} alt="subscribe to newsletter" />
                <p>Join our newsletter</p>
            </button>
            <button className="header-donate-btn place-items-center">
                <img src={donate} alt="donate-heart"/>
                <p>Donate</p>
            </button>
        </div>
    </div>
    <div className="header-section">
        <div className="nav-items">
            <ul>
                <li><a style={{color:"#C0202E"}} href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Lebnene Ele</a></li>
                <li><a onClick={handleShowContact} href="#">Contact Us</a></li>
            </ul>
        </div>
        <input type="text" placeholder="search..." className="header-search-bar"/>
    </div>
    {showSubscription?<Subscribe onHide={handleHideSubscription}/>:null}
    {showContactUs?<ContactUs onHide={handleHideContact}/>:null}


</header>
    );
}

export default Navbar;