import React, { useState }from 'react'
import './Contact.css'
import contact from '../Images/contact.jpg'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>
            <section className="contact" id="contact">
            <div className="image">
                <img src={contact} alt="contact" />
            </div>

            <form action="">
                <h1 className="heading">contact us</h1>

                <div className="inputbox">
                    <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="">Name: </label>
                </div>

                <div className="inputbox">
                    <input 
                    type="text" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <label for="">Email: </label>
                </div>

                <div className="inputbox">
                    <input 
                    type="text" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    <label for="">Phone: </label>
                </div>
                <div className="inputbox">
                    <textarea 
                        required 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label htmlFor="">Message: </label>
                </div>
                <input type="submit" className="btn" value="send message" />
            </form>
            
        </section>
        </>
    )
}

export default Contact
