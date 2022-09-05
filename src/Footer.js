import React from 'react';
import logo from './logo.svg'
import './App.css'

export const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor: "#0B1320"}}>
                <div className='p-5 text-center'>
                    <h1 style={{color:"white"}}>Start today, and enjoy our free trial.</h1>
                    <p className="my-3" style={{color:"white"}}>Start today, and enjoy our free trial.</p>
                    <button className="btn p-3 my-3" style={{backgroundColor: "white"}}><strong>START
                        FREE TRIAL</strong>
                    </button>
                </div>
            </div>
            <div className="my-5 footer container">
                <div className="footer-1 mx-5" >
                    <div>
                        <img src={logo} alt="logo" style={{width:"70%"}}/>
                        <ul>
                            <li>Freshdesk</li>
                            <li>Freshchat</li>
                            <li>Freshsales</li>
                            <li>Freshmarketer</li>
                            <li>Freshservice</li>
                            <li>Freshteam</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{listStyleType:'none'}}>
                            <strong><li>COMPANY</li></strong>
                            <li>About</li>
                            <li>Leadership</li>
                            <li>board of Director</li>
                            <li>investor</li>
                            <li>Affiliates</li>
                            <li>partners</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="footer-2">
                        <div>
                            <ul style={{listStyleType:'none'}}>
                                <strong><li>FRESHDESK</li></strong>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Apps</li>
                                <li>Customers</li>
                                <li>Training</li>
                                <li>API & Developers</li>
                                <li>Resources</li>
                                <li>Blog</li>
                                <li>Free helpdesk software</li>
                            </ul>
                        </div>
                        <div>
                            <ul style={{listStyleType:'none'}}>
                                <strong><li>TOP FEATURES</li></strong>
                                <li>Ticketing</li>
                                <li>Collaboration</li>
                                <li>Omnichannel Helpdesk</li>
                                <li>Automations</li>
                                <li>Self Service</li>
                                <li>Field Service Management</li>
                                <li>Reporting & Analytics</li>
                                <li>Customizations</li>
                                <li>Secure Helpdesk</li>
                            </ul>
                        </div>
                        <div>
                            <ul style={{listStyleType:'none'}}>
                                <strong><li>COMPANY</li></strong>
                                <li>Enterprise</li>
                                <li>EMB</li>
                                <li>E-commerce</li>
                                <li>Healthcare</li>
                                <li>Education</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-4 my-4 pt-4" style={{borderTop:'1px solid gray'}}>
                        <h5>SALES AND SUPPORT</h5>
                        <ul style={{listStyleType:"square"}}>
                            <li>+1-866-832-3090</li>
                            <li>support@freshdesk.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#F1F1F1",height:"4rem"}} className="text-center d-flex align-items-center">
                <div className="footer-end container ">
                    <p>Terms of Service</p>
                    <p>Privacy Notice</p>
                    <p>Takedown Policy</p>
                    <p>Anti-Modern Slavery Statement</p>
                    <p>Security</p>
                    <p>Unsubscribe</p>
                </div>
                <div>
                    <p>Copyright © Freshworks Inc. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
