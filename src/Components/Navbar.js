import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="name"><a href="../index.html"><img src="img/MV (3)_nobg.png" target="_blank" alt="logo" / ></a></div>
            <div className="nameHoverContainer"><div className="nameHover">Manas Verma</div></div>

            <div className="nav-links" id="navLinks">
                <ul>
                    <li><a href="https://www.linkedin.com/in/manas-verma-227abb28b/" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ManasVerma42" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/manas-verma-227abb28b/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
