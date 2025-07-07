import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BiLogoGithub } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';

export const ProjectCard = (props) => {
    return (
        
        <Card className="project-card-view">
          <Card.Img variant="top" src={props.imagePath} alt="card-img" />
          <Card.Body>
            <Card.Title className='text-center'> {props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Card.Text>
              <Row>
                <b className='text-center'>Tech used</b>
                <p className='text-center'>{props.tech}</p>
                

              </Row>
                
            </Card.Text>
              <Row className='text-center'>
                <Col  sm={12} md={4} lg={4}  className='mb-2 mb-sm-0'>
                <a  target='_blank' rel="noreferrer" href={props.frontend}><Button variant='outline-success'><BiLogoGithub/> Frontend</Button></a>
                </Col>
                <Col sm={12} md={4} lg={4}  className='mb-2 mb-sm-0'>
                <a  target='_blank' rel="noreferrer" href={props.backend}><Button variant='outline-success'><BiLogoGithub/> Backend </Button></a>
                </Col>
                <Col sm={12} md={4} lg={4}  className='mb-2 mb-sm-0'>
                <a  target='_blank' rel="noreferrer" href={props.server}><Button variant='outline-danger'> <FaComputer/> Website </Button></a>
                </Col>

              </Row>

            
          </Card.Body>
        </Card>
      );
}
