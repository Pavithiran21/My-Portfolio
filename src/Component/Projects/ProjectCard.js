import React from 'react';
import { Card } from 'react-bootstrap';
import { BiLogoGithub } from 'react-icons/bi';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imagePath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        <div className="project-tech">
          <span className="tech-label">Tech Stack:</span>
          <p className="tech-stack">{props.tech}</p>
        </div>
        <div className="project-links">
          <a target='_blank' rel="noreferrer" href={props.frontend} className="project-btn">
            <BiLogoGithub /> Frontend
          </a>
          <a target='_blank' rel="noreferrer" href={props.backend} className="project-btn">
            <BiLogoGithub /> Backend
          </a>
          <a target='_blank' rel="noreferrer" href={props.server} className="project-btn project-btn-live">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};
