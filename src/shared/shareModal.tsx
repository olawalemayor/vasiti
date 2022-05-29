import React, { useContext, useState } from "react";
import ModalContext from "../context/modalContext";
import TestimonialContext from "../context/testimonialContext";
import Testimonial from "../models/testimonial";
import CompletedModal from "./completedModal";

export default function ShareModal() {
  const { setModalStatus } = useContext(ModalContext);
  const [completeStatus, setCompleteStatus] = useState(false);
  const { testimonials, setTestimonials } = useContext(TestimonialContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { image, firstname, lastname, story, customer, vendor, location } =
      e.target;
    const testimonial: Testimonial = {
      imageUrl: image.value,
      name: `${firstname.value} ${lastname.value}`,
      testimonial: story.value,
      location: location.value,
      role: getUserRole(customer, vendor),
    };

    //add the testimonial to the array of testimonials
    testimonials.unshift(testimonial);

    setTestimonials(testimonials);

    setCompleteStatus(true);
  };

  return (
    <div className="absolute xl:fixed w-full h-full z-40">
      <div className="relative flex item-center justify-center h-full w-full">
        <div
          className="absolute w-full z-10 h-full bg-black bg-opacity-75"
          onClick={() => setModalStatus(false)}
        ></div>
        <div className="w-[65%] xl:w-[527px] h-max px-8 pt-4 xl:pt-[57px] pb-[40px] rounded-2xl bg-white z-20 mt-6">
          {!completeStatus && (
            <>
              <h2 className="text-black font-bold text-lg leading-[33.89px] tracking-tight inter-font">
                Share your amazing story!
              </h2>

              <form
                className="mt-[43px] roboto-font text-left text-[#676767]"
                onSubmit={handleSubmit}
              >
                <div className="form-group mb-6">
                  <label
                    htmlFor="image"
                    className="block text-[14px] leading-[16.41px] tracking-[4%] mb-[13px]"
                  >
                    Upload your Picture
                  </label>
                  <input type="file" name="image" id="image" />
                </div>

                <div className="flex flex-col xl:flex-row mb-6 w-full">
                  <div className="form-group mb-4 xl:mb-0">
                    <label
                      htmlFor="firstname"
                      className="text-[14px] leading-[16.41px] tracking-[4%] mb-[13px] block"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="border"
                    />
                  </div>

                  <div className="form-group xl:ml-[21px]">
                    <label
                      htmlFor="lastname"
                      className="text-[14px] leading-[16.41px] tracking-[4%] mb-[13px] block"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="border"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="story"
                    className="block text-[14px] leading-[16.41px] tracking-[4%] mb-[13px]"
                  >
                    Share your story
                  </label>

                  <textarea
                    name="story"
                    id="story"
                    rows={4}
                    className="border w-full"
                  ></textarea>
                </div>

                <div className="form-group flex flex-col xl:flex-row text-[14px] leading-[16.41px] tracking-[4%] mb-[13px] mt-8">
                  <label htmlFor="role" className="block mb-2 xl:mb-0">
                    What did you interact with Vasiti as?
                  </label>
                  <div className="flex items-center xl:ml-12">
                    <input
                      type="radio"
                      name="role"
                      id="customer"
                      value="Customer"
                    />
                    Customer
                    <input
                      type="radio"
                      name="role"
                      id="vendor"
                      value="Vendor"
                      className="ml-4"
                    />
                    Vendor
                  </div>
                </div>

                <div className="form-group mt-6">
                  <label
                    htmlFor="location"
                    className="text-[14px] leading-[16.41px] tracking-[4%] mb-[13px] block"
                  >
                    City or Higher Institution (for Students)
                  </label>
                  <textarea
                    name="location"
                    id="location"
                    rows={2}
                    className="border w-full"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-[#FF5C00] text-white inter-font font-semibold text-xl leading-8 tracking-wide px-[40px] py-[19px] mt-[52px] rounded-lg"
                    type="submit"
                  >
                    Share your story!
                  </button>
                </div>
              </form>
            </>
          )}

          {completeStatus && <CompletedModal />}
        </div>
      </div>
    </div>
  );
}

const getUserRole = (customer: any, vendor: any) => {
  if (customer.checked) return "CUSTOMER";
  else if (vendor.checked) return "VENDOR";
  else return "";
};
