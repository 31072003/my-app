import React from "react";
import Headers from "./components/Headers";
import { Outlet } from "react-router-dom";


const Home = () => {

    return (

        <div>
            {/* <h1 className="home">hello welcome to Home page </h1> */}
            <Headers />
            {/* <button>home ..</button> */}
            <Outlet/>
        </div>
        
    )
}
export default Home;

