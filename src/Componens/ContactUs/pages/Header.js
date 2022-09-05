import React from 'react';
import header from "../Images/header.jpg";
import phone from "../Images/phone.PNG";
import chat from '../Images/chat.PNG'
import '../Styles.css';

export const Header = () => {
    return (
        <div>
            <div className="c-header container">
                <div className="">
                    <h1 style={{fontSize: "3vw", fontWeight: "bold"}}>Delight your customers with effortless customer
                        service</h1>
                    <p style={{fontSize: "1.5vw"}}>Engage in more meaningful conversations every day, across every
                        channel, with every customer</p>
                    <button className="btn p-3 my-2" style={{backgroundColor: "#0B1320", color: "white"}}><strong>START
                        FREE TRIAL</strong></button>
                </div>
                <div>
                    <img src={header} alt="header" style={{height:"20rem", width:'100%'}} />
                </div>
            </div>
            <div className="container">
                <div className="contact-card my-5 text-center">
                    <div className="card-item my-5">
                        <img src={phone} alt="phone" className=""/>
                        <h5 className="my-5">Talk to Sales</h5>
                        <p className="my-2 mx-5">Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales
                            team.</p>
                        <h6 style={{color: "#0B1320"}} className="my-5">+1 877 929 0687</h6>
                    </div>
                    <div className="card-item my-5">
                        <img src={chat} alt="chat" className=""/>
                        <h5 className="my-5">Contact Customer Support</h5>
                        <p className="my-2 mx-5">Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.</p>
                        <button className="btn my-4" style={{color:'#0B1320'}}><strong>Contact Support</strong></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Header;
