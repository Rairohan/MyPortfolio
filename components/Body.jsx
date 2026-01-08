import React, { useEffect } from "react";
export default function Body(){
    useEffect(() => {
        alert("This Site is still under construction")
    },[])
    return(
        <main className="main-body">
            <p className="p1">Hello,I'm</p>
            <p className="p2">Rohan Rai</p>
            <p className="p3">I'm a Front-end Developer</p>
            <p className="p4">passionate about creating fast, responsive, and visually appealing web applications.</p>
            <div className="work-display">
                <button>View my Work</button>
                <a href="https://github.com/Rairohan" target="_blank"><img src="public/gitlogo.jpg" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/rai-rohan/" target="_blank"><img src="public/linkedinlogo.jpg" alt="LinkedIn"/></a>
                <a href="mailto:rairohan.30314@gmail.com" target="_blank"><img src="public/gmaillogoo.jpg" alt="Gmail"/></a>
            </div>
        </main>
    )
}
