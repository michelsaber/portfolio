import React from 'react';
import Header from "./components/Header";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projectImg1 from "./icons/project-img1.png";
import projectImg2 from "./icons/project-img2.png";
import projectImg3 from "./icons/project-img3.png";
import Footer from './components/Footer';
import wavesFooter from "./icons/wavesFooter.svg";
import wavesProjects from "./icons/wavesProjects.svg";
import wavesFooter2 from "./icons/wavesFooter2.svg";

function Projects() {
  return (
    <div>
        <Header></Header>
        <img src={wavesProjects} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
        <Container>
      <Row className='row align-items-center py-4' >
        <Col sm={6}>
            <img src={projectImg1}  fluid rounded alt=""/>
        </Col>
        <Col sm={6} >
            <h2 className="text-center fs-1 fw-bold" style={{color:"#262f38"}}>Sparsam</h2>
            <p className='pt-4 text-gray'>A Responsive budgeting app for monthly and weekly planning. </p>
              <p className='pt-1'>Frontend: React, Chartjs, HTML, CSS and Javascript. Backend: Express and MongoDB.</p>
            <a className="px-3" href="https://sparsam.netlify.app/"><Button variant='outline-primary'>Visit</Button></a> 
            <a className="px-3" href="https://github.com/fraulueneburg-ironhack/p3-frontend"><Button variant='outline-primary'>Frontend Repo</Button></a>
            <a  className="px-3" href="https://github.com/fraulueneburg-ironhack/p3-backend"><Button variant='outline-primary'>Backend Repo</Button></a>
        </Col>
      </Row>
      </Container>
      <img src={wavesFooter2} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
      <Card className='border-0'>
      <Card.Body className=' text-white text-center fst-italic ' style={{backgroundColor:"#262f38"}}>Javascript, React and MongoDB.</Card.Body>
    </Card>
    <Container>
    <Row className='row align-items-center py-4' id="locations">
        <Col sm={6} >
            <h2 className="text-center fs-1 fw-bold" style={{color:"#262f38"}}>Festiva</h2>
            <p className=' pt-4 text-gray  '>An event Website where you can sign up, add, edit and delete upcoming events. </p>
              <p className='pt-1'>Frontend: Handlebars, HTML, CSS and Javascript. Backend: Express and MongoDB.</p>   
            <a className="px-3" href="https://festiva.adaptable.app/"><Button variant='outline-primary'>Visit</Button></a> 
            <a className="px-3" href="https://github.com/michelsaber/Ironhack-M2-Project"><Button variant='outline-primary'>Code</Button></a> 
        </Col>
        <Col sm={6} >
        <img src={projectImg2}  fluid rounded alt=""/>  
        </Col>
      </Row>
      </Container>
      <img src={wavesFooter2} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
      <Card className='border-0'>
      <Card.Body className='text-white text-center fst-italic' style={{backgroundColor:"#262f38"}} >Javascript, Handlebars and MongoDB.</Card.Body>
    </Card>
    <Container>
      <Row className='row align-items-center py-4'>
        <Col sm={6} >
            <img src={projectImg3}  fluid rounded alt=""/> 
        </Col>
        <Col sm={6} >
        <h2 className="text-center fs-1 fw-bold" style={{color:"#262f38"}}>Vacago</h2>
        <p className='pt-4 '>A Responsive Frontend Website for a vacation and travel agency. </p>
          <p className='pt-1'>Frontend: React, React Bootstrap, Boostrap, HTML, CSS and Javascript. </p>
        <a className="px-3" href="https://vacago.netlify.app/"><Button variant='outline-primary'>Visit</Button></a> 
        <a className="px-3" href="https://github.com/michelsaber/vacago"><Button variant='outline-primary'>Code</Button></a> 
            
        </Col>
      </Row>
      </Container>
     
        
    
    <img src={wavesFooter} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
    <Footer></Footer>
    </div>
  )
}

export default Projects