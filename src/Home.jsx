import Navbar from "./components/navbar";
import "./home.css"

const Home = () =>{

    return(
        <>
        <Navbar/>
        <section className="video-section">
            <div className="video"></div>

        </section>
        </>
    );
}

export default Home;