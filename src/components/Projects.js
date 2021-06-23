import React, { useState } from 'react'
import Netflix1 from "../assets/netflix1.PNG"
import Netflix2 from "../assets/netflix2.PNG"
import Netflix3 from "../assets/netflix3.PNG"
import Ew1 from "../assets/ew1.png"
import Ew2 from "../assets/ew2.png"
import Ew3 from "../assets/ew3.png"
import Ew4 from "../assets/ew4.png"
import Twitter from "../assets/twitter.png"
import Modal from "react-modal"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from "@fortawesome/free-solid-svg-icons"

Modal.setAppElement("#root")

const Projects = () => {

    const [modal, setModal] = useState({
        open:false,
        images:[],
        title:"",
        description: "",
        features: [],
        technologies: [],
        link: ""
    })

    return (
        <div className="projects" id="projects">
            <div className="projects__container">
                <h1>Some of my recent projects</h1>
                <div className="projects__pictures">
                    <img onClick={()=> 
                    setModal({
                        open:true, 
                        images:[Netflix1, Netflix2, Netflix3],
                        title: "Netflix Clone",
                        description: "A netflix clone made using ReactJS and pure CSS. The site uses Firebase authentication for the user to sign up and login and maintains a redux state. Once logged in, movies and Tv shows data is fetched from the actual TMDB data base using an API call. The data is categorized and displayed in the Netflix style. The site is deployed using Firebase hosting",
                        features: ["Responsive design", "Firebase authentication", "Firebase Hosting", "TMDB Api", "Dynamic Navbar based on scroll", "Horizontal scrolling gallery"],
                        technologies:["ReactJS", "CSS", "Firebase", "Redux", "Axios"],
                        link: "https://github.com/inshalaamir/netflix-clone"
                    })} 
                    className="projects__image" src={Netflix3}></img>
                    
                    <img
                    onClick={()=> 
                        setModal({
                            open:true, 
                            images:[Ew1,Ew2,Ew3,Ew4],
                            title: "Estate Wizards",
                            description: "Estate Wizards is a platform for real-estate dealings and information. Made using the Mern stack, the website has features for buying/selling properties through posting and viewing ads. Same goes for hosting places for travellers. It uses location features through custom maps embedded into the site using Mapbox. The site involves other features like price prediction of properties based on location and specifications, price trends of different areas and new developing projects which are added by the admin of the site. It also involves user authentication through Json Web Token. The site is designed for use in Pakistan.",
                            features: ["Responsive design", "JWT authentication", "Cloud data storage on MongoDB Atlas", "Custom Maps for using Location", "Chat feature for users", "Notifications", "Image uploading with ads", "Machine learning models for price predictions", "Seperate admin dashboard"],
                            technologies: ["ReactJS", "NodeJS", "Express", "MongoDB Atlas", "Bootstrap", "Redux", "Python", "Axios", "Mapbox"],
                            link: "https://github.com/inshalaamir/EstateWizards"
                        })} 
                     className="projects__image" src={Ew1}></img>
                    
                    <img onClick={()=> 
                        setModal({
                            open:true, 
                            images:[Twitter],
                            title: "Twitter Clone",
                            description: "A twitter clone made using ReactJS and MaterialUI. The site is built keeping in mind the exact design of twitter web. It uses Firebase for storage and supports realtime changes. React-twitter-embed is used for widgets that gathers data from real twitter accounts and displays them in widgets used in the actual website. ",
                            features: ["Responsive design", "Firebase Storage", "Posting tweets with images", "Getting data from Firebase", "Realtime changes handled on feed", "React-twitter-embed widgets", "Specific component scrolling"],
                            technologies: ["ReactJS", "MaterialUI", "CSS", "Firebase", "React-twitter-embed"],
                            link: "https://github.com/inshalaamir/twitter-clone"
                        })} 
                    className="projects__image" src={Twitter}></img>
                </div>
                <Modal isOpen={modal.open} 
                onRequestClose={()=> setModal({...modal, open:false})}
                style={{
                    overlay: {
                        backgroundColor: "grey"
                    },
                    content:{
                        marginTop: 50,
                       
                    }
                }}
                >
                   
                        <div className="modal__title">
                        <h1>{modal.title}</h1>
                        </div>
                        <div className="modal__carousel">

                            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                                {modal.images.map(image => <div><img src={image}></img></div>)}
                                
                            </Carousel>
                        </div>

                        <div className="modal__description">
                            {modal.description}
                        </div>
                        
                        <div className="modal__footer">

                            <div className="modal__features">
                                <h3>Features</h3>
                                {modal.features.map(feature => <div className="modal__feature"> <FontAwesomeIcon icon={faCircle} style={{color: "#f9ab00"}}/> {feature} </div> )}
                            </div>
                            <div className="modal__features">
                                <h3>Technologies</h3>
                                {modal.technologies.map(tech => <div className="modal__feature"> <FontAwesomeIcon icon={faCircle} style={{color: "#f9ab00"}}/> {tech} </div> )}
                            </div>


                        </div>

                        <div className="modal__link">
                            Link: <a href={modal.link}>{modal.link}</a>
                        </div>

                        

                </Modal>
            </div>
            
            
        </div>
    )
}

export default Projects
