import { useState } from "react";
import Navbar from "./components/navbar";
import leftArrow from './assets/left-arrow.png'
import rightArrow from './assets/right-arrow.png'
import introVideo from"./assets/intro.mp4"
import coffee1 from "./assets/pexels-kseniya-budko-8100531.jpg"
import coffee2 from "./assets/pexels-maksim-goncharenok-4422872.jpg"
import coffee3 from "./assets/pexels-maksim-goncharenok-4737765.jpg"
import coffee4 from "./assets/pexels-spotwizardlee-7333831.jpg"
import coffee5 from "./assets/pexels-tyler-nix-2396220.jpg"

import "./home.css"

const images =[coffee1,coffee2,coffee3,coffee4,coffee5];

const Home = () =>{
    const [index,setIndex]= useState(0);
    const [visible,setVisible]= useState(false);
    const length=images.length;
    const handleShowDetails = () =>{
            setVisible(true);
    }
    const handleHideDetails = ()=>{
        setVisible(false);
    }
    const handlePrevImage = ()=>{
        setIndex((index-1+length) % length);
    }
    const handleNextChange = () =>{
            setIndex((index+1) % length);
    }
    console.log(index);
    return(
        <>
        <Navbar/>
        <section className="body-section">
            <div className="video-section">
                <video className="video" autoPlay loop muted controls preload="auto">
                    <source src={introVideo} type="video/mp4"/>
                </video>
            </div>
            <div className="carousel-section">
                <div className="title">
                    <h1>LATEST <span className="red">NEWS</span></h1>
                </div>
                <div className="carousel">
                    <div className="carousel-container">
                    <div className="item1"><img src={images[(index-1+length)%length]} alt="" width={355} height={360}/></div>
                        <div className="item2" onMouseEnter={handleShowDetails} onMouseLeave={handleHideDetails}>
                            <img src={images[index]} alt=""  />
                           {visible? <div className="details">
                                <h1 className="details-title">
                                 New Title
                                </h1>
                                <p className="description">
                                some description some description some description some description some description some description some description some description some description
                                </p>
                            </div>:null}
                        </div>
                       <div className="item3"><img src={images[(index+1)%length]} alt="" width={355} height={360}/></div>
                        <div className="arrows" onMouseEnter={handleShowDetails}>
                            <button className="carousel-btns" onClick={handlePrevImage}><img src={leftArrow} alt="prev button" width={60} height={60} /></button>
                            <button className="carousel-btns" onClick={handleNextChange}><img src={rightArrow} alt="next button" width={60} height={60}/></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;