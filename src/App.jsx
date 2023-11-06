import Navbar from "./components/navbar";
import "./App.css"
import Lebnene_Ele from "./Pages/Lebnene_Ele/Lebnene_Ele";

import Subscribe from "./components/subscribe";
import { Outlet } from "react-router-dom";
const App = () =>{
    return(
        <>
        <Navbar/>
        <Subscribe/>
        </>
    );
}

export default App;