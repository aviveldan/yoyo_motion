
import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import InstagramPosts from './InstagramPosts';


function PortfolioSection(props){
    return(
        <Accordion defaultActiveKey="1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {props.name}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <InstagramPosts/>
                        </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default PortfolioSection;