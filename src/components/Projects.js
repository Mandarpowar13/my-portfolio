import 'animate.css';
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import colorSharp2 from "../assets/color-sharp2.png";


import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {

            title: "Project Hunting Website",
            description: "Design And Development",
            imgUrl:projImg1
        },
        {
            title: "Trek Booking WebApp",
            description: "Design And Development",
            imgUrl:projImg2
        },
        {
            title: "Project Hunting Website",
            description: "Design And Development",
            imgUrl:projImg3
        }
    ]
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='First'>
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="First">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate_slideInUp" : ""}>
                                <Tab.Pane eventKey='First'>
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return(
                                                    <ProjectCard key={index}{...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='Third'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                    }
                </TrackVisibility>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}
