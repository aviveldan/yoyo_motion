import React from 'react';
import Figure from 'react-bootstrap/Figure';
import icq from '../images/icq.jfif';
import airbnb from '../images/airbnb.jfif';
import nike from '../images/nike.png';
import zichron from '../images/zichron.png';
import { Container, Col, Row } from 'react-bootstrap';

function ClientLogos(props){
    return(
        <Container fluid="md">
        <Row>
            <Col>
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={icq}
                    />
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
                </Figure>
            </Col>

            <Col>
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={airbnb}
                    />
                </Figure>
            </Col>
            <Col>
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={zichron}
                    />
                </Figure>
            </Col>
        </Row>
    </Container>
    );
}
export default ClientLogos;