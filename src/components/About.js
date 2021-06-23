import React from 'react'
import image from "../Untitled.jpg"
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="about" id="about">
            <Fade delay={500}> 

                <div className="about__info">
                    <img src={image} className="about__image shadow" alt=""></img>

                    <div className="about__text">
                        <h1>About me</h1>
                        <p>Hello! I am Inshal and I'm a full stack developer. I've been working on web development for almost 4 years. I have a bachelor's degree in computer science, throughout which I mostly worked on web development. I've worked with both frontend and backend technologies and have created fully functional websites from scratch on my own. Along with web development I also have good experience with graphic designing, something that comes in handy while designing web pages. I am looking forward to not only designing projects according to your needs and demands but providing you with solutions. Whether it's a fully functional website you want or just some minor change in a project, I'll discuss it with you and try my best to execute it how you imagine.</p>
                    </div>

                </div>
            
            </Fade>
        </div>
    )
}

export default About
