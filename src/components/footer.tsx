import React from "react";
import subscribeImage from "../assets/images/subscribe-banner.png";
import FooterLinks from "../reusable/footerLinks";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../assets/images/social";

export default function Footer() {
  return (
    <div className="inline-grid relative max-w-[1080px]">
      <div className="flex flex-col-reverse xl:flex-row mt-[71px] xl:mt-0 xl:justify-between">
        <div className="pl-[27.37px] mt-[49.52px] xl:mt-[-47px]">
          <img src={subscribeImage} alt="subscribe" className="" />
        </div>

        <div className="text-left ml-4">
          <h3 className="text-[40px] leading-[40px] tracking-[-3%] font-bold inter-font text-white mb-4 xl:mt-[80px] xl:w-[452px]">
            Be a member of our community 🎉
          </h3>

          <span className="text-white roboto-font text-[14px] leading-5 tracking-[2%] w-[310.5px] xl:w-[368px] block">
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </span>

          <div className="bg-white bg-opacity-[0.2] rounded-md w-[380.78px] xl:w-[368px] flex items-center justify-between px-[4.31px] mt-4">
            <input
              type="text"
              placeholder="enter your email address"
              className="placeholder:text-white placeholder:text-[14px] pl-[19.09px] pt-[16.55px] pb-[18.18px] text-white bg-transparent w-full outline-none"
            />

            <button className="rounded-md bg-white text-[#242120] text-[13px] font-medium roboto-font leading-[15.23px] py-[13.5px] px-6">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 ml-[17.08px] mt-[54.59px] xl:grid-cols-5">
        <FooterLinks title="Company" links={footerLinks1} />
        <FooterLinks title="Products" links={footerLinks2} />
        <FooterLinks title="Careers" links={footerLinks3} />
        <FooterLinks title="Get in touch" links={footerLinks4} />
        <div className="text-left mt-8">
          <h4 className="text-white roboto-font font-bold text-base leading-[18.75px] mb-[19.62px]">
            Join our community
          </h4>

          <div className="flex w-[118.73px] justify-evenly mb-[46.65px]">
            {[facebook, instagram, linkedin, twitter].map((icon, index) => (
              <a
                href="/"
                key={index}
                className="rounded-full bg-white w-6 h-6 flex items-center justify-center"
              >
                <img src={icon} alt="" className="" />
              </a>
            ))}
          </div>

          <div className="roboto-font text-[14px] text-white leading-[16.41px] mb-[185.45px] text-left">
            Email Newsletter
          </div>
        </div>
      </div>
    </div>
  );
}

const footerLinks1 = [
  { name: "About us", link: "#" },
  { name: "Term of Use", link: "#" },
  { name: "Privacy Policy", link: "#" },
  { name: "Press & Media", link: "#" },
];

const footerLinks2 = [
  { name: "Marketplace", link: "#" },
  { name: "Magazine", link: "#" },
  { name: "Seller", link: "#" },
  { name: "Wholesale", link: "#" },
  { name: "Services", link: "#" },
];

const footerLinks3 = [
  { name: "Become a Campus Rep", link: "#" },
  { name: "Become a Vasiti Influencer", link: "#" },
  { name: "Become a Campus writer", link: "#" },
  { name: "Become an Affiliate", link: "#" },
];

const footerLinks4 = [
  { name: "Contact us", link: "#" },
  { name: "Partner with us", link: "#" },
  { name: "Advertise with us", link: "#" },
  { name: "Help/FAQs", link: "#" },
];
