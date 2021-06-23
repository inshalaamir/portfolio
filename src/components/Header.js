import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <header className="header-wraper">
            <div className="main-info" id="header">
                <h1>Inshal Aamir</h1>
                <Typed className="typed-text" 
                strings={["Web design", "Web development", "Graphic design"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <button type="button" class="btn btn-outline-danger">CONTACT ME</button>
                {/* <a className="btn-main-offer" href="#">Contact me</a> */}
            </div>
        </header>
    )
} 

export default Header
