import React from "react";
import TestimonialCard from "../reusable/testimonial-card";
import Testimonial from "../models/testimonial";

export interface TestimonialProp {
  testimonials: Testimonial[];
}

export default function TestimonialComponent({
  testimonials,
}: TestimonialProp) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-6 xl:grid-rows-2 box-border float-left ml-8 xl:ml-[139px] text-left">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mr-[41px] xl:mr-[118px] pb-[36px]">
          <TestimonialCard
            details={testimonial.testimonial}
            imgUrl={testimonial.imageUrl}
            location={testimonial.location}
            name={testimonial.name}
            role={testimonial.role}
          />
        </div>
      ))}
    </div>
  );
}
