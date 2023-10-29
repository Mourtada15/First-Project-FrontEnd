import "./navbar.css"
import logo from "../assets/Logo.png"
import subscribe from "../assets/subscribe.png"
import donate from '../assets/heart.png'
const Navbar = () =>{
    return(
<header>
    <div className="header-section">
        <img src={logo} alt="logo-TPLL" className="header-logo"/>
        <div className="header-btns">
            <button className="header-subscribe-btn place-items-center">
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
                <li>Home</li>
                <li>About Us</li>
                <li>News</li>
                <li>Lebnene Ele</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <input type="text" placeholder="search..." className="header-search-bar"/>
    </div>

</header>
    );
}

export default Navbar;