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
        <Col sm={6} >
            <img src={projectImg1}  fluid rounded alt=""/>
        </Col>
        <Col sm={6} >
            <h2 className="text-center fs-1 fw-bold" style={{color:"#262f38"}}>Sparsam</h2>
            <p >Indulge your senses in the allure of sun-kissed sands and gentle waves. Our slice of paradise invites you to escape the ordinary and embrace the extraordinary. Immerse yourself in the tranquil beauty of our beach haven, where every moment is a promise of relaxation and pure bliss. Your dream vacation begins here.</p>
        <Button variant='outline-primary'>Visit</Button>
        </Col>
      </Row>
      </Container>
      <img src={wavesFooter2} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
      <Card className='border-0'>
      <Card.Body className=' text-white text-center fst-italic ' style={{backgroundColor:"#262f38"}}>Embark on a journey where we believe every escape deserves the best, and your extraordinary vacation starts with us.</Card.Body>
    </Card>
    <Container>
    <Row className='row align-items-center py-4' id="locations">
        <Col sm={6} >
            <h2 className="text-center fs-1 fw-bold" style={{color:"#262f38"}}>Festiva</h2>
            <p className=' py-4 text-gray  '>Meet our passionate touristic guides, the heart and soul of your immersive journey. With a wealth of knowledge and a genuine love for the destinations they unveil, our guides transform your exploration into an insightful adventure, creating unforgettable memories at every turn. We are avalaible in Germany, France and UK.</p>   
        </Col>
        <Col sm={6} >
        <img src={projectImg2}  fluid rounded alt=""/>  
        </Col>
      </Row>
      </Container>
      <img src={wavesFooter2} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
      <Card className='border-0'>
      <Card.Body className='text-white text-center fst-italic' style={{backgroundColor:"#262f38"}} >Step into an odyssey where we stand firm in our belief that every retreat should be nothing short of extraordinary, and your exceptional journey unfolds in our hands.</Card.Body>
    </Card>
    <Container>
      <Row className='row align-items-center py-4'>
        <Col sm={6} >
            <img src={projectImg3}  fluid rounded alt=""/> 
        </Col>
        <Col sm={6} >
        <h2 className="text-center fs-1 fw-bold" style={{color:"#262f38"}}>Vacago</h2>
        <p className='py-4 '>Our dedicated team is committed to turning your dream vacation into a seamless reality, providing unparalleled support every step of the way. From expert guidance to personalized assistance, we are here to ensure your getaway is not only memorable but effortlessly extraordinary.</p>
            
        </Col>
      </Row>
      </Container>
     
        
    
    <img src={wavesFooter} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
    <Footer></Footer>
    </div>
  )
}

export default Projects