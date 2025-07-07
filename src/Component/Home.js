import React from 'react';
import { Header } from './Header';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TypewriterComponent from 'typewriter-effect';

export const Home = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <Header />
      <Container fluid>
        <Row className='justify-content-center align-items-center min-vh-100 py-5'>
          <Col sm={12} md={6} lg={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4 mb-3">
              Hello !!<span className='wave'>{String.fromCodePoint(0x1F44B)}</span>
            </h1>
            <h1 className="display-3 mb-4">
              I'm <b className='text-success'>Pavithiran</b>
            </h1>
            <h3 className='red-text h2'>
              <TypewriterComponent
                options={{
                  strings: [
                    "I am a MERN Stack Developer",
                    "I am a Web Developer",
                    "I am a Backend Developer",
                    "I am a Self-Motivator",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h3>
          </Col>
          <Col sm={12} md={6} lg={6} className='text-center d-flex align-items-center justify-content-center'>
            <Image
              src='https://www.webstackacademy.com/wp-content/uploads/2023/01/fullStack-MERN.png'
              alt='profile-image'
              fluid
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
        <hr className="my-4"/>
      </Container>
    </section>
  );
};
