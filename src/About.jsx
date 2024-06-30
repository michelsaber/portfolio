import React from 'react';
import Header from "./components/Header";
import picture from "./icons/mypic.jpeg";
import wavesHeader from "./icons/wavesHeader.svg";
import { Container,Row, Col } from 'react-bootstrap';

function About() {
  return (
    <>
    <div style={{backgroundColor :"#262f38"}}>
        <Header></Header>
        <Container>
      <Row className='row align-items-center py-4' >
        <Col sm={6} >
            <img src={picture} style={{width:"90%"}}  fluid rounded alt=""/>
        </Col>
        <Col sm={6} >
        <h2 className='text-white py-5 fs-3'>Michel Saber</h2>
          <h3 className='text-white py-2 fs-4'>Software Engineer</h3>
          <p className='text-white pt-2 fs-5'>I am a self-motivated Web Developer looking for a position where I can make an impact and continue learning.</p>
          <p className='text-white  fs-5'>Creating this site has been a way to showcase my accumulated knowledge and skills, driven by the hope that it propel me one step closer to my aspirations.</p>
          <p className='text-white pt-3 fs-5'>As a civil engineer with extensive experience in project management, I have discovered my growing passion for innovative technologies. This personal enthusiasm has not only inspired me to explore modern web development technologies in depth, but has also awakened my desire to continuously expand my knowledge in this field.</p>
          <p className='text-white pt-3 fs-5'>In order to deepen my knowledge and keep up to date with the latest developments in web development, I successfully completed the “Ironhack” bootcamp. There I was able to apply and expand my theoretical knowledge in practical projects. By working on real-world tasks, I was not only able to demonstrate my skills in front-end (HTML, CSS, JavaScript and React) and back-end development (NodeJS and MongoDB), version control and agile development methods, but also significantly improve them.</p>
          <p className='text-white pt-3 fs-5'>Web Development Bootcamp Languages (MERN Stack): HTML, CSS, Javascript, React, Nodejs, Express und MongoDB.</p>
          <p className='text-white fs-5'>Additional Online Courses: Python, Google Agile Project Management, FreeCodeCamp Full-Stack Development and Meta JavaScript and Algorithms.</p>
          <h4 className='text-white pt-3 fs-4'>Location</h4>
          <h5 className='text-white pt-1 fs-5'>Munich</h5>
        </Col>
      </Row>
      </Container>

    </div>
    <img src={wavesHeader} style={{width:"100%", backgroundColor:"white"}} alt=""/>
    </>  
  )
}

export default About