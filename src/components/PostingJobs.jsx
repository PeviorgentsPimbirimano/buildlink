import React from 'react';
import Button from "./Button"
import '../css/Home.css'

 function PostingJobs() {
  return (
    <section className='post'>
      <div className="left">
        <h2>You Have A Job For Us?</h2>
        <p>If you have a job opportunity in the construction industry, we want to hear from you! Use the form below to share the details of your project, and let us help you connect with the right professionals. Your submission can make a difference in finding the perfect candidates to get the job done!</p>
        <div className="post-btn">
          <Button btn={{text: "Post job"}}/>
        </div>
      </div>      
      <div className="posting-job-images">
        <img className="rotating-img" src="/post1.png" alt="Electrical wiring" />
        <img className="rotating-img1" src="/post2.png" alt="Plumbing repair" />
      </div>     
    </section>
  );
}

export default PostingJobs