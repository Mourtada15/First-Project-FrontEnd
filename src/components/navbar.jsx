import { useState } from "react"
import "./navbar.css"
import logo from "../assets/Logo.png"
import subscribe from "../assets/subscribe.png"
import donate from '../assets/heart.png'
import Subscribe from "./subscribe"
import ContactUs from "./contactUs"
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    const [showSubscription,setShowSubscription]= useState(false);
    const [showContactUs, setShowContactUs]= useState(false);
    const [activeLink,setActiveLink]= useState(null);
    console.log(activeLink);

    const handleShowContact = (e) =>{
        e.preventDefault();
        setShowContactUs(!showContactUs);
        document.querySelector('.overlay').style.display = 'block';
        setActiveLink("ContactUs")
    }
    const handleHideContact = () =>{
        document.querySelector('.overlay').style.display = 'none';
        setShowContactUs(false);
        setActiveLink('');
    }

    const handleShowSubscription = () =>{
        setShowSubscription(!showSubscription);
        document.querySelector('.overlay').style.display = 'block';
    }
    const handleHideSubscription = () =>{
        document.querySelector('.overlay').style.display = 'none';
        setShowSubscription(false);
    }
    const handleCloseOverlay = () => {
        document.querySelector('.overlay').style.display = 'none';
        setShowContactUs(false);
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
                <li ><NavLink activeClassName="active-link"  to="Home">Home</NavLink></li>
                <li ><NavLink activeClassName="active-link" to="aboutus" >About Us</NavLink></li>
                <li ><NavLink activeClassName="active-link" to="news" >News</NavLink></li>
                <li className={`dropdown`}><NavLink activeClassName="active-link" to="#" >Lebnene Ele</NavLink>
                <div className="dropdown-content">
                        <a href="#">Our Story</a>
                        <a href="#">Milestones</a>
                        <a href="#">From Our Library to Yours</a>
                    </div>
                    </li>
                <li className={(activeLink==='ContactUs')?'active-link':''}><NavLink activeClassName="active-link" onClick={handleShowContact} to="#" >Contact Us</NavLink></li>
            </ul>
        </div>
        <input type="text" placeholder="search..." className="header-search-bar"/>
    </div>
    <div className="overlay" onClick={handleCloseOverlay}></div>
    {showSubscription?<Subscribe onHide={handleHideSubscription}/>:null}
    {showContactUs?<ContactUs onHide={handleHideContact}/>:null}


</header>
    );
}

export default Navbar;