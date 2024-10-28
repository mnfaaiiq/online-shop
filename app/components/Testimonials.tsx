import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full h-full bg-[url('/backgroundImage.jpg')]"
    >
      <div>
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonials;
