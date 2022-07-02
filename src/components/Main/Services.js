import React from 'react'
import './Services.css'
import services from '../Images/services.jpg'
import fashion from '../Images/fashion.jpg'
import consultancy from '../Images/consultation.jpg'

const Services = () => {
    return (
        <>
            <section className="services" id="services">
            <h1 className="heading">Our Services</h1>

            <div className="box-container">
                <div className="box">
                    <div className="user">
                        <img src={services} alt="services" />
                        <h3>Technology</h3>
                        
                        <div className="comment">
                            <p>
                                Our team of front-end and back-end developers are always available
                                to deliver professional services that describes the objects of the organization
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="user">
                        <img src={fashion} alt="marketing-services" />
                        <h3>Fashion</h3>
                        <div className="comment">
                            <p>Your lifestyle is a reflection of your inner most being.
                                Express your self in whatever language, custom or tradition with our
                                creatively designed collections for your staple.</p> 
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="user">
                        <img src={consultancy} alt="data management" />
                        <h3>Consultancy</h3>
                        
                        <div className="comment">
                            <p>We give expert advice and offer solutions to tech related problems. 
                                Do you require further assistance? Contact us and we'll be pleased to attend to your complaints 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services
