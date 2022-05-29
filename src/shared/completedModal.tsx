import React, { useContext } from "react";
import icon from "../assets/images/🎉.png";
import ModalContext from "../context/modalContext";

export default function CompletedModal() {
  const { setModalStatus } = useContext(ModalContext);

  //close modal
  const handleClose = () => {
    setModalStatus(false);
  };
  return (
    <>
      <div className="w-[155px] h-[155px] rounded-full bg-[#FFF8F5] flex items-center justify-center mx-auto mb-5">
        <img src={icon} alt="" width={72} height={72} />
      </div>

      <span className="block text-[28px] font-bold tracking-[-2%] mb-[15px] inter-font xl:w-[250px] mx-auto">
        Thank you for sharing your story!
      </span>

      <span className="block roboto-font text-base leading-7 text-[#4A4A4A] mb-12 xl:mx-[85px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>

      <button
        className="inter-font text-xl px-[50px] xl:px-[98px] py-[19px] rounded-lg bg-[#FF5C00] text-white"
        onClick={() => handleClose()}
      >
        Close
      </button>
    </>
  );
}
