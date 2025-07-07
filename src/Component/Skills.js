import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiBootstrap, DiJavascript1, DiNodejs } from "react-icons/di";

import { RiReactjsFill } from 'react-icons/ri';
import { BiLogoMongodb } from 'react-icons/bi';

export const Skills = () => {
  return (
    <>
      <Container fluid id='skill'>
        <Row className='text-center'>
          <Col>
            <h1>My SkillSet</h1>
          </Col>
        </Row>
        <Row className='text-center'>

          <Col>
            
            <div>
             <FaHtml5 style={{ fontSize: '5rem', backgroundColor: '#e34f26' }} />

            </div>
            <p>Html-5</p>
            
            
          </Col>
          <Col>
            <div> 
              <FaCss3Alt style={{ fontSize: '5rem', backgroundColor: '#264de4' }} />
            </div>
            <p>CSS-3</p>
            
          </Col>
           <Col>
           <div>
             <DiBootstrap style={{ fontSize: '5rem', backgroundColor: '#563d7c' }} />
              
            </div>
            <p>Bootstrap</p>
            
           </Col>
           <Col>
            <div>
             <DiJavascript1 style={{ fontSize: '5rem', backgroundColor: '#FFC300' }} />
             <p>JavaScript</p>
              
            </div>
          </Col>
          
          
          
            
        </Row>
        <Row className='text-center'>
          
          <Col>
            <div>
             <RiReactjsFill style={{ fontSize: '5rem', backgroundColor: '#61DBFB' }} />
             <p>ReactJs</p>
            </div>
          </Col>
          <Col>
            <div>
             <DiNodejs style={{ fontSize: '5rem', backgroundColor: '#3C873A' }} />
             <p>NodeJs</p>
              
            </div>
          </Col>
          <Col>
            <div>
            <BiLogoMongodb style={{ fontSize: '5rem', backgroundColor: '#3FA037' }} />
            <p>MongoDB</p>
              
            </div>
          </Col>

        </Row>
        <hr/>
      </Container>
    </>
  );
};
