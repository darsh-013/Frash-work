import React from 'react';
import header from "./Images/header.PNG";
import pic from "../../Home/Images/pic.PNG";
import p1 from "./Images/p1.PNG";
import p2 from "./Images/p2.PNG";
import p3 from "./Images/p3.PNG";
import "../../Home/Styles.css";
import Footer from "../../Footer";
import {useNavigate} from "react-router-dom";

export const Support = () => {
    let navigate = useNavigate();
    const handleOnClick = () =>{
        navigate('/registration');
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
                    <img src={header} alt="header" style={{width: "40vw"}}/>
                </div>
            </div>
            <div className="text-center">
                <div className="my-2">
                    <h2 style={{fontWeight: "bold", justifyContent: "center"}}>Trusted by 50,000+ businesses</h2>
                </div>
                <div className="my-5">
                    <img src={pic} alt="pic" style={{width: "80vw"}}/>
                </div>
            </div>
            <div style={{backgroundColor: "rgb(247,247,247)"}}>
                <div className="container text-center">
                    <div className="pt-5 pb-4">
                        <h1><strong>Explore why Freshdesk Omnichannel Suite is the most complete support
                            solution with the fastest time-to-value.</strong></h1>
                        <p style={{fontSize: "1.5vw"}}>Reimagine more meaningful conversations and turn service agents
                            into customer champions. Launch customer and employee delight in under 3 months!</p>
                    </div>
                    <div className="all-cards my-5">
                        <div className="cards">
                            <img src={p1} alt="p1"/>
                            <p><strong>Faster service delight</strong></p>
                            <p>
                                Make it easy for agents to work collaboratively and provide speedy responses to
                                customers. Prioritize, categorize, and assign tickets to the right agents and deliver
                                customer delight.</p>
                        </div>
                        <div className="cards">
                            <img src={p2} alt="p2"/>
                            <p className="my-3"><strong>Intelligent automations</strong></p>
                            <p>
                                Automate agent workflows and resolve routine questions with bots and AI. Say good-bye to
                                mundane processes by learning from past tickets to proactively suggest new resolutions.
                            </p>
                        </div>
                        <div className="cards">
                            <img src={p3} alt="p3"/>
                            <p><strong>Intuitively collaborative</strong></p>
                            <p>
                                Fuel teamwork and collaboration to solve issues faster. Rapidly engage teammates for
                                discussions right inside tickets that retain visibility and deliver consistent customer
                                care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default Support;
