import React from "react";

interface TopBarProps {
  topBarLinks: any[];
}
export default function TopBar({ topBarLinks }: TopBarProps) {
  return (
    <div className="flex max-w-[892px] xl:ml-[231px] justify-evenly">
      {topBarLinks.map((link, index) => (
        <li
          key={index}
          className="list-none px-4 py-[17px] hover:text-[#FF5C00]"
        >
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </div>
  );
}
