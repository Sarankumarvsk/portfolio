import React from 'react';
import './Skills.css';
import html from '../image/icons/html.png';
import css from '../image/icons/css.png';
import bootstrap from '../image/icons/bootstrap.png';
import js from '../image/icons/js.png';
import reactjs from '../image/icons/reactjs.png';
import python from '../image/icons/python.png';
import git from '../image/icons/git.png';
import github from '../image/icons/github.png';
import mysql from '../image/icons/mysql.png';
import djangoimg from '../image/icons/djangoimg.png';
const Skills = () => {
    const skills = [
        { name: 'HTML5', category: 'Frontend' ,image: html},
        { name: 'CSS3', category: 'Frontend' ,image: css},
        { name: 'Bootstrap5', category: 'Frontend' ,image: bootstrap},
        { name: 'JavaScript', category: 'Frontend' ,image: js},
        { name: 'React', category: 'Frontend' ,image: reactjs},
        { name: 'Python', category: 'Backend' ,image: python},
        { name: 'Django', category: 'Backend',image: djangoimg},
        { name: 'Git', category: 'Tools',image: git},
        { name: 'GitHub', category: 'Cloud Platform',image: github },
        { name: 'MySQL', category: 'DataBase',image: mysql}
    ];

    return (
        <div className="section skills-section" id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                           <img
                             src={skill.image}
                             alt={skill.name}
                             className="skill-icon"
                           />
                        <h3>{skill.name}</h3>
                        <span className="skill-category">{skill.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
