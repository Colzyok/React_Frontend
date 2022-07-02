import React from 'react'
import './About.css'
import logo from '../Images/logo.jpg'


const About = () => {
    return (
        <>
        <section className="about" id="about">
            <h1 className="heading">about us</h1>
            <div className="column">
                <div className="image">
                    <img src={logo} alt="logo" />
                </div>

                <div className="content">
                    <h3>easy solutions for your business</h3>
                    <p>COLZY Limited is about applying smart techniques with modern technology to improve and render easy solutions for your business. We are primarily focused on the ease of doing business, visual presentations and business solutions.
                        We give individuals and business enterprises an opportunity to take full advantage of the digital space by bringing products and consumers together to satisfy their needs as well as meeting set goals and objectives.
                    </p>
                    <p>We are driven by our commitment to inspire and support individuals and organizations who are willing to get involved in the evolution of technology to achieve rapid growth and development for their day to day business transactions.  We have a dedicated team of experts who are well trained and certified to deliver the very best of user interface and experience(UI/UX).
                    </p>
                    <div className="buttons">
                        <a href="#home" className="btn">More about us</a>
                </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default About
