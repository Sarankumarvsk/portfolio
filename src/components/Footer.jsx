import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://github.com/Sarankumarvsk" className="social-icon"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sarankumar-v-537805305/" className="social-icon"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/itz_sarankumar_sk?igsh=MWZqOGZzazR0NHd3dw==" className="social-icon">
                              <FaInstagram size={24} />
                            </a>
                            <a href="mailto:sarankumar1311@gmail.com" className="social-icon">
                              <FaEnvelope size={24} />
                            </a>
                            <a href="tel:+916374953991" id="phonenumber" className="social-icon">
                              <FaPhone size={24} />
                              +91-6374953991
                            </a>
                </div>
                <p className="footer-text">© {new Date().getFullYear()} sarankumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
