import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Team from '../components/Team';
import PostingJobs from '../components/PostingJobs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';  

function Home() {
    return(
        <>
            <NavBar />
            <Hero />
            <About />
            <Features />
            <Testimonials />
            <Team />
            <PostingJobs />
            <Footer />
        </>
    );
}
export default Home