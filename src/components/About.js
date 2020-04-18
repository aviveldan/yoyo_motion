import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import yehonatan from '../images/yehonatan.jpg'
import { Link } from 'react-router-dom';
function About(props) {

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
            <Link className="nav-link" to="/portfolio" exact>
                            <Button variant="outline-success" onClick={()=>props.handleClick(null)}>למעבר לעבודות שלי</Button>
                                </Link>
            </p>
        </Jumbotron>
    );
}
export default About;