import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import "./App.css";
import ModalContext from "./context/modalContext";
import Testimonial from "./models/testimonial";
import TestimonialJSON from "./assets/data/testimonials.json";
import TestimonialContext from "./context/testimonialContext";
import { Header, Hero, Container, Footer } from "./components";
import { ShareModal, CompletedModal } from "./shared";

function App() {
  useEffect(() => {
    document.title = `${siteTitle} - Homepage`;
  });

  //header data
  const siteTitle = "Vasiti";

  const [isModalActive, setModalStatus] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [completedStatus, setCompletedStatus] = useState(false);

  useEffect(() => {
    setTestimonials(TestimonialJSON);
  }, [setTestimonials]);

  return (
    <div className="App relative">
      <ModalContext.Provider
        value={{
          isModalActive,
          setModalStatus,
          completedStatus,
          setCompletedStatus,
        }}
      >
        <TestimonialContext.Provider value={{ testimonials, setTestimonials }}>
          {/* if modal status is active show modal */}
          {isModalActive && <ShareModal />}

          {/* if modal form has bee submitted */}
          {completedStatus && <CompletedModal />}

          <div className="xl:h-screen xl:max-h-screen overflow-hidden">
            <Header logo={logo} siteTitle={siteTitle} />

            <Hero />
          </div>

          <Container />

          <footer className="bg-[#25201D] inline-block w-full xl:mt-[109px]">
            <Footer />
          </footer>
        </TestimonialContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
