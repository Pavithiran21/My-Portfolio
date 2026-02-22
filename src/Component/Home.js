import React from 'react';
import { Header } from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import TypewriterComponent from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export const Home = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <Header />
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={10} xl={8}>
            <div className="hero-content">
              {/* Intro */}
              <p className="hero-greeting">$ whoami</p>
              {/* Name */}
              <h1 className="hero-name">Pavithiran.R</h1>
              {/* Role + Expertise */}
              <h2 className="hero-title">
                <span className="code-bracket">{'<'}</span>
                <TypewriterComponent
                  options={{
                    strings: [
                      "Full Stack Developer />",
                      "Backend Development Experience />",
                      "Production REST API Development />",
                      "Auth & Authorization Implementation />",
                      "Database Query Optimization />"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 20,
                    pauseFor: 2000
                  }}
                />
              </h2>

              {/* Professional Summary */}
              <p className="hero-description">
                <span className="comment-line">
                  → Full Stack Developer with 1+ year experience
                </span><br />
                <span className="comment-line">
                  → Currently working as Junior Software Developer at DJ Computing
                </span><br />
                <span className="comment-line">
                  → Building and maintaining live production APIs
                </span><br />
                <span className="comment-line">
                  → Open to Software Developer opportunities
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta">
                <a href="#project" className="btn-primary-custom">{'<View_Projects />'}</a>
                <a href="#contact" className="btn-secondary-custom">{'<Contact_Me />'}</a>
              </div>

              {/* Social Links */}
              <div className="hero-social">
                <a
                  href="https://github.com/Pavithiran21"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/pavithiran-r-9a950b172"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:pavithiran.dev21@gmail.com" aria-label="Email">
                  <HiMail />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
