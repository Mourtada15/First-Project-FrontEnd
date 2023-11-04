import "./News.css";
import Navbar from "./components/navbar";
import coffee1 from './assets/pexels-kseniya-budko-8100531.jpg'
import profile from "./assets/user.png"
const News = () =>{
    return (
        <>
        <Navbar/>
        <div className="news">
            <div className="news-posts">
                <a href="#">
                    <Post/>
                </a>
                <a href="#">
                    <Post/>
                </a>
                <a href="#">
                    <Post/>
                </a>
                <a href="#">
                    <Post/>
                </a>
                <a href="#">
                    <Post/>
                </a>
                <a href="#">
                    <Post/>
                </a>
            </div>

        </div>
        </>
    );
}

export const Post = () =>{
    return (
        <>
        <div className="post">
                    
                    <div className="post-image">
                        <img src={coffee1} alt="" />
                    </div>
                    <div className="post-details">
                        <div className="article">
                            <div className="post-metadata">
                                <div className="post-metadata--flex-container">
                                    <div className="post-metadata--img">
                                            <img src={profile} alt="" />
                                    </div>
                                    <div className="post-metadata--admin">
                                        <span className="post-metadata--name">
                                            Karen
                                        </span>
                                        <ul className="post-metadata--time">
                                            <li>Sep 12</li>
                                            <li> . </li>
                                            <li>2 min</li>

                                        </ul>

                                    </div>

                                </div>
                            </div>
                            <div className="post-body">
                                <h1>This is the first post </h1>
                                <p>We decided on a farmers market theme for her first birthday because it was super cute, played on the idea of celebrating her growth, and it <span>...read more</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default News;