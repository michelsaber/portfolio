import React from 'react';
import Header from "./components/Header";
import picture from "./icons/mypic.jpeg";
import Image from 'react-bootstrap/Image';
import wavesHeader from "./icons/wavesHeader.svg";
import { Container } from 'react-bootstrap';

function About() {
  return (
    <>
    <div style={{backgroundColor :"#262f38"}}>
        <Header></Header>
        <div style={{display:"flex"}}>
        <Image src={picture} rounded fluid style={{maxWidth:"30%", maxHeight:"30vw"}} className='px-4 m-5'/>
          <Container className='px-5'>
          <h2 className='text-white py-5 px-5 fs-3'>Michel Saber</h2>
          <h3 className='text-white py-2 px-5 fs-4'>Software Engineer</h3>
          <p className='text-white pt-2 px-5 fs-5'>I am a self-motivated Software Engineer looking for a position where I can make an impact and continue learning.</p>
          <p className='text-white  px-5 fs-5'>Creating this site has been a way to showcase my accumulated knowledge and skills, driven by the hope that it propel me one step closer to my aspirations.</p>
          <p className='text-white pt-5 px-5 fs-5'>Web Development Bootcamp Languages (MERN Stack): HTML, CSS, Javascript, React, Nodejs, Express und MongoDB.</p>
          <p className='text-white  px-5 fs-5'>Additional Online Courses: Python, Google Agile Project Management, FreeCodeCamp Full-Stack Development and Meta JavaScript and Algorithms.</p>
          <h4 className='text-white pt-5 px-5 fs-4'>Location</h4>
          <h5 className='text-white pt-1 px-5 fs-5'>Munich</h5>
          </Container>
        </div>
    </div>
    <img src={wavesHeader} style={{width:"100%", backgroundColor:"white"}} alt=""/>
    </>  
  )
}

export default About