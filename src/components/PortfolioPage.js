import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import InstagramPosts from './InstagramPosts';
import PortfolioSection from './PortfolioSection';


function PortfolioPage(props){
    return(
        <div>
        <PortfolioSection name="Nike"/>
        <PortfolioSection name = "Airbnb"/>
        <PortfolioSection name = "ICQ"/>
        </div>

    );
}
export default PortfolioPage;