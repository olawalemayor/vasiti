import React, { useContext, useEffect, useState } from "react";
import Experience from "./experience";
import TestimonialComponent from "./testimonial";
import SingleExperience from "./singleExperience";
import EmptySpace from "../reusable/emptySpace";
import Testimonial from "../models/testimonial";
import TestimonialContext from "../context/testimonialContext";

export default function Container() {
  const { testimonials: testimonialsJSON } = useContext(TestimonialContext);
  const [firstTestimonials, setFirstTestimonials] = useState<Testimonial[]>([]);
  const [secondTestimonials, setSecondTestimonials] = useState<Testimonial[]>(
    []
  );

  const numberOfTestimonials = 6;
  const maxTestimonials = 12;

  //First set of testimonials
  useEffect(() => {
    try {
      const testimonials = testimonialsJSON.slice(0, numberOfTestimonials);
      setFirstTestimonials(testimonials);
    } catch (error) {
      console.error(error);
    }
  }, [testimonialsJSON, setFirstTestimonials]);

  //set Second set of testimonials
  useEffect(() => {
    try {
      const testimonials = testimonialsJSON.slice(6, maxTestimonials);
      setSecondTestimonials(testimonials);
    } catch (error) {
      console.error(error);
    }
  }, [testimonialsJSON, setSecondTestimonials]);

  return (
    //layout of the app
    <div>
      <Experience />

      {firstTestimonials && (
        <div className="mt-[92px]">
          <TestimonialComponent testimonials={firstTestimonials} />
        </div>
      )}

      <EmptySpace size={75} />
      <SingleExperience />
      <EmptySpace size={75} />

      {secondTestimonials && (
        <div className="mt-[92px]">
          <TestimonialComponent testimonials={secondTestimonials} />
        </div>
      )}
    </div>
  );
}
