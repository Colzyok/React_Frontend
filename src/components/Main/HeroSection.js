import React from 'react'
import Typed from 'react-typed'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Build your digital space</h1> 
                <Typed
                    className="typed-text" 
                    strings={[ "Responsive web designs", "Database management systems", "E-commerce", "Web applications" ]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop  
                />
                <a href='https://wa.me/2348067009489' className="btn-main">START CHAT</a>
            </div>
        </div>
    )
}

export default HeroSection
