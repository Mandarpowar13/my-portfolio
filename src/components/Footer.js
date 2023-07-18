import React from 'react'
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
   
    return (
        <footer className="footer">
        <Container>
            <Row className='align-items-center'>
                <Col size={12} sm={6}>

                </Col>
                <Col size={12} sm={6} className='text-center text-sm-end'>
                    
                    <p>Copyright 2022. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}
