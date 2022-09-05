import React from 'react';
import Header from "./pages/Header";
import Middle from "./pages/Middle";
import Footer from "../../Footer";
import "./Styles.css"


export const Resources = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            < div>
                <Middle/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default Resources;
