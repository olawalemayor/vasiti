import React from "react";
import experienceImg from "../assets/images/black-beautiful-ladies-smiling.png";
import Tag from "../reusable/tag";
import ShareButton from "../reusable/shareButton";

export default function Experience() {
  return (
    <div className="inter-font text-white leading-[38.73px] text-left relative overflow-hidden">
      <div className="absolute w-full h-full -z-20 bg-[#222222]"></div>
      <div className="flex flex-col-reverse xl:flex-row xl:pl-[137px] items-center justify-evenly">
        <div className="relative xl:w-[617px] mt-16">
          <img
            src={experienceImg}
            alt="black beautiful ladies smiling"
            className="xl:w-[617px] xl:h-[572px]"
          />
          <div className=" absolute -z-10 rounded-full h-full xl:w-[631px] xl:h-[631px] bg-[#2E2E2E] top-3 -left-[14px]"></div>
        </div>
        <div className="ml-[62px] xl:ml-0 pr-[50px] xl:mr-0 w-[402px] xl:w-[424px] mt-[104px] xl:mt-0">
          <h3 className="text-white text-[32px] font-bold hidden xl:block">
            Tolu & Joy’s Experience
          </h3>
          <h3 className="text-white text-[32px] font-bold xl:hidden mb-[14px]">
            Oby’s Experience
          </h3>
          <Tag
            title="customer"
            background="transparent"
            borderColor="#fff"
            color="#fff"
          />
          <p className="text-lg leading-[150%] mt-[12px] xl:mt-8 mb-12">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <ShareButton color="" />
        </div>
      </div>
    </div>
  );
}
