import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import InstagramPosts from './InstagramPosts';
import PortfolioSection from './PortfolioSection';


function PortfolioPage(props){
    var on = props.section;
    return(
        <div>
        <PortfolioSection name="Nike" on = {on}/>
        <PortfolioSection name = "Airbnb" on = {on}/>
        <PortfolioSection name = "ICQ" on = {on}/>
        <PortfolioSection name = "American Pizza" on = {on}/>
        </div>
    );
}
export default PortfolioPage;