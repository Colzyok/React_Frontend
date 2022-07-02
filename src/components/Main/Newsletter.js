import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="newsletter">
            <h3>subscribe for new features</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni.</p>
            <form action="">
                <input 
                type="email" 
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <input type="submit" value="subscribe" />
            </form>
        </div>
    )
}

export default Newsletter
