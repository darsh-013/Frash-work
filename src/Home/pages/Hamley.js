import React from 'react';
import pic from "../Images/pic.PNG"
import hamlay from "../Images/hamlay.PNG";
import "../Styles.css"

export const Hamley = () => {
    return (
        <div className="my-5 text-center ">
            <div className="my-2">
                <h2 style={{fontWeight:"bold", justifyContent:"center"}}>Trusted by 50,000+ businesses</h2>
            </div>
            <div className="my-5">
                <img src={pic} alt="pic" style={{width:"80vw"}} />
            </div>
            <div style={{backgroundColor:"#F7F7F7"}} >
                <img src={hamlay} alt="hamlay" className="p-5 my-3" style={{width:"77vw"}}/>
            </div>
        </div>
    )
};

export default Hamley;
