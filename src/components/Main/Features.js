import React from 'react'
import './Features.css'
import blue from '../Images/blue-ray.jpg'
import data from '../Images/data.jpg'
import team from '../Images/team.jpg'
import media from '../Images/media.jpg'
import marketing from '../Images/marketing.jpg'
import dark from '../Images/dark.jpg'

const Features = () => {
    return (
        <>
            <section className="features" id="features">
            <h1 className="heading">featured products</h1>

            <div className="box-container">
                <div className="box">
                    <img src={blue} alt="product" />
                    <h3>Web Hosting</h3>
                    <p>Create and maintain a site that is accessible on the world wide web. 
                        We offer hosting services for static and dynamic websites in the cloud with 
                        High-performance infrastructure for cloud computing, data analytics & machine learning.</p>
                    <a href="/products/webhosting" className="btn">
                        Learn more
                    </a>
                </div>
                <div className="box">
                    <img src={data} alt="product" />
                    <h3>UI/UX design</h3>
                    <p>We provide aesthetic elements for users to interract with a product and our 
                        "Human-First" approach to product design for an excellent user experience that 
                        encompasses all aspects of the end-user’s interaction with the company's products.   
                    </p>
                    <a href="#home" className="btn">
                        Learn more
                    </a>
                </div>
                <div className="box">
                    <img src={team} alt="product" />
                    <h3>Web Design & Development</h3>
                    <p>Design, build and Deploy responsive websites, eCommerce, web applications with a 100% privacy protection,
                        Financial transactions etc.
                        We use HTML, CSS, JavaScript, React, Bootstrap and other high level languages to make
                        magic. 
                    </p>
                    <a href="#link" className="btn">
                        Learn more
                    </a>
                </div>
                <div className="box">
                    <img src={media} alt="product" />
                    <h3>Data Management & Analysis</h3>
                    <p>We collect, manage and store data securely to ensure accessibility, 
                        reliability, and efficiency which helps to inform business decisions
                        and gain insights into customer behaviour.</p>
                    <a href="#home" className="btn">
                        Learn more
                    </a>
                </div>
                <div className="box">
                    <img src={marketing} alt="product" />
                    <h3>Digital Marketing</h3>
                    <p>Target the right audience with our strategic marketing approach. 
                        We offer advertising solutions to reach estimated targets across the globe at minimal rates.
                    </p>
                    <a href="#home" className="btn">
                        Learn more
                    </a>
                </div>
                <div className="box">
                    <img src={dark} alt="product" />
                    <h3>Search Engine Optimization</h3>
                    <p>The SEO panel is a Search Engine Optimization software that empowers 
                        you with the latest and most useful tools to draw traffic and 
                        monitor the performance of your website.</p>
                    <a href="#home" className="btn">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Features
