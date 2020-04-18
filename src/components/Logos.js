import React from 'react';
import Figure from 'react-bootstrap/Figure';
import icq from '../images/icq.jfif';
import airbnb from '../images/airbnb.jfif';
import nike from '../images/nike.png';
import zichron from '../images/zichron.png';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClientLogos(props) {
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={nike}
                        />
                        <Figure.Caption className = 'text-center' >
                            <Link className="nav-link" to="/portfolio" exact>
                            <Button variant="outline-success" onClick={()=>props.handleClick("Nike")}>ראה עבודות</Button>
                                </Link>
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={nike}
                        />
                        <Figure.Caption className = 'text-center' >
                        <Link className="nav-link" to="/portfolio" exact>
                            <Button variant="outline-success" onClick={()=>props.handleClick("Airbnb")}>ראה עבודות</Button>
                                </Link>
                        </Figure.Caption>
                    </Figure>
                </Col>

                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={nike}
                        />
                        <Figure.Caption className = 'text-center' >
                        <Link className="nav-link" to="/portfolio" exact>
                            <Button variant="outline-success" onClick={()=>props.handleClick("ICQ")}>ראה עבודות</Button>
                                </Link>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure as='a' href = '/portfolio'>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={nike}
                        />
                         <Figure.Caption className = 'text-center' >
                         <Link className="nav-link" to="/portfolio" exact>
                            <Button variant="outline-success" onClick={()=>props.handleClick("American Pizza")}>ראה עבודות</Button>
                                </Link>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}
export default ClientLogos;