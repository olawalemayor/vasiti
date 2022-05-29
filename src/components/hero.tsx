import React from "react";
import heroImage from "../assets/images/Testimonial-image.png";

export default function Hero() {
  return (
    <div className="flex flex-col xl:flex-row max-w-[1200px] xl:ml-[173px]">
      <div className="px-8 xl:px-0 xl:mt-[128px] text-left">
        <h2 className="font-bold text-[32px] xl:text-[48px] leading-[40px] xl:leading-[60px] xl:w-[586px]">
          Amazing
          <br /> Experiences from Our Wonderful Customers
        </h2>

        <p className="xl:text-lg xl:leading-[31px] text-[#494949] tracking-[0.02em] mt-[21px] xl:mt-[24px] xl:w-[489px]">
          Here is what customers and vendors are saying about <br />
          us, you can share your stories with us too.
        </p>
      </div>

      <div className="relative xl:w-[711px]">
        <img
          src={heroImage}
          alt=""
          className="w-[447.49px] xl:w-[536px] h-[506px] xl:h-[568px] max-w-max mt-[79px] xl:ml-[131px]"
        />

        <div className="w-[633.39px] h-[633.39px] xl:w-[711px] xl:h-[711px] rounded-full bg-[#FFF8F5] xl:mt-[79px] absolute xl:top-[79px] -z-10"></div>
      </div>
    </div>
  );
}
