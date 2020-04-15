import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <footer className = "mt-5" fluid={true}>
            <Container >
                <Row className = "border-top justify-content-between p-3">
                    <Col className = "p-0" >
                    Copyright © 2020 Yehonatan Bary. All Rights Reserved 
                    </Col>
                    <Col className =  "p-0 justify-content-end" >
                        This site was made by: <a href= "https://www.linkedin.com/in/aviveldan/">Aviv Eldan</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;