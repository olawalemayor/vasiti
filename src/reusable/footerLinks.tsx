import React from "react";

interface FooterLinksProps {
  title: string;
  links: any[];
}

export default function FooterLinks({ links, title }: FooterLinksProps) {
  return (
    <div className="roboto-font text-white my-8 text-left">
      <h4 className="text-base font-bold leading-[18.75px] mb-[19.28px]">
        {title}
      </h4>
      {links.map((link, index) => (
        <li key={index} className="list-none mb-[9.81px]">
          <a href={link.link} className="text-[14px] leading-[16.41px]">
            {link.name}
          </a>
        </li>
      ))}
    </div>
  );
}
