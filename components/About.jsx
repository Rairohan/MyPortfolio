import React from "react";
export default function About(){
    return(
        <main>
            <section className="about-section">
                <h1>About Me</h1>
                <br />
                <h3>Passionate about creating digital experiences that matter.</h3>
                <br />
                <p>
                    I’m a front-end developer who enjoys building clean, responsive, and user-friendly web interfaces.
                    My journey into web development started with curiosity about how websites work and has grown into a strong interest in creating modern, interactive applications.
                    I primarily work with HTML, CSS, JavaScript, and React, and I focus on improving my skills by building personal projects and experimenting with modern front-end practices.
                    I’m always eager to learn new technologies and continuously grow as a developer.
                </p>
                <div className="specs"> 
                    <button>Problem solver</button>
                    <button>Team Player</button>
                    <button>Quick Learner</button>
                    <button>Adaptable</button>
                </div>
            </section>
        </main>
    )
}