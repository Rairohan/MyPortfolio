import React, { useEffect,useState } from "react";
import {Sun,Moon} from "lucide-react";
export default function Body(){
    // useEffect(() => {
    //     alert("This Site is still under construction")
    // },[])
    const[darkmode,setDarkmode]=useState(false);
     const toggleDarkMode=()=>{
        setDarkmode(!darkmode);
        if(!darkmode){
            document.body.classList.add("dark-mode");
        }else{
            document.body.classList.remove("dark-mode");
        }
     };

    return(
        <section id="body">
        <main className="main-body">
            <p className="p1">Hello,I'm</p>
            <p className="p2">Rohan Rai</p>
            <p className="p3">I'm a Front-end Developer</p>
            <p className="p4">passionate about creating fast, responsive, and visually appealing web applications.</p>
            <div className="workdisplay">
                <button>View my Work</button>
                <a href="https://github.com/Rairohan" target="_blank"><img src="/gitogo.png" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/rai-rohan/" target="_blank"><img src="/linkedinlogo.png" alt="LinkedIn"/></a>
                <a href="mailto:rairohan.30314@gmail.com" target="_blank"><img src="/gmaillogo.png" alt="Gmail"/></a>
            </div>
           <button onClick={toggleDarkMode}
            className="dark-btn">
            {darkmode? <Sun size={24} /> : <Moon size={24} />}
           </button>
        </main>
        </section>
    )
}
