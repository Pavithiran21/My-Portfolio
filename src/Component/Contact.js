import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id='contact' className="section-padding">
      <Container>
        <h2 className="section-title">{'<Contact />'}</h2>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <p className="contact-intro">
              <span className="comment-line">{"// Let's build something amazing together"}</span><br />
              <span className="comment-line">{"// Open for opportunities, collaborations, and tech discussions"}</span>
            </p>

            <div className="contact-grid">
              <a href="mailto:pavithiranarthi359@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info">
                  <h4>Email</h4>
                  <p>pavithiran.dev21@gmail.com</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>

                <div className="contact-info">
                  <h4>Contact</h4>

                  <a href="tel:+918667338337" className="contact-link">
                    📞 Call : +91 86673 38337
                  </a>

                  <a
                    href="https://wa.me/919486970967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link whatsapp"
                  >
                    💬 WhatsApp: +91 94869 70967
                  </a>

                  <a href="tel:+919486970967" className="contact-link">
                    📞Alternate : +91 94869 70967
                  </a>

                </div>
              </div>


              <a href="https://github.com/Pavithiran21" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-info">
                  <h4>GitHub</h4>
                  <p>@Pavithiran21</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/pavithiran-ramaraj" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-info">
                  <h4>LinkedIn</h4>
                  <p>Pavithiran R</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <p>{'<Designed & Built by Pavithiran R />'}</p>
      </footer>
    </section>
  );
};



