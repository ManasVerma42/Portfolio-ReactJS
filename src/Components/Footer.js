import React from "react";

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer-title"><h1>Connect With Me!</h1></div>
            <div className="footer-links" id="navLinks">
                <ul>
                    <li><a href="https://www.linkedin.com/in/manas-verma-227abb28b/" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ManasVerma42" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/manas-verma-227abb28b/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}