import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import PR from '../Images/PR-Mart.png';
import Student from '../Images/Studentlist.png';
import Job from '../Images/JobSearch.png';
import Chat from '../Images/Weconnect.png';

export const ProjectDetails = () => {
  return (
    <section id='project' className="section-padding">
      <Container>
        <h2 className="section-title">{'<Projects />'}</h2>
        <p className="section-subtitle">
          // Building scalable applications with modern tech stack
        </p>
        <Row className="g-4">
          <Col md={6}>
            <ProjectCard
              imagePath={Student}
              title="Student MarkList App"
              description="Engineered a comprehensive student management system with role-based authentication, implementing secure CRUD operations and automated result processing with pass/fail validation logic."
              tech="React, Node.js, Express, MongoDB"
              frontend="https://github.com/Pavithiran21/StudentCRUD-Frontend"
              backend="https://github.com/Pavithiran21/StudentCRUD-Backend"
              server="https://student-results.netlify.app"
            />
          </Col>
          <Col md={6}>
            <ProjectCard
              title="PR-Mart"
              imagePath={PR}
              description="Developed a full-stack e-commerce solution featuring Razorpay payment gateway integration, dynamic shopping cart functionality, and comprehensive admin dashboard for product and order management."
              tech="React, Node.js, Express, MongoDB"
              frontend="https://github.com/Pavithiran21/PR-Mart-Frontend"
              backend="https://github.com/Pavithiran21/PR-Mart-Backend"
              server="https://pr-mart.netlify.app"
            />
          </Col>
          <Col md={6}>
            <ProjectCard
              imagePath={Job}
              title="Job Search Platform"
              description="Built a scalable job portal platform connecting employers and candidates, featuring advanced application tracking, role-based access control, and intuitive dashboards for streamlined recruitment workflows."
              tech="React, Node.js, Express, MongoDB"
              frontend="https://github.com/Pavithiran21/JobApp-Frontend"
              backend="https://github.com/Pavithiran21/Job-Backend"
              server="https://jobsearch21.netlify.app"
            />
          </Col>
          <Col md={6}>
            <ProjectCard
              imagePath={Chat}
              title="WeConnect"
              description="Architected a real-time messaging platform leveraging Socket.IO for bidirectional communication, implementing user discovery, conversation persistence, and instant message delivery with low latency."
              tech="React, Node.js, Express, MongoDB, Socket.IO"
              frontend="https://github.com/Pavithiran21/WeConnect-Frontend"
              backend="https://github.com/Pavithiran21/WeConnect-Backend"
              server="https://weconnect121.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
