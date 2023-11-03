import Navbar from "./components/navbar";
import "./App.css"
import Lebnene_Ele from "./Pages/Lebnene_Ele/Lebnene_Ele";

import Subscribe from "./components/subscribe";
const App = () =>{
    return(
        <>
        <Navbar/>
        <Lebnene_Ele />
        <Subscribe/>
        </>
    );
}

export default App;