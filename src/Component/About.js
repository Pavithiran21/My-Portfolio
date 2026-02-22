// About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaServer, FaCloud, FaDownload } from "react-icons/fa";
import Resume from './Resune/Pavithiran_R_SoftwareDeveloper.pdf';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title">{'<About />'}</h2>

        <Row className="justify-content-center">
          <Col lg={10}>

            {/* Intro */}
            <p className="about-intro">
              Backend‑focused Full Stack Developer with hands‑on experience building
              production‑ready applications. I specialize in designing scalable REST APIs,
              authentication systems, and database performance optimization while also
              developing React based frontend features.
            </p>

            {/* Technical Skills */}
            <div className="skills-grid">
              <div className="skill-card">
                <h4>Backend</h4>
                <p>Node.js, Express.js, REST APIs, JWT Auth, RBAC</p>
              </div>

              <div className="skill-card">
                <h4>Frontend</h4>
                <p>React.js, Bootstrap, Responsive UI</p>
              </div>

              <div className="skill-card">
                <h4>Database</h4>
                <p>MongoDB, Aggregation Pipelines, Index Optimization</p>
              </div>

              <div className="skill-card">
                <h4>Cloud & DevOps</h4>
                <p>AWS S3, Azure, Deployment, Git</p>
              </div>
            </div>

            {/* Experience */}
            <div className="experience-section">
              <h3 className="exp-title"><FaBriefcase size={20} /> Work Experience</h3>

              <div className="exp-item">
                <div className="exp-header">
                  <h4><FaServer size={16} />    Junior Software Developer </h4>
                  <span>Sep 2024 – Present</span>
                </div>
                <p className="company">DJ Computing, Coimbatore</p>
                <ul>
                  <li>Designed and maintained production REST APIs</li>
                  <li>Implemented secure authentication & role‑based authorization</li>
                  <li>Optimized MongoDB aggregation pipelines for performance</li>
                  <li>Debugged and resolved real‑time production issues</li>
                  <li>Deployed applications on AWS & Azure cloud environments</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <h4><FaCloud  size={16}/> Junior Software Developer Intern</h4>
                  <span>May 2024 – Aug 2024</span>
                </div>
                <p className="company">DJ Computing, Coimbatore</p>
                <ul>
                  <li>Built CRUD APIs using MongoDB aggregation</li>
                  <li>Developed serverless backend functions</li>
                  <li>Assisted in cloud deployment & environment configuration</li>
                </ul>
              </div>
            </div>

            {/* Resume */}
            <div className="resume-container">
              <a href={Resume} download="Pavithiran_R_Resume.pdf" className="resume-btn">
                <FaDownload /> Download Resume
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}