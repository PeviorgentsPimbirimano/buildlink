import React from 'react';

import NavBar from '../components/NavBar';
import Hero1 from '../components/Hero1';

function AboutUs(){
    return(
        <>
        <NavBar />
        <Hero1 Hero={{img: "src/assets/hero1.png", h1:" “Your Trusted Partner in Quality Construction” ", h2:"Get to know Us", p:"“At BuildLink, we are passionate about transforming spaces and delivering quality craftsmanship. With a commitment to excellence and customer satisfaction, our journey began with a vision to provide reliable handyman services. Let us help you build your dreams!”" }}/>
        </>
    );
}

export default AboutUs