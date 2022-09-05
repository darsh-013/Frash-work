import React from 'react';
import p1 from '../Images/p1.png';
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.png';
import p4 from '../Images/p4.png';
import "../Styles.css";

export const FreshDesk = () => {
    return (
        <div>
            <div className="my-5 container">
                <h2><strong>Why customers love Freshdesk</strong></h2>
                <div className="all-cards my-5">
                <div className="card mx-4" style={{border:"none"}}>
                    <iframe src="https://www.youtube.com/embed/z1KDBCINis8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <p className="my-2"><strong>Freshdesk helped Travix, a global online travel company, navigate customer service during a global crisis</strong></p>
                    <button className="btn" style={{color:"#5D35D7"}}><a style={{color:"#5D35D7"}}  href="https://www.youtube.com/watch?v=z1KDBCINis8"><strong>Watch Video-></strong></a></button>
                </div>
                <div className="card mx-4" style={{border:"none"}}>
                    <iframe src="https://www.youtube.com/embed/36glI_u-v44"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>

                    </iframe>
                    <p className="my-2"><strong>Freshdesk helped IT firm Riverbed Technology support their customers across their digital journeys</strong></p>
                    <button className="btn" style={{color:"#5D35D7"}}><a style={{color:"#5D35D7"}}  href="https://www.youtube.com/watch?v=36glI_u-v44"><strong>Watch Video-></strong></a></button>
                </div>
                <div className="card mx-4" style={{border:"none"}}>
                    <iframe src="https://www.youtube.com/embed/sWHw2SvmQ7g"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <p className="my-2"><strong>Freshdesk helped Klarna wow its 80 million customers with instant responses and rapid resolutions</strong></p>
                    <button className="btn" style={{color:"#5D35D7"}}><a style={{color:"#5D35D7"}}  href="https://www.youtube.com/watch?v=z1KDBCINis8"><strong>Watch Video-></strong></a></button>
                </div>
            </div>
            </div>
            <div className="my-5 container">
                <h2><strong>Leading industry experts recommend Freshdesk</strong></h2>
                <div className="all-cards my-5 d-flex">
                    <div className="card mx-4 my-2" style={{border:"none"}}>
                        <img src={p1} alt="p1" style={{width:"15rem"}} />
                    </div>
                    <div className="card mx-4 my-2" style={{border:"none"}}>
                        <img src={p2} alt="p2" style={{width:"10rem"}}/>
                    </div>
                    <div className="card mx-4 my-2" style={{border:"none"}}>
                        <img src={p3} alt="p3" style={{width:"15rem"}}/>
                    </div>
                    <div className="card mx-4 my-2" style={{border:"none"}}>
                        <img src={p4} alt="p4" style={{width:"12rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FreshDesk;
