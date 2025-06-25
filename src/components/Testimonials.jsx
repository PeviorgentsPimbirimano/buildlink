import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import Button from "./Button";
import '../css/Home.css'

const testimonials = [
  {
    name: "Anna.k",
    img: "src/assets/test1.png",
    color: "rgba(254, 179, 0, 1)",
    text: "I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!",
  },
  {
    name: "Mary. J",
    img: "src/assets/test2.png",
    color: "rgba(254, 179, 0, 1)",
    text: "I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!",
  },
  {
    name: "Tafadzwa. C",
    img: "src/assets/test3.png",
    color: "rgba(254, 179, 0, 1)",
    text: "I couldn't be happier with the electrician I found through Buildlink Zimbabwe! They were prompt, professional, and resolved my electrical issues quickly. Highly recommend!",
  },
];

export default function Testimonials() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [animateBar, setAnimateBar] = useState(false);

  // Switch card positions every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => [prev[2], prev[0], prev[1]]);
      setAnimateBar((prev) => !prev); // toggle bar animation for fun, can be always true if you want continuous
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimony">
      <div className="left">
        <h2>What Our Customers Say</h2>
        <p>
          "Buildlink Zimbabwe has redefined our experience in finding trusted professionals. Homeowners and businesses alike appreciate the seamless connection to reliable experts, transforming projects into reality with confidence and ease."
        </p>
        <div className="testimony-btn">
          <Button btn={{text: "View more"}}/>       
        </div>
      </div>
      <div className="right testimonial-cards-stack">
        {order.map((idx) => (
          <TestimonialCard
            key={testimonials[idx].name}
            test={testimonials[idx]}
            animate={true}
            animateBar={animateBar}
          />
        ))}
      </div>
    </section>
  );
}