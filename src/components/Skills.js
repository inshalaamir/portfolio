import React from 'react'
import Bounce from 'react-reveal/Bounce';
import ReactIcon from "../assets/reacticon.png"
import NodeIcon from "../assets/nodeicon.png"
import ExpressIcon from "../assets/expressicon.png"
import MongoIcon from "../assets/mongoicon.png"
import HtmlIcon from "../assets/htmlicon.png"
import CssIcon from "../assets/cssicon.png"
import JavascriptIcon from "../assets/javascripticon.png"
import MaterialIcon from "../assets/materialicon.png"
import BootstrapIcon from "../assets/bootstrapicon.png"
import FirebaseIcon from "../assets/firebaseicon.png"
import PhotoshopIcon from "../assets/photoshopicon.png"


const Skills = () => {
    return (
        <div className="skills__wrapper" id="skills"> 
        <div className="skills">
            <div className="stack">
                <h1>My favorite stack</h1>
                <Bounce bottom>
                <div className="stack__images">
                    <img className="skills__icon" src={ReactIcon}></img>
                    <img className="skills__icon" src={NodeIcon}></img>
                    <img className="skills__icon" src={ExpressIcon}></img>
                    <img className="skills__icon" src={MongoIcon}></img>
                </div>
                </Bounce>
            </div>

            <div className="other">
                <h1>Other things I'm good at</h1>
                <Bounce left delay={1000}>
                <div className="other__images">
                    <img className="skills__icon" src={HtmlIcon}></img>
                    <img className="skills__icon" src={CssIcon}></img>
                    <img className="skills__icon" src={JavascriptIcon}></img>
                    <img className="skills__icon" src={MaterialIcon}></img>
                    <img className="skills__icon" src={BootstrapIcon}></img>
                    <img className="skills__icon" src={FirebaseIcon}></img>
                    <img className="skills__icon" src={PhotoshopIcon}></img>
                </div>
                </Bounce>
            </div>
        </div>
        </div>
    )
}

// html 
// css 
// javascript 
// firebase
// photoshop
// mysql
// materialUi
// bootstrap  




export default Skills
