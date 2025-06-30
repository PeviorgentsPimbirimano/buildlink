import React, { useState } from "react";
import NavBar from '../components/NavBar';
import Hero1 from '../components/Hero1';
import Footer from '../components/Footer';
import  '../css/Handyman.css';
import ProfileCard from '../components/ProfileCard';
import PostingJobs from '../components/PostingJobs';

function Handyman(){
const categories = ["All", "Plumber", "Builder", "Electrician"];

// Example data -- you can adjust/add images and types
const profiles = [
  { occupation: "Carpenter", name: "Tashley Park", image: "src/assets/services-img1.png", type: "Handyman", category: "Builder" },
  { occupation: "Specialist", name: "Mugo Plumbers", image: "src/assets/services-img2.png", type: "Handyman", category: "Plumber" },
  { occupation: "Contractors", name: "APK Construction", image: "src/assets/services-img3.png", type: "Company", category: "Builder" },
  { occupation: "Specialist", name: "BG-Electricians", image: "src/assets/services-img4.png", type: "Handyman", category: "Electrician" },
  { occupation: "Contractors", name: "Trag-Contractors", image: "src/assets/services-img5.png", type: "Company", category: "Builder" },
  { occupation: "Builder", name: "Joseph.John", image: "src/assets/services-img6.png", type: "Handyman", category: "Builder" },
];

    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    
    // Filter profiles by category
    const filteredProfiles = selectedCategory === "All"
      ? profiles
      : profiles.filter(profile => profile.category === selectedCategory);
    
    // Pagination logic (3 profiles per "page")
    const profilesPerPage = 3;
    const pageCount = Math.ceil(filteredProfiles.length / profilesPerPage);
    const displayedProfiles = filteredProfiles.slice(
      currentPage * profilesPerPage,
      (currentPage + 1) * profilesPerPage
    );
  
    // Whenever the category changes, reset to the first page
    React.useEffect(() => {
      setCurrentPage(0);
    }, [selectedCategory]);

    return(
        <>
        <NavBar />
        <Hero1 Hero={{img: "src/assets/hero1(1).png", h1:(<>Your <span className="hero1-yellow">Solution</span> for Every <span className="hero1-yellow">Fix!</span></>), h2:(<>Handyman <span className="hero1-highlight">Services</span></>), p:"“At BuildLink, our handyman services are designed to tackle all your repair and maintenance needs. From quick fixes to complex projects, our experienced team is ready to help you with efficiency and expertise. Trust us to keep your space in top shape—contact us today!”" }}/>
        <div className="handyman">
            <div>
                <h2>Find your <br />Handyman</h2>
            </div>
            <div>
              <ul className="category-list">
                {categories.map(cat => (
                  <li
                    key={cat}
                    className={selectedCategory === cat ? "active" : ""}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
        </div>
        <div className="container1">
            <ProfileCard
              occupation="Carpenter"
              name="Tashley Park"
              image="src\assets\services-img1.png"
              type="Handyman"
            />
            <ProfileCard
              occupation="Specialist"
              name="Mugo Plumbers"
              image="src\assets\services-img2.png"
            />
            <ProfileCard
              occupation="Contractors"
              name="APK Construction"
              image="src\assets\services-img3.png"
            />
        </div>
        <div className="container1">
            <ProfileCard
              occupation="Specialist"
              name="BG-Electricians"
              image="src\assets\services-img4.png"
            />
            <ProfileCard
              occupation="Contractors"
              name="Trag-Contractors"
              image="src\assets\services-img5.png"
            />
            <ProfileCard
              occupation="Contractors"
              name="Joseph.John"
              image="src\assets\services-img6.png"
              type='Handyman'
            />
        </div>
        <div className="carousel-dots">
            <span className={currentPage === 0 ? "dot active" : "dot"} onClick={() => setCurrentPage(0)} />
            <span className={currentPage === 1 ? "dot active" : "dot"} onClick={() => setCurrentPage(1)} />
            <span className={currentPage === 2 ? "dot active" : "dot"} onClick={() => setCurrentPage(2)} />
        </div>
        <PostingJobs />
        <Footer />
        </>
    );
}

export default Handyman;