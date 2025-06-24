import React from 'react';
import Button from "./Button"

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
      <div className="right">
        <img src="src\assets\post1.png" />
        <img src="src\assets\post2.png" />
      </div>      
    </section>
  );
}

export default PostingJobs