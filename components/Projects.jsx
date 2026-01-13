import React from "react";
export default function Projects(){
    return(
        <section id="projects">
        <main className="projects">
            <h1> Featured Projects</h1>
            <br />
            <p >Here are some of my recent projects that showcase my skills and passion for web development</p>
            <div className="project-cards">
                <div className="Luxury-Store">
                    <img src="/Luxurystore.png" alt="Project 1"/>
                    <a href="https://github.com/Rairohan/Luxury-store" target="blank">Luxury-Store</a>
                    <p className="des1">
                        Luxury Store is a modern e-commerce web application featuring a product catalog, clean layout, and user-friendly interface.
                        The project focuses on front-end design, component structure, and responsive styling for an online shopping experience.
                        Tech used: HTML, CSS, JavaScript, MySQL (backend integration)   
                    </p>
                </div>
                <div className="Travel-Journal">
                    <img src="/traveljournal.png" alt="Project 2" />
                    <a href="https://github.com/Rairohan/travel_journal" target="blank">Travel-Journal</a>
                    <p className="des2">A responsive React application that allows users to document and explore travel experiences.
                         The app showcases visited locations with images and descriptions, focusing on clean UI, reusable components, and dynamic data rendering.
                         Tech used: React, JavaScript, CSS
                    </p>
                </div>
                <div className="Chef-Claude">
                    <img src="/ChefClaude.png" alt="Project 3" />
                    <a href="https://github.com/Rairohan/Chef_Claude" target="blank">Chef-Claude</a>
                    <p className="des3">
                        Chef Claude is an AI-powered recipe suggestion app that generates recipes based on user-provided ingredients. 
                        It integrates an external API and demonstrates form handling, async data fetching, and state management in React.
                        Tech used: React, JavaScript, API Integration, CSS    
                    </p>
                </div>
            </div>
            <button
                onClick={() =>
                 window.open("https://github.com/Rairohan?tab=repositories", "_blank") }
                className="view-more-button"
            >
                View More Projects
             </button>
        </main>

        </section>
    )
}