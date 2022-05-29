import React from "react";

interface SpaceProps {
  size: number;
}

export default function EmptySpace({ size }: SpaceProps) {
  return <div className={`h-[${size}px]`}></div>;
}
