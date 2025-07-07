import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import PR from '../Images/PR-Mart.png';
import Student from '../Images/Studentlist.png';
import Job from '../Images/JobSearch.png';
import Chat from '../Images/Weconnect.png';

export const ProjectDetails = () => {
  return (
    <>
     <Container fluid id='project'>
        <Row>
            <h1 className='text-center'>Projects</h1>
        </Row>
        <p>
          Here are the projects I've worked on recently.
        </p>
        <Row>
          <Col  className="project-card">
            <ProjectCard
             imagePath = {Student}
              
              title = "Student MarkList App"
              description="A student mark list system enables teachers to store marks, allowing them to register and log in. Teachers possess the capability to perform CRUD operations (Create, Read, Update, Delete) on the student list. Similarly, students can register and log in using their email addresses. Upon logging in, students are required to enter their date of birth and roll number to access their results. The result includes details such as Name, Register Number, and Date of Birth. For each subject, students can view their marks and whether they passed or failed.
              They can access their overall result and percentage."
              tech = "ReactJs,NodeJs,ExpressJs,MongoDB"
              frontend="https://github.com/Pavithiran21/StudentCRUD-Frontend"
              backend="https://github.com/Pavithiran21/StudentCRUD-Backend"
              server="https://student-results.netlify.app"
            />
          </Col>
          <Col  className="project-card">
            <ProjectCard
              
              title ="PR-Mart"
              imagePath={PR}
              description="PR-Mart is an e-commerce application where users can place orders, add items to the cart, and view an order summary. After reviewing the order summary, when the user clicks on the Pay button, the application navigates to the Razorpay payment page for order completion. 
              Upon successful payment, users receive detailed order information and the current order status.
              Meanwhile, administrators have the capability to view user details, product information, and payment details. Admins can also update the order status based on the processing stage."
              tech = "ReactJs,NodeJs,ExpressJs,MongoDB"
              frontend="https://github.com/Pavithiran21/PR-Mart-Frontend"
              backend ="https://github.com/Pavithiran21/PR-Mart-Backend"
              server="https://pr-mart.netlify.app"
            />
          </Col>
        </Row>
        <Row>
          <Col  className="project-card">
            <ProjectCard
              imagePath = {Job}
              title = "Job Search"
              description="A job search feature is implemented to help users find employment opportunities. Admins have the capability to create and edit job details. Upon successful login, users are prompted to create a profile. Once the profile is created, the user is directed to the view profile page. 
              From there, users can apply for jobs, and after applying, they receive details of the application."
              tech = "ReactJs,NodeJs,ExpressJs,MongoDB"
              frontend="https://github.com/Pavithiran21/JobApp-Frontend"
              backend="https://github.com/Pavithiran21/Job-Backend"
              server="https://jobsearch21.netlify.app"
            />
          </Col>
          <Col  className="project-card">
            <ProjectCard
              imagePath = {Chat}
              title="WeConnect"
              description="WeConnect is a one-to-one chat application. Upon logging in, users are directed to the chat page. If no existing chats are found, users can search for another user by entering their email or username. Once the desired user is found, clicking on them opens a one-to-one chat. 
              Users also have the option to delete conversations. In the chat, Socket.IO is used to send and receive messages."
              tech = "ReactJs,NodeJs,ExpressJs,MongoDB"
              frontend="https://github.com/Pavithiran21/WeConnect-Frontend"
              backend ="https://github.com/Pavithiran21/WeConnect-Backend"
              server="https://weconnect121.netlify.app"
            />
          </Col>
        </Row>
        <hr/>
     </Container>
    </>
  )
}
