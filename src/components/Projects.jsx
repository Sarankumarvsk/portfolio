import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'Responsive PC electronics e-commerce website with product categories and smooth navigation, built using HTML, CSS & JavaScript and deployed on GitHub Pages.',
            tech: ['HTML', 'CSS', 'JavaScript','GitHub Pages'],
            link: 'https://sarankumarvsk.github.io/pcpulse/shop.html'
        },
        {
            title: 'Student Management System',
            description: 'Console-based Student Management System built with Python & MySQL, featuring CRUD operations, attendance tracking with date-based reports, and secure modular architecture.',
            tech: ['Python', 'MySQL'],
            link: 'https://github.com/Sarankumarvsk/Student_management_system'
        },
        {
            title: 'Music Player Website',
            description: 'Responsive music player website with clean UI and smooth controls, built using HTML, CSS & JavaScript and deployed on GitHub Pages.',
            tech: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
            link: 'https://sarankumarvsk.github.io/Music_player/Music.html'
        },
        {
            title: 'ATM',
            description: 'This Python program simulates a simple ATM system that allows users to withdraw money, deposit money, check balance, and set or change their PIN.',
            tech: ['Python'],
            link: 'https://github.com/Sarankumarvsk/ATM_console'
        },
        {
            title: 'Calculator',
            description: 'Calculator with the basic arithmetic operations like addition, subtraction, multiplication and dvision.',
            tech: ['Reactjs'],
            link: 'https://calculatorbysk.netlify.app/'
        },
         {
            title: 'StopWatch',
            description: 'This a StopWatch program with the options like start, stop and reset operation.',
            tech: ['Reactjs'],
            link: 'https://stopwatchbysk.netlify.app/'
        },
         {
            title: 'ToDo List',
            description: 'A simple and responsive React Todo List application with add and delete functionality.',
            tech: ['Reactjs'],
            link: 'https://todolistbysk11.netlify.app/'
        }
    ];

    return (
        <div className="section projects-section" id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                            <a href={project.link}  target='blank' className="project-link">View Project &rarr;</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
