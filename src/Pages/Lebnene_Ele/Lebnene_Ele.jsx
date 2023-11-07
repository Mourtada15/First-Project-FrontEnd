import Slider from "../../components/Slider";
import Navbar from "../../components/navbar";
import "../Lebnene_Ele/Lebnene_Ele.css";

const Lebnene_Ele = () => {

    return (
        <>
            <Navbar />
            <div className="lebneneEle-img-center"><img src="http://picsum.photos/1387/1050" alt="LebneneEle" className="lebneneEle-img"/></div>
            <div className="wrapper">
                <section className="lebneneEle-story">
                    <h2 className="lebneneEle-h3">OUR <span className="h3-red">STORY</span></h2>
                    <p className="lebneneEle-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, assumenda repudiandae est quisquam itaque aspernatur quis atque. Saepe eveniet, assumenda illo quos vero impedit eligendi a autem quod cupiditate voluptatem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis officia quaerat molestias ipsa cum temporibus corrupti necessitatibus laudantium. Suscipit velit nostrum sit facere, fugiat veniam exercitationem! Natus, eligendi vitae!<br></br><br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet facilis animi odit culpa veniam perspiciatis cum ratione. Officia reprehenderit assumenda earum error necessitatibus dignissimos accusamus nulla consectetur nesciunt quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est tempora doloremque quasi at numquam assumenda molestiae, quis error pariatur suscipit ipsa sunt eos dignissimos sit labore fugit unde dolorum!
                    </p>
                </section>
                <section className="lebneneEle-library">
                    <h2 className="lebneneEle-h3">MILE<span className="h3-red">STONES</span></h2>
                </section>
                <Slider />
                <section className="lebneneEle-library">
                    <h2 className="lebneneEle-h3">FROM OUR LIBRARY TO <span className="h3-red">YOURS</span></h2>
                    <p className="lebneneEle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim doloremque aliquid placeat, suscipit laudantium atque illum commodi, eos consequatur distinctio quisquam quos, incidunt consectetur beatae harum fugit debitis molestias.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque est ea autem aperiam beatae, fuga, voluptas ducimus iste illum adipisci culpa sunt eos tempora minus incidunt reiciendis mollitia soluta!
                    </p>
                </section>
            </div>
        </>
    );
}
 
export default Lebnene_Ele;