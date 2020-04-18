import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import yehonatan from '../images/yehonatan.jpg'
function About() {

    return (
        <Jumbotron >
            <p className="text-center">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={yehonatan}
                    />
                </Figure>
            </p>

            <h1 className="text-center" dir="rtl">ברוכים הבאים!</h1>
            <p className="text-center" dir="rtl">קוראים לי יהונתן ברי, אני עורך וידאו מקצועי שמתמחה בניו מדיה</p>
            <p className="text-center">
                <Button variant="outline-success">למעבר ללקוחות שלי</Button>
            </p>
        </Jumbotron>
    );
}
export default About;