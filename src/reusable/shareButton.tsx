import React, { useContext } from "react";
import "./shareButton.css";
import ModalContext from "../context/modalContext";

interface shareButtonProps {
  color: string;
}

export default function ShareButton({ color }: shareButtonProps) {
  //set modal status
  const { setModalStatus } = useContext(ModalContext);

  const handleButtonClick = () => {
    setModalStatus(true);
  };

  return (
    <button
      className={`share-button text-[${color}] text-base leading-[32px] pb-2`}
      onClick={() => handleButtonClick()}
    >
      {"Share your own story!".toUpperCase()}
    </button>
  );
}
