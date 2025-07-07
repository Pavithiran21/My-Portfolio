import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Profile from './Images/MyProfile.jpg';
import { FaEye } from 'react-icons/fa';

export const About = () => {
  return (
    <section id='about' className="py-5">
      <Container fluid>
        <Row className='text-center mb-5'>
          <Col>
            <h1 className="display-4">Personal Details</h1>
          </Col>
        </Row>
        <Row className='align-items-center g-4'>
          <Col xs={12} md={6} className='d-flex flex-column justify-content-center'>
            <div className="pe-md-4">
              <p className="lead mb-4">
                A dedicated and motivated Full Stack Developer, I hold a degree from KSR College of Engineering.
                Additionally, I have successfully completed a comprehensive Full Stack Developer course at Guvi, earning certification.
                Eager to apply my expertise in front-end and back-end technologies, I am driven by a passion for creating seamless and efficient web applications.
              </p>
              <h1 className='blue-text display-5 mb-4'>Work Experience</h1>
              
              <div className="mb-4">
                <h3 className='red-text h4'>Backend Developer Intern</h3>
                <p className="mb-1"><b>DJ Computing, Coimbatore</b></p>
                <p className="mb-3"><b>May 2024 - August 2024</b></p>
                <ul className="list-unstyled">
                  <li className="mb-2">• Developed APIs for basic CRUD operations utilizing MongoDB with aggregation techniques.</li>
                  <li className="mb-2">• Gained hands-on experience with Azure and AWS cloud services.</li>
                  <li className="mb-2">• Contributed to two projects:</li>
                  <ol className="ps-4">
                    <li>SmartComm Circuit App: Leveraged Azure for data access.</li>
                    <li>SNQS Clothing App: Utilized AWS and serverless functions to enhance application performance.</li>
                  </ol>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className='red-text h4'>Full-Time Software Developer</h3>
                <p className="mb-1"><b>DJ Computing, Coimbatore</b></p>
                <p className="mb-3"><b>September 2024 - Present</b></p>
                <ul className="list-unstyled">
                  <li className="mb-2">• Focused on API development and testing, improving application functionality and performance.</li>
                  <li className="mb-2">• Acquired skills in troubleshooting and resolving technical issues effectively.</li>
                  <li className="mb-2">• Continued to expand knowledge in API design and cloud computing solutions.</li>
                </ul>
              </div>

              <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1GsYw6NIR005tS8wj6jkpUkZGVVvipayH/view?usp=sharing' className="text-decoration-none">
                <Button variant='outline-success' size="lg" className="d-flex align-items-center gap-2">
                  <FaEye /> Resume
                </Button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
            <Image 
              src={Profile} 
              alt='profile' 
              className='img-fluid rounded shadow-lg' 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
          </Col>
        </Row>
        <hr className="my-5"/>
      </Container>
    </section>
  );
};

