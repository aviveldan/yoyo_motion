import React from 'react';
import About from './About';
import Logos from './Logos';
import InstagramEmbed from 'react-instagram-embed';
import InstagramPosts from './InstagramPosts';


function HomePage(props) {
    return (
        <div>
            <About />
            <InstagramPosts/>
            <Logos />
        </div>
    );
}
export default HomePage;