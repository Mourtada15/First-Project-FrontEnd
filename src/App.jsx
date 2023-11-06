import Navbar from "./components/navbar";
import "./App.css"
import Subscribe from "./components/subscribe";
import { Outlet } from "react-router-dom";
const App = () =>{
    return(
        <>
        <Navbar/>
        </>
    );
}

export default App;