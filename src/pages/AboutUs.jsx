import React from 'react';
import TeamCard from '../components/TeamCard';
import NavBar from '../components/NavBar';
import Hero1 from '../components/Hero1';
import '../css/AboutUs.css';
import About from '../components/About';
import Footer from '../components/Footer';
import Button from '../components/Button';

function AboutUs(){
    return(
        <>
        <NavBar />
        <Hero1 Hero={{img: "src/assets/hero1.png", h1:(<>Your <span className="hero1-yellow">Trusted</span> Partner in <span className="hero1-yellow">Quality</span> Construction</>), h2:(<>Get to <span className="hero1-highlight">know </span>Us</>), p:"“At BuildLink, we are passionate about transforming spaces and delivering quality craftsmanship. With a commitment to excellence and customer satisfaction, our journey began with a vision to provide reliable handyman services. Let us help you build your dreams!”" }}/>
        <div className="about-us-content">
            <div className='img1'>
                <img src="src\assets\aboutUs1.png" />                
            </div>
            <div className='img2'>
                <img src="src\assets\aboutUs2.png" />
            </div>
            <div className='img3'>
                <img src="src\assets\aboutUs3.png" />
            </div>
        </div>
        <About />
        <div id="team">
            <h2>Meet Our Team</h2>
            <p>"Meet the BuildLink team! Our skilled professionals bring expertise and dedication to every project. Together, we ensure your vision is realized with quality and care!"</p>
        </div>
        <div className="team-container">
            <TeamCard teamcard={{img:"src/assets/teamCard-img1.png"}}/>
            <TeamCard teamcard={{img:"src/assets/teamCard-img2.png"}}/>
            <TeamCard teamcard={{img:"src/assets/teamCard-img3.png"}}/>
        </div>
        <div className='team-container'>
            <TeamCard teamcard={{img:"src/assets/teamCard-img4.png"}}/>
            <TeamCard teamcard={{img:"src/assets/teamCard-img5.png"}}/>
            <TeamCard teamcard={{img:"src/assets/teamCard-img6.png"}}/>
        </div>
        <div className='aboutUs-btn'>
            <Button btn={{text:"Get in Touch"}}/>
        </div>
        <Footer />
        </>
    );
}

export default AboutUs