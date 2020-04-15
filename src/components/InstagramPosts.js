import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Row, Container, Col } from 'react-bootstrap';


function InstagramPosts() {
    return (
        <Container fluid="md">
            <Row fluid = "md">
                <Col>
                    <InstagramEmbed
                        url='https://www.instagram.com/p/B9BucQjnVAf/'
                        maxWidth={250}
                        hideCaption={true}
                        containerTagName='div'
                        injectScript
                        protocol=''
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </Col>

                <Col>
                    <InstagramEmbed
                        url='https://www.instagram.com/p/B-6ldu1HaVw/'
                        maxWidth={250}
                        hideCaption={true}
                        containerTagName='div'
                        injectScript
                        protocol=''
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </Col>

                <Col>
                    <InstagramEmbed
                        url='https://www.instagram.com/p/B9MGPFwHn_c/'
                        maxWidth={250}
                        hideCaption={true}
                        containerTagName='div'
                        injectScript
                        protocol=''
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </Col>
            </Row>
        </Container>

    );
}
export default InstagramPosts;