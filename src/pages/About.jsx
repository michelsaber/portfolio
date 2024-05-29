import React from 'react';
import Header from "../components/Header";
import picture from "../icons/mypic.jpeg";
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div style={{backgroundColor :"#262f38"}}>
        <Header></Header>
        <Image src={picture} rounded style={{width:"30%"}} className='px-4 m-5'/>
    </div>
        
  )
}

export default About