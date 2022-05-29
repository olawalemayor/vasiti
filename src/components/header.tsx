import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import TopBar from "./topbar";
import navLinksJSON from "../assets/data/navlinks.json";
import topBarLinksJSON from "../assets/data/topbarlinks.json";

interface HeaderProps {
  logo: string;
  siteTitle: string;
}

export default function Header({ logo, siteTitle }: HeaderProps) {
  const [navLinks, setNavLinks] = useState<any[]>([]);
  const [topBarLinks, setTobBarLinks] = useState<any[]>([]);

  useEffect(() => {
    //set navigations
    setNavLinks(navLinksJSON);

    //set topbar navs
    setTobBarLinks(topBarLinksJSON);
  }, [setNavLinks, setTobBarLinks]);

  return (
    <header className="flex flex-col w-full roboto-font sm:shadow-md">
      <div className="xl:border-b">
        <div className="w-full max-w-[1146.16px] mx-auto">
          <div className="flex justify-between items-center pt-[47px] xl:pt-5 pb-[76px] sm:pb-[25px] px-8 xl:px-0">
            <a href="/">
              <img src={logo} alt={siteTitle} />
            </a>

            <div className="hidden sm:flex lg:w-[60%] xl:w-[50%] sm:justify-end">
              <NavBar navLinks={navLinks} />

              <div className="uppercase text-[13px] flex items-center xl:justify-between lg:w-[25%]">
                <a href="/" className="hover:text-[#FF5C00] mr-2 lg:mr-0">
                  Log in
                </a>
                <a
                  href="/"
                  className="px-[16.08px] py-[8.5px] bg-[#FF5C00] text-white"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block topbar">
        <TopBar topBarLinks={topBarLinks} />
      </div>
    </header>
  );
}
