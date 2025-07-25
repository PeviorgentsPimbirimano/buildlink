import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard({ test, animate = false, animateBar = true}) {
    return (
        <div className="testimonial-gradient-border">
            <div className={`testimonial-card${animate ? " juggle" : ""}`}>
                <div
                    className={`testimonial-card-left${animateBar ? " animated-bar" : ""}`}
                    style={!animateBar ? { background: test.color } : undefined}
                />
                <div className="testimonial-card-content">
                    <div className="testimonial-profile">
                        <img
                            src={test.img}
                            alt=""
                            className="testimonial-img"
                        />
                    </div>
                    <div className="contain">
                        <div className="testimonial-meta">
                            <div className="testimonial-name">{test.name}</div>
                            <div className="testimonial-quote">
                                <img src="/test-icon.png" alt="quote icon" />
                            </div>
                        </div>
                        <div className="testimonial-text">
                            {test.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}