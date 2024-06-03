import { Container, Row, Col } from "react-bootstrap";
import logo from "../icons/logo.svg";
import navIcon1 from "../icons/nav-icon1.svg";
import navIcon2 from "../icons/nav-icon2.svg";
import navIcon3 from "../icons/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer pt-3" style={{backgroundColor:"#262f38"}}>
      <Container >
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="text-white">Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer