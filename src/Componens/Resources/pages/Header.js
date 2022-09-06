import React from 'react';
import header from '../Images/header.png'
import "../Styles.css"

export const Header = () => {
    return (
        <div className="container header">
            <div className="card">
                <img src={header} alt="header" />
            </div>
            <div className="mx-4">
                <h2>How Vijayaraj Murugesan’s mantra of learning by doing empowers him at work</h2>
                <p>Sampriti S. Roy on September 2, 2022. 4 min read</p>
                <p>In this edition of ‘A Freshworker’s Life’ series, catch staff software engineer Vijayaraj Murugesan
                    looking back on a decade of empowerment and delight with Freshworks.</p>
            </div>
        </div>
    )
};

export default Header;
