import { useState } from "react"
import "./navbar.css"
import logo from "../assets/Logo.png"
import subscribe from "../assets/subscribe.png"
import donate from '../assets/heart.png'
import Subscribe from "./subscribe"
import ContactUs from "./contactUs"
import { Link } from "react-router-dom";

const Navbar = () =>{
    const [showSubscription,setShowSubscription]= useState(false);
    const [showContactUs, setShowContactUs]= useState(false);
    const [activeLink,setActiveLink]= useState(null);
    console.log(activeLink);

    const handleShowContact = (e) =>{
        e.preventDefault();
        setShowContactUs(!showContactUs);
        setActiveLink("ContactUs")
    }
    const handleHideContact = () =>{
        setShowContactUs(false);
        setActiveLink('');
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
                <li className={(activeLink==='Home')?'active-link':''}><Link onClick={()=> setActiveLink("Home")}  to="Home">Home</Link></li>
                <li className={(activeLink==='AboutUs')?'active-link':''}><Link onClick={()=> setActiveLink("AboutUs")} to="aboutus" >About Us</Link></li>
                <li className={(activeLink==='News')?'active-link':''}><Link onClick={()=> setActiveLink("News")} to="news" >News</Link></li>
                <li className={(activeLink==='LebnenEle')?'active-link':''}><Link onClick={()=> setActiveLink("LebneneEle")} to="#" >Lebnene Ele</Link></li>
                <li className={(activeLink==='ContactUs')?'active-link':''}><Link onClick={handleShowContact} to="#" >Contact Us</Link></li>
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