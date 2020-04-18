
import React from 'react';
import { Card, Accordion, Button, useAccordionToggle } from 'react-bootstrap';
import InstagramPosts from './InstagramPosts';


function PortfolioSection(props){

    return(
        <Accordion defaultActiveKey={props.on}>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={props.name}>
                        {props.name}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={props.name}>
                    <Card.Body>
                    <InstagramPosts name = {props.name}/>
                        </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
export default PortfolioSection;