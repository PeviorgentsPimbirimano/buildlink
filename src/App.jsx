import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import PostingJobs from './components/PostingJobs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Hero1 from './components/Hero1';
import TeamCard from './components/ProfileCard';

function App() {
  return (
    <>
      <Navbar />
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

export default App;