import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
            <div className="box-container">

                <div className="box">
                    <h3>about us:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, possimus.
                    </p>
                </div>

                <div className="box">
                    <h3>quick links:</h3>
                    <a href="#home">home</a>
                    <a href="#features">products</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    <a href="#pricing">pricing</a>
                    <a href="#contact">contact</a>
                </div>

                <div className="box">
                    <h3>Socials:</h3>
                    <a href="#home"><i className="fab fa-facebook"></i> facebook</a>
                    <a href="https://www.instagram.com/colzyltd/"><i className="fab fa-instagram"></i> instagram</a>
                    <a href="#home"><i className="fab fa-twitter"></i> twitter</a>
                    <a href="#home"><i className="fab fa-pinterest"></i> pinterest</a>
                </div>
                
                <div className="box">
                    <h3>contact info</h3>
                    <div className="info">
                        <i className="fas fa-phone"></i>
                        <p>+234(0)806-700-9489</p>
                    </div>
                    <div className="info">
                        <i className="fas fa-envelope"></i>
                        <p>example@email.com</p>
                    </div>
                    <div className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Abuja, Nigeria</p>
                    </div>
                </div>
            </div>

            <h1 className="credit">&copy; copyright 2021 || <i>powered by COLZY</i></h1>
        </div>
        </>
    )
}

export default Footer
