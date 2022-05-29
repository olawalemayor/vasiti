import React from "react";

interface NavBarProps {
  navLinks: any[];
}

export default function NavBar({ navLinks }: NavBarProps) {
  return (
    <div className="hidden lg:flex items-center justify-evenly uppercase w-[75%]">
      {navLinks.map((link, index) => (
        <a
          href={link.link}
          key={index}
          className="text-[13px] hover:text-[#FF5C00]"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
