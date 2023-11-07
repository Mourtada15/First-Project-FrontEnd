import profile from "../assets/user.png"
import coffee1 from '../assets/pexels-kseniya-budko-8100531.jpg'

import './article.css'
import { useLoaderData } from "react-router-dom"
const Article = () =>{
    const {article,recentArticles}= useLoaderData();
    console.log(article);
    console.log(recentArticles);
    return(
        <>
        <main className="post-main">
            <div className="post-details">
                <article className="post-article">
                    <div className="post-article--details">
                        <div className="post-article-metadata">
                            <ul className="metadata-admin-info">
                                <li>
                                    <span>
                                        <div className="img-name-flex">
                                        <div className="article-metadata--img">
                                            <img src={profile} alt="" />
                                    </div>
                                    <span className="article-metadata--name">
                                            Karen
                                        </span>
                                        </div>
                                    </span>
                                    </li>
                                <li><span>.</span></li>
                                <li><span>March 9, 2022</span></li>
                                <li><span>.</span></li>
                                <li><span>4 min</span></li>
                            </ul>
                            <h1 className="post-metadata-title">This is the first Post</h1>
                        </div>
                        <div className="article-body">
                            <div className="article-body-img">
                            <img src={coffee1} alt="" />
                            </div>
                            <br className="sep-line" />
                            <div>
                                <p>
                                As an interior designer, I love the idea of creating a backdrop that suits my client's needs and sourcing every last detail on a deadline to create that grand reveal. But when it comes to designing for myself, taking time to live with the home often makes things better. We are constantly evolving, and as we change so do our needs and tastes. While the rest of our home is primarily light and airy, I was craving a cocoon-like space where we could snuggle cozily. The more I thought about it, the more I warmed up to the idea of a rich brown grasscloth wall covering to swathe the walls in. Although the room is small, it is not enclosed on all sides and has 10 foot ceilings which keeps it feeling spacious. And so, the layering began...
                                </p>
                            <br className="sep-line" />

                                <p>As an interior designer, I love the idea of creating a backdrop that suits my client's needs and sourcing every last detail on a deadline to create that grand reveal. But when it comes to designing for myself, taking time to live with the home often makes things better. We are constantly evolving, and as we change so do our needs and tastes. While the rest of our home is primarily light and airy, I was craving a cocoon-like space where we could snuggle cozily. The more I thought about it, the more I warmed up to the idea of a rich brown grasscloth wall covering to swathe the walls in. Although the room is small, it is not enclosed on all sides and has 10 foot ceilings which keeps it feeling spacious. And so, the layering began...</p>
                            </div>
                        </div>
                        <div className="post-footer">
                            <div className="line-separator"></div>
                            <div className="post-footer-flex">
                                <div className="social-links">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" fill="rgb(44,44,43)" className="facebook"><path d="M8.08865986,17 L8.08865986,10.2073504 L5.7890625,10.2073504 L5.7890625,7.42194226 L8.08865986,7.42194226 L8.08865986,5.08269399 C8.08865986,3.38142605 9.46779813,2.00228778 11.1690661,2.00228778 L13.5731201,2.00228778 L13.5731201,4.50700008 L11.8528988,4.50700008 C11.3123209,4.50700008 10.874068,4.94525303 10.874068,5.48583089 L10.874068,7.42198102 L13.5299033,7.42198102 L13.1628515,10.2073892 L10.874068,10.2073892 L10.874068,17 L8.08865986,17 Z"></path></svg></button>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" fill="rgb(44,44,43)" className="twitter"><path d="M18,4.65548179 C17.3664558,4.9413444 16.6940105,5.12876845 16.0053333,5.21143556 C16.7308774,4.76869949 17.2742158,4.07523994 17.5353333,3.25870539 C16.8519351,3.66952531 16.1046338,3.95967186 15.3253333,4.116758 C14.3449436,3.05903229 12.8270486,2.71461351 11.4952673,3.24769481 C10.1634861,3.78077611 9.28740204,5.08344943 9.28466667,6.53469742 C9.28603297,6.80525838 9.31643401,7.07486596 9.37533333,7.33876278 C6.57168283,7.1960128 3.95976248,5.85317869 2.19,3.64465676 C1.87608497,4.18262214 1.71160854,4.79663908 1.714,5.42164122 C1.61438697,6.56033644 2.09783469,7.6712643 2.99466667,8.36452045 C2.36720064,8.27274888 1.74900117,8.12475716 1.14733333,7.9222845 L1.14733333,7.96708243 C1.26738074,9.69877048 2.5327167,11.1265052 4.21866667,11.4326042 C3.96602896,11.5152522 3.7021383,11.5571156 3.43666667,11.55666 C3.23854288,11.557327 3.0409356,11.5361435 2.84733333,11.4934834 C3.31534048,12.9376046 4.63446966,13.9228162 6.134,13.9481801 C4.90488101,14.9328579 3.38271245,15.4661427 1.816,15.4609716 C1.5432586,15.4614617 1.27074516,15.4449665 1,15.411579 C4.05446938,17.394368 7.93290025,17.5303291 11.1152384,15.7661758 C14.2975765,14.0020226 16.2768505,10.6187983 16.2773333,6.94247342 C16.2773333,6.789701 16.266,6.63692858 16.266,6.4830075 C16.9469737,5.98359293 17.5342367,5.3646551 18,4.65548179 L18,4.65548179 Z"></path></svg></button>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" fill="rgb(44,44,43)" className="linkedin"><path d="M17,17 L13.89343,17 L13.89343,12.1275733 C13.89343,10.9651251 13.87218,9.47069458 12.2781416,9.47069458 C10.660379,9.47069458 10.4126568,10.7365137 10.4126568,12.0434478 L10.4126568,17 L7.30623235,17 L7.30623235,6.98060885 L10.2883591,6.98060885 L10.2883591,8.3495072 L10.3296946,8.3495072 C10.7445056,7.56190587 11.7585364,6.7312941 13.2709225,6.7312941 C16.418828,6.7312941 17,8.80643844 17,11.5041407 L17,17 Z M3.80289931,5.61098151 C2.80647978,5.61098151 2,4.80165627 2,3.80498046 C2,2.80903365 2.80647978,2 3.80289931,2 C4.79669898,2 5.60434314,2.80903365 5.60434314,3.80498046 C5.60434314,4.80165627 4.79669898,5.61098151 3.80289931,5.61098151 Z M2.24786773,17 L2.24786773,6.98060885 L5.35662096,6.98060885 L5.35662096,17 L2.24786773,17 Z"></path></svg></button>
                                </div>
                                <ul>
                                    <li><a href="#">TPLL</a></li>
                                    <li>.</li>
                                    <li><a href="#">Posts</a></li>
                                </ul>
                            </div>
                            <div className="line-separator"></div>

                        </div>

                    </div>
                </article>
                <div className="recent-posts">
                    <div className="recent-posts--header">
                        <h2>Recent Posts</h2>
                        <a href="#">See All</a>
                    </div>
                    <div className="recent-posts--list">
                        <a href="#">
                        <div className="post-card">
                            <article>
                                <div className="card-img">
                                <img src={coffee1} alt="" />
                                </div>
                                <div className="post-card--body">
                                    <h3>A Recent Post</h3>
                            <div className="line-separator"></div>
                            <div className="recent-post--description">
                            <p className="">
                            As an interior designer, I love the idea of creating a backdrop
                            </p>
                            </div>  
                                </div>

                            </article>
                        </div>
                        </a>
                        <a href="#">
                        <div className="post-card">
                            <article>
                                <div className="card-img">
                                <img src={coffee1} alt="" />
                                </div>
                                <div className="post-card--body">
                                    <h3>A Recent Post</h3>
                            <div className="line-separator"></div>
                            <div className="recent-post--description">
                            <p className="">
                            As an interior designer, I love the idea of creating a backdrop
                            </p>
                            </div>  
                                </div>

                            </article>
                        </div>
                        </a>
                        <a href="#">
                        <div className="post-card">
                            <article>
                                <div className="card-img">
                                <img src={coffee1} alt="" />
                                </div>
                                <div className="post-card--body">
                                    <h3>A Recent Post</h3>
                            <div className="line-separator"></div>
                            <div className="recent-post--description">
                            <p className="">
                            As an interior designer, I love the idea of creating a backdrop
                            </p>
                            </div>  
                                </div>

                            </article>
                        </div>
                        </a>

                    </div>

                </div>
            </div>
        </main>
        </>
    );
}

export default Article;