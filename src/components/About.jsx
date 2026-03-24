import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="section about-section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <p className="about-text">
            I am a passionate and motivated Computer Science and Engineering graduate with a strong interest in
            frontend development and modern web technologies. I enjoy building clean, responsive and user-friendly
            web applications using React, JavaScript and Bootstrap.
          </p>

          <p className="about-text">
            I have hands-on experience in developing projects using REST APIs, integrating backend services and
            working with databases such as MySQL. I focus on writing clean code, improving performance and creating
            professional UI designs that enhance user experience.
          </p>

          <p className="about-text">
            Along with frontend development, I have a good foundation in Python and problem-solving skills. I am
            always eager to learn new technologies and continuously improve my skills to become a better full-stack
            developer in the future.
          </p>

          <p className="about-text">
            I am looking for an opportunity where I can contribute to real-world projects, grow as a developer and
            work with a team that values learning, innovation and quality software development.
          </p>
            </div>
        </div>
    );
};

export default About;
