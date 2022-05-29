import React, { useEffect, useState } from "react";
import Tag from "./tag";

interface TestimonialCardProps {
  imgUrl: string;
  name: string;
  location: string;
  role: string;
  details: string;
}

export default function TestimonialCard({
  details,
  imgUrl,
  location,
  name,
  role,
}: TestimonialCardProps) {
  const [tag, setTag] = useState<any>({});

  useEffect(() => {
    //set color of tag depending on user roles
    const tag =
      role === "customer".toUpperCase()
        ? { color: "#0D019A", backgroundColor: "#EEF8FF" }
        : { color: "#049A01", backgroundColor: "#F0FFEE" };
    setTag(tag);
  }, [role]);

  return (
    <div className="text-[#474747]">
      <img
        src={require(`../assets/images/${role.toLowerCase()}s/${imgUrl}`)}
        alt={name}
        className="w-[200px] h-[200px] rounded-full"
      />

      <span className="text-2xl font-semibold leading-[29.05px] mt-8">
        {name}
      </span>

      <div className="flex mt-[14px] items-center">
        {location && (
          <div className="text-[15px] font-medium leading-[18px] tracking-wider">
            {location}
          </div>
        )}

        <div className="ml-[20px] xl:ml-[25px]">
          <Tag
            background={tag.backgroundColor}
            borderColor="transparent"
            color={tag.color}
            title={role}
          />
        </div>
      </div>

      <div className="text-base leading-[150%] tracking-[0.02em] mt-6">
        {details}
      </div>
    </div>
  );
}
