import React from "react";
import experienceImg from "../assets/images/woman-shoppingbag-card.png";
import Tag from "../reusable/tag";
import ShareButton from "../reusable/shareButton";

export default function SingleExperience() {
  return (
    <div className="inter-font text-[#242120] leading-[38.73px] text-left relative overflow-hidden w-full pt-[83px] pb-[120px] xl:py-0">
      <div className="absolute w-full h-full -z-20 bg-[#FFF8F5]"></div>
      <div className="flex flex-col-reverse xl:flex-row pl-[66px] xl:pl-[137px] pr-8 xl:pr-0 items-center justify-evenly">
        <div className="xl:w-[424px]">
          {/* desktop version */}
          <h3 className="text-[#242120] text-[32px] font-bold hidden xl:block">
            Josiah’s Experience
          </h3>

          {/* mobile version */}
          <h3 className="text-[#242120] text-[32px] font-bold xl:hidden mt-[96px]">
            Victoria's Experience
          </h3>

          <Tag
            title="customer"
            background="transparent"
            borderColor="rgba(255, 92, 0, 0.4)"
            color="#FF5C00"
          />
          <p className="text-lg leading-[150%] mb-12 mt-6 xl:mt-8">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <ShareButton color="#FF5C00" />
        </div>
        <div className="relative xl:w-[622px] mt-16 w-[281px] h-[281px] xl:h-[538px] rounded-full xl:rounded-none overflow-hidden xl:overflow-visible">
          <img
            src={experienceImg}
            alt="black beautiful ladies smiling"
            className="xl:w-full xl:h-auto w-[303px] h-[262px] ml-[13px] xl:ml-0 mt-[19px] xl:mt-0"
          />
          <div className="hidden xl:block absolute -z-10 rounded-full xl:w-[631px] xl:h-[631px] bg-[#FF5C00] bg-opacity-[0.03] top-3 -left-[14px]"></div>
        </div>
      </div>
    </div>
  );
}
