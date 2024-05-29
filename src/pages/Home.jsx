import React from 'react'
import Header from "../components/Header";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import macBook from "../icons/macbook.png";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import sparsamSS from "../icons/macbook-overlay.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import code from "../icons/code.png";
import responsive from "../icons/responsive.png";
import clean from "../icons/clean.png";

function Home() {
  return (
    <div  >
        <Header></Header>
        <div className="rounded-bottom" style={{backgroundColor :"#262f38", color:"#75e6da"}} >
        <Container >
    <Row className='py-5'>
      <Col xs={6} md={6} >
        <h2 className='text-white py-5 fs-1' >Turning ideas into reality</h2>
        <Link to="/about" style={{textDecoration:"none", color:"white"}} className='fs-4 fw-light'>Meet Michel</Link>
      </Col>
      <Col xs={6} md={6}>
        <Image  src={macBook} fluid  />
      </Col>
      </Row>
      </Container>
      </div>

<Container>
    <Row className='py-5'>
        <h2 className='text-center fs-bold ' style={{ color:"#262f38"}}> Featured Work</h2>
      <Col  xs={6} md={5} className='py-5'>
      <Image className="px-5" src={sparsamSS}  fluid thumbnail />
      </Col>
      <Col className='py-5 d-flex align-items-center justify-content-center ' xs={6} md={6}>
      
      <h3 style={{textDecoration:"none", color:"#262f38"}} className='d-flex align-items-center justify-content-center fs-4 '>Check out my newest featured project: </h3>
      <br />
      <Button href="https://sparsam.netlify.app/" variant="outline-dark">Sparsam</Button>
       
      </Col>
      
    </Row>
    </Container>

<div>
    <Container>
    <CardGroup>
      <Card className='text-center' >
        <Card.Img variant="top" className='mx-auto' src={code} style={{width:"50%"}}/>
        <Card.Body>
          <Card.Title>Programmer</Card.Title>
          <Card.Text>
          Embrace each problem as an opportunity to innovate, learn, and push the boundaries of what's possible through code.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='text-center' >
        <Card.Img variant="top" src={responsive} className='mx-auto' style={{width:"50%"}} />
        <Card.Body>
          <Card.Title>Responsive Design</Card.Title>
          <Card.Text>
          Design, functionality, and performance go hand-in-hand. I develop websites with the end user in mind in order to improve functionality and boost performance, while ensuring responsive behavior on both mobile or desktop devices.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='text-center ' >
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
  <Footer></Footer>
        </div>
  )
}

export default Home