import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            

                <div className="container">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item-active">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="about" smooth duration={200}>
                        About me
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="skills" smooth duration={200}>
                        Skills
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="projects" smooth duration={200}>
                        Projects
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="reviews" smooth duration={200}>
                        Reviews
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="contact" smooth duration={200}>
                        Contact
                        </Link>
                        </li>
                    </ul>
                    
                    </div>
                </div>
</nav>
    )
}

export default Navbar
