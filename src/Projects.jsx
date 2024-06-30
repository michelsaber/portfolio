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
            <p >This Page is in Progress.</p>
        <Button variant='outline-primary'>Visit</Button>
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
            <p className=' py-4 text-gray  '>This Page is in Progress.</p>   
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
        <p className='py-4 '>This Page is in Progress.</p>
            
        </Col>
      </Row>
      </Container>
     
        
    
    <img src={wavesFooter} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
    <Footer></Footer>
    </div>
  )
}

export default Projects