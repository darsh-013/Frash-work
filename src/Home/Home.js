import React from 'react';
import Navbar from "../Navbar";
import Header from "./pages/Header";
import Hamley from "./pages/Hamley";
import FreshDesk from "./pages/FreshDesk";
import Footer from "../Footer";
import "../App.css";


export const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Header/>
            </div>
            <div>
                <Hamley/>
            </div>
            <div>
                <FreshDesk/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;
