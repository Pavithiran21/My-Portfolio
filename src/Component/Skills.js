import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman, SiMicrosoftazure, SiSpringboot, SiMysql } from 'react-icons/si';

export const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#563d7c' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#3c873a' },
        { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
      ]
    },
    {
      category: 'Tools & Cloud',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'AWS', icon: <FaAws />, color: '#ff9900' },
        { name: 'Azure', icon: <SiMicrosoftazure />, color: '#0078d4' },
        { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
      ]
    }
  ];

  return (
    <section id='skill' className="section-padding">
      <Container>
        <h2 className="section-title">{'<TechStack />'}</h2>
        <Row className='justify-content-center'>
          <Col lg={10}>
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skill-category">
                <h3 className="category-title">{'// '}{category.category}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
