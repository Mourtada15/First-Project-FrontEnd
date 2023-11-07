import Navbar from "./components/navbar";
import "./App.css"
import { Outlet } from "react-router-dom";
const App = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    );
}

export default App;