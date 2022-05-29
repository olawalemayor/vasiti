import React, { CSSProperties } from "react";

interface tagProps {
  color: string;
  title: string;
  background: string;
  borderColor: string;
}

export default function Tag({
  color,
  title,
  background,
  borderColor,
}: tagProps) {
  const tagStyle: CSSProperties = {
    color,
    backgroundColor: background,
    border: `1px solid ${borderColor}`,
  };
  return (
    <span
      className="py-[7px] pl-[9px] pr-[10px] text-[13px] leading-[16px] font-medium rounded-md"
      style={tagStyle}
    >
      {title.toUpperCase()}
    </span>
  );
}
