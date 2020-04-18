import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <footer className = "mt-5" fluid={true}>
            <Container >
                <Row className = "border-top justify-content-between p-3" fluid={true}>
                    <Col xs={6} md={6} >
                    Copyright © 2020 Yehonatan Bary. All Rights Reserved 
                    </Col>
                    <Col xs={6} md={3}>
                        This site was made by: <a href= "https://www.linkedin.com/in/aviveldan/">Aviv Eldan</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;