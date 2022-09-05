import React from 'react';
import header from "./Images/header.PNG";
import owenership from "./Images/owenership.PNG"
import gartner from "./Images/gartner.jpg"
import dcissue from './Images/dcissue.PNG';
import './Styles.css';
import Footer from "../../Footer";
export const Features = () => {
    return (
        <div>
            <div className="" style={{backgroundColor:'#F7F7F7'}}>
                <div className="header container" >
                    <div className="my-5" >
                        <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>It takes a team to deliver great customer support</h1>
                        <p style={{fontSize: "1.5vw"}}>Freshdesk helps you work together with team members from across the company to provide quick and consistent answers to your customers.</p>
                        <button className="btn p-3 my-2" style={{backgroundColor: "#5D35D7", color: "white"}}><strong>START
                            FREE TRIAL</strong></button>
                    </div>
                    <div>
                        <img src={header} alt="header" style={{width:"40vw"}}/>
                    </div>
                </div>
            </div>
            <div className="header container" >
                <div className="my-5" >
                    <h2 style={{fontSize: "3vw", fontWeight: "bold"}}>Get better visibility with shared ownership</h2>
                    <p >Share ownership of tickets with other teams without losing visibility and access to it, so that teams can work on the issue in parallel and stay in the loop regarding progress on the ticket.
                        With the customer-facing agent having up-to-date information concerning the issue, you always have an answer for the customer.</p>
                </div>
                <div>
                    <img src={owenership} alt="header" style={{width:"40vw"}}/>
                </div>
            </div>
            <div className="container my-5 p-5" style={{backgroundColor:'#F7F7F7'}}>
                <h5><strong>COLLABORATION SHOULDN’T BE THIS HARD</strong></h5>
                <h5>Support agents often need input from other internal teams to resolve an issue. However,
                    without visibility into the progress being made by the other team, agents lose a lot of time in back-and-forth communications.
                    All context is lost, resolution becomes delayed and the quality of your service takes a hit.</h5>
            </div>
            <div className="header container" >
                <div>
                    <img src={dcissue} alt="dcissue" style={{width:"40vw"}}/>
                </div>
                <div className="my-5 mx-3" >
                    <h2 style={{fontSize: "3vw", fontWeight: "bold"}}>Divide and conquer issues with parent-child ticketing</h2>
                    <p>Resolve issues faster by splitting tickets into smaller tasks that respective teams can work on in parallel.
                        With Parent-child Ticketing, the ticket is resolved only if every team completes the task assigned to them,
                        so that each internal team is accountable for their role, and the ticket can be resolved only if every team has played a role.</p>
                </div>
            </div>
            <div className="container my-5 p-5 text-center gartner">
                <img src={gartner} alt="gartner" />
                <h5 className="text-center mx-5">Freshdesk recognized as the only 'Visionary' again in the 2021 Gartner Magic Quadrant for CRM Customer Engagement Center.</h5>
                <button className="btn p-3 my-2" style={{backgroundColor: "#0B1320", color: "white"}}><strong>Read More</strong></button>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default Features;
