import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="section contact-section" id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
                <p>
                    I'm currently looking for new opportunities.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:sarankumar1311@gmail.com" className="btn-primary contact-btn">
                    Say Hello
                </a>
            </div>
        </div>
    );
};

export default Contact;
