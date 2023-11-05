import Navbar from "../../components/navbar";
import "../Lebnene_Ele/Lebnene_Ele.css";

const Lebnene_Ele = () => {

    return (
        <>
            <Navbar />
            <div className="lebneneEle-img-center"><img src="http://picsum.photos/1387/1050" alt="LebneneEle" className="lebneneEle-img"/></div>
            <div className="wrapper">
                <section className="lebneneEle-story">
                    <h2 className="lebneneEle-h3">Our <span className="h3-red">Story</span></h2>
                    <p className="lebneneEle-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, assumenda repudiandae est quisquam itaque aspernatur quis atque. Saepe eveniet, assumenda illo quos vero impedit eligendi a autem quod cupiditate voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis officia quaerat molestias ipsa cum temporibus corrupti necessitatibus laudantium. Suscipit velit nostrum sit facere, fugiat veniam exercitationem! Natus, eligendi vitae!<br></br><br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet facilis animi odit culpa veniam perspiciatis cum ratione. Officia reprehenderit assumenda earum error necessitatibus dignissimos accusamus nulla consectetur nesciunt quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est tempora doloremque quasi at numquam assumenda molestiae, quis error pariatur suscipit ipsa sunt eos dignissimos sit labore fugit unde dolorum!
                    </p>
                </section>
                <section className="lebneneEle-library">
                    <h2 className="lebneneEle-h3">Mile<span className="h3-red">stones</span></h2>
                </section>
                    <div className="article-top">
                        <article className="lebneneEle-article">
                            <div className="f-article"><img src="http://picsum.photos/1081" alt="article" className="article-img"/></div>
                            <div className="s-article">
                            <h4>The First Article</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptatibus labore quisquam tenetur quod beatae animi tempore, voluptatum, amet veritatis aliquam ea nisi? Illo doloremque quas sint accusantium qui aut?</p>
                            <button className="read-btn">Read full story</button>
                            </div>
                        </article>
                        <article className="lebneneEle-article">
                            
                            <div className="s-article">
                            <h4>The Second Article</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptatibus labore quisquam tenetur quod beatae animi tempore, voluptatum, amet veritatis aliquam ea nisi? Illo doloremque quas sint accusantium qui aut?</p>
                            <button className="read-btn">Read full story</button>
                            </div>
                            <div className="f-article"><img src="http://picsum.photos/1080" alt="article" className="article-img"/></div>
                        </article>
                        <div className="readmore-div"><button className="readmore-btn">Read More</button></div>
                    </div>
                <section className="lebneneEle-library">
                    <h2 className="lebneneEle-h3">From Our Library to <span className="h3-red">Yours</span></h2>
                    <p className="lebneneEle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim doloremque aliquid placeat, suscipit laudantium atque illum commodi, eos consequatur distinctio quisquam quos, incidunt consectetur beatae harum fugit debitis molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque est ea autem aperiam beatae, fuga, voluptas ducimus iste illum adipisci culpa sunt eos tempora minus incidunt reiciendis mollitia soluta!
                    </p>
                </section>
            </div>
        </>
    );
}
 
export default Lebnene_Ele;