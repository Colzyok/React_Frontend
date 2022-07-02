import React from 'react'
import './Pricing.css'

const Pricing = () => {
    return (
        <>
            <section className="pricing" id="pricing">
            <h1 className="heading">Pricing plans</h1>

            <div className="box-container">

                <div className="box">
                    <h3 className="title">basic</h3>
                    <div className="price">$14.99/month</div>
                    <ul>
                        <li><i className="fas fa-check"></i>upto 10pages</li>
                        <li><i className="fas fa-check"></i>free SSL certificates</li>
                        <li><i className="fas fa-check"></i>Blogging</li>
                        <li><i className="fas fa-check"></i>domain name</li>
                        <li><i className="fas fa-check"></i>Contact forms</li>
                        <li><i className="fas fa-times"></i>unlimited storage</li>
                        <li><i className="fas fa-times"></i>online payment</li>
                    </ul>
                    <a href="#home" className="btn">checkout</a>
                </div>

                <div className="box">
                    <h3 className="title">pro</h3>
                    <div className="price">$18.99/month</div>
                    <ul>
                        <li><i className="fas fa-check"></i>Upto 60pages</li>
                        <li><i className="fas fa-check"></i>Google Analytics</li>
                        <li><i className="fas fa-check"></i>2g storage</li>
                        <li><i className="fas fa-check"></i>Dropbox</li>
                        <li><i className="fas fa-check"></i>Web Hosting</li>
                        <li><i className="fas fa-check"></i>limited online transactions</li>
                        <li><i className="fas fa-times"></i>e-Commerce</li>
                    </ul>
                    <a href="#home" className="btn">checkout</a>
                </div>

                <div className="box">
                    <h3 className="title">Business</h3>
                    <div className="price">$30.99/month</div>
                    <ul>
                        <li><i className="fas fa-check"></i>unlimited pages</li>
                        <li><i className="fas fa-check"></i>Google Workspace</li>
                        <li><i className="fas fa-check"></i>unlimited storage</li>
                        <li><i className="fas fa-check"></i>eCommerce</li>
                        <li><i className="fas fa-check"></i>Google Analytics</li>
                        <li><i className="fas fa-check"></i>SEO Optimization</li>
                        <li><i className="fas fa-check"></i>Online payment</li>
                    </ul>
                    <a href="#home" className="btn">checkout</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Pricing
