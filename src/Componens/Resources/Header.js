import React from 'react';
import header from "../../Home/Images/header.PNG"
import h1 from "../../Home/Images/h1.PNG";
import h2 from "../../Home/Images/h2.PNG"
import h3 from "../../Home/Images/h3.PNG"
import {useNavigate} from "react-router-dom";
import "../../Home/Styles.css";

export const Header = () => {
    let navigate = useNavigate();
    const handleOnClick = () =>{
        navigate('/registration')
    }
    return (
        <div>
            <div className="header container">
                <div className="my-5">
                    <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Delight your customers with effortless customer
                        service</h1>
                    <p style={{fontSize: "1.5vw"}}>Engage in more meaningful conversations every day, across every
                        channel, with every customer</p>
                    <button className="btn p-3 my-2"
                            style={{backgroundColor: "#5D35D7", color: "white"}}
                            onClick={handleOnClick}
                    ><strong>START FREE TRIAL</strong></button>
                </div>
                <div>
                    <img src={header} alt="header" style={{width:"40vw"}}/>
                </div>
            </div>
            <div style={{backgroundColor: "rgb(247,247,247)"}}>
                <div className="container">
                    <div className="pt-5 pb-4">
                        <h1><strong>Explore why Freshdesk Omnichannel Suite is the most complete support
                            solution with the fastest time-to-value.</strong></h1>
                        <p style={{fontSize: "1.5vw"}}>Reimagine more meaningful conversations and turn service agents
                            into customer champions. Launch customer and employee delight in under 3 months!</p>
                    </div>
                    <div className="all-cards my-5">
                        <div className="cards">
                            <img src={h1} alt="h1" />
                            <p><strong>Delight customers effortlessly</strong></p>
                            <p>
                                Simplify every experience and put customers back in control by offering the support they expect, in their channel of choice.s</p>
                        </div>
                        <div className="cards">
                            <img src={h2} alt="h2" />
                            <p className="my-3"><strong>Make every agent a customer champion</strong></p>
                            <p>
                                Give agents more context and automation to proactively understand customer needs and offer the next-best-action.
                            </p>
                        </div>
                        <div className="cards">
                            <img src={h3} alt="h3" />
                            <p><strong>Skyrocket the speed of service</strong></p>
                            <p>
                                Achieve speed in delivering remarkable customer service. Our customers realize service productivity gains in under 3 months, and innovate faster with the NEO platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
