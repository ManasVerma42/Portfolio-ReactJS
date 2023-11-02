import React from "react";

export default function Hero() {
    return (
        <div className="content">
            <div className="up-box">
                <div className="text">
                    <h1>I create <span>playful</span> <br /> experiences.</h1>
                    <p>Manas Verma, Web Developer</p>
                </div>
                <div className="image">
                        <img src="img/gamepad.gif" alt="img"/>
                </div>
            </div>
            <div className="down-box">    
                <div className="projects">
                    <p>Projects</p>
                </div>    
                <div className="down">
                    <img className="downimg" src="img/white-arrow-down-sign-to-navigate.png" alt="downimg" />
                </div>
            </div>
        </div>

    )
}