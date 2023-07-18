import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/meter1.svg'
import meter2 from '../assets/meter2.svg';
import meter3 from '../assets/meter3.svg';
import reactL from '../assets/Skills/icons8-react-150.svg'
import js from '../assets/Skills/icons8-javascript-150.svg'
import html from '../assets/Skills/icons8-html.svg'
import css from '../assets/Skills/icons8-css.svg';
import nodejs from '../assets/Skills/icons8-node-js.svg'
import springBoot from '../assets/Skills/icons8-spring-boot.svg'
import colorsharp from '../assets/color-sharp.png'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                           
                            <div className="item animate__animated animate__zoomIn">
                                <img src={reactL} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item animate__animated animate__zoomIn">
                                <img src={js} alt="Image" />
                                <h5>javascript</h5>
                            </div>
                            <div className="item animate__animated animate__zoomIn" >
                                <img src={nodejs} alt="Image" />
                                <h5>nodejs</h5>
                            </div>
                            <div className="item animate__animated animate__zoomIn">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item animate__animated animate__zoomIn">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item animate__animated animate__zoomIn">
                                <img src={springBoot} alt="Image" />
                                <h5>springBoot</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorsharp} alt="Image" />
    </section>
  
  )
}
