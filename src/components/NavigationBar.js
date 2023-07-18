import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.svg'
import navicon1 from '../assets/nav-icon1.svg'
import navicon2 from '../assets/icons8-github.svg'
import navicon3 from '../assets/nav-icon3.svg'


export default function NavBar() {
  const [ActiveLink, setActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = ()=>{
      if(window.scrollY >50){
        setScrolled(true);

      }else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  },[])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }
  return (
    <>
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <span className='navbar-toggler-icon'></span> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ActiveLink ==='home'?'active navbar-link':'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={ActiveLink ==='skills'?'active navbar-link':'navbar-link' } onClick={()=>onUpdateActiveLink('skills')}>skills</Nav.Link>
            <Nav.Link href="#projects"className={ActiveLink ==='Projects'?'active navbar-link':'navbar-link' } onClick={()=>onUpdateActiveLink('Projects')}>projects</Nav.Link>
           
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/mandar-powar-5b9ba7168/' target='_blank'><img src={navicon1}></img> </a>
                <a href='https://github.com/Mandarpowar13' target='_blank'><img style={{width:'39px', height:'40px'}}src={navicon2}></img> </a>
                <a href='#'  target='_blank'><img src={navicon3}></img> </a>
            </div>
            <HashLink to='#connect'>
                <button className='vvd' ><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
