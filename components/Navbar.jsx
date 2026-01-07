import React from "react";
export default function Navbar(){
    return(
        <nav className="navbar">
            <p className="Dev">{"<DevPortfolio/>"}</p>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}