import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiPhone } from "react-icons/bi";

export const Contact = () => {
   return (
      <>
         <Container fluid className='text-center' id='contact'>
            <Row>
                  <h1 class>Contact</h1>
            </Row>
            <Row>
                  <h2>Contact me through the following links at anytime!!!</h2>
                  <p><b>Drop a Suggesstion,feedback,opportunities or we can colaborate on a project.</b></p>
            </Row>
          
            
           
            

            <Row>
               <Col sm={12} md={6} lg={4} className='contacts p-3 mx-auto' >
                  <div className='icon' >

                   <BiLogoGmail/>

                  </div>
                  <div  className='mt-2'>
                     
                        <p>pavithiranarthi359@gmail.com</p>
                     
                   

                  </div>
                  
               </Col>
            

            </Row>

            <Row>
             <Col sm={12} md={6} lg={4} className='contacts p-3 mx-auto' >
                  <div className='icon'>
                        <BiPhone/>
                     </div>
                     <div className='mt-2'>
                        <p >9486970967,8667338337</p>

                     </div>
               </Col>
               
               

            </Row>
            <Row>
               <Col sm={12} md={6} lg={4} className='contacts p-3 mx-auto' >
                  <div className='icon'>
                     <BiLogoGithub/>

                  </div>
                  <div className='mt-3'>
                     <a
                        href="https://github.com/Pavithiran21"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                     >
                     <p className='contact-all'>Github</p> 
                     </a>
                  </div>
               </Col>
            

            </Row>
 
            <Row>
               <Col sm={10} md={6} lg={4} className='contacts p-3 mx-auto' >
                  <div className='icon'>
                     <BiLogoLinkedin/>

                  </div>
                  <div className='mt-3'>
                     <a
                        href="https://www.linkedin.com/in/pavithiran-r-9a950b172"
                        target="_blank"
                        rel="noreferrer"
                        className=""
                     >
                        <p className='contact-all'>LinkedIn</p>
                     </a>
                     

                  </div>
               </Col>
               

            </Row>

         
         
         
          
             
            

         
         </Container>
      </>
   )
}



