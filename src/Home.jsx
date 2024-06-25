import React from 'react'
import Header from "./components/Header";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import sparsamSS from "./icons/macbook-overlay.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import code from "./icons/code.png";
import responsive from "./icons/responsive.png";
import clean from "./icons/clean.png";
import { Projects } from './components/Projects';
import waves2 from "./icons/waves2.svg";
import wavesFooter from "./icons/wavesFooter.svg";
import wavesFooter2 from "./icons/wavesFooter2.svg";
import wavesHeader from "./icons/wavesHeader.svg";

function Home() {
  return (
    <div  >
        <Header></Header>
        <img src={wavesHeader} style={{width:"100%", backgroundColor:"white"}} alt=""/>
        <div className="rounded-bottom" style={{backgroundColor :"white", color:"#75e6da"}} >
        <Container >
    <Row className='py-5'>
      <Col xs={6} md={6} >
        <h2 className='text-black py-5 fs-1' >Turning ideas into reality</h2>
        <Link to="/about" style={{textDecoration:"none", color:"#262f38"}} className='fs-4 fw-light'>Meet Michel</Link>
      </Col>
      <Col xs={6} md={6}>
        <Image  src={sparsamSS} style={{width:"60%", height:"auto"}} fluid  />
      </Col>
      </Row>
      </Container>
      </div>
      <img src={wavesFooter2} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
<div className='p-5' style={{backgroundColor:"#262f38"}} >

    <Container>
    <CardGroup>
      <Card className='text-center text-white' style={{backgroundColor:"#262f38"}}>
        <Card.Img variant="top" className='mx-auto' src={code} style={{width:"50%"}}/>
        <Card.Body>
          <Card.Title>Programmer</Card.Title>
          <Card.Text>
          Embrace each problem as an opportunity to innovate, learn, and push the boundaries of what's possible through code.
          </Card.Text>
        </Card.Body>
        
      </Card >
      <Card className='text-center text-white' style={{backgroundColor:"#262f38"}} >
        <Card.Img variant="top" src={responsive} className='mx-auto' style={{width:"50%"}} />
        <Card.Body>
          <Card.Title>Responsive Design</Card.Title>
          <Card.Text>
          Design, functionality, and performance go hand-in-hand. I develop websites with the end user in mind in order to improve functionality and boost performance, while ensuring responsive behavior on both mobile or desktop devices.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='text-center text-white' style={{backgroundColor:"#262f38"}}>
        <Card.Img variant="top" src={clean} className='mx-auto' style={{width:"50%"}} />
        <Card.Body>
          <Card.Title>Clean Code</Card.Title>
          <Card.Text>
          I focus on writing clean code to keep your website light and easily editable, I know that successful projects require a team-effort, and having clean code ensures multiple parties are able to easily and quickly jump in to continue the project.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    
</Container>
</div>
<img src={waves2} style={{width:"100%", backgroundColor:"white"}} alt=""/>
<div>
<Container>
  <Projects></Projects>
</Container>
</div>
<img src={wavesFooter} style={{width:"100%", backgroundColor:"#262f38"}} alt=""/>
  <Footer></Footer>
        </div>
  )
}

export default Home