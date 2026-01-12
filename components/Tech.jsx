import React from "react";
export default function Tech(){
    return(
        <div className="tech">
            <h2>Skills & Technologies</h2>
            <br />
            <p>Here are the technologies and tools I use to bring ideas to life</p>
            <main>
                <ul className="Tech-list">
                    <li><img src="/icons8-html-5-100.png" alt="HTML5"/> <span>HTML</span></li>
                    <li><img src="/icons8-css3-100.png" alt="CSS3" /> <span>CSS</span></li>
                    <li><img src="/jslogo.png" alt="JavaScript" /> <span>JavaScript</span></li>
                    <li><img src="/React-Logo.png" alt="React" /> <span>React</span></li>
                    <li><img src="/gitogo.png" alt="GitHub" /> <span>GitHub</span></li>
                    <li><img src="/mysql.png" alt="MySQL" /> <span>MySQL</span></li>
                </ul>
            </main>
        </div>
    )
}