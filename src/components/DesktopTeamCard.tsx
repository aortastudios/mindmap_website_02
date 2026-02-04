import Image from "next/image";
import React from "react";

interface TeamProp {
  name: string;
  src: string;
  alt: string;
  position: string;
  role: string;
}
const DesktopTeamCard = ({ name, src, alt, position, role }: TeamProp) => {
  return (
    <div className="flex w-180 h-60.25 py-3">
      <div className="  size-57.5 overflow-hidden flex-1 flex items-center  border-2 border-[#FF9500] bg-[#CEB18F] rounded-full">
        <Image
          src={src}
          width={230}
          height={230}
          alt={alt}
          className="w-full h-full  object-contain"
        />
      </div>

      <div className=" flex-2  text-primary-100 pl-4">
        <h1 className="text-[32px] font-bold">
          {name}
          <span className="text-[14px] font-medium pl-2">{position}</span>
        </h1>
        <div className="font-medium text-[16px] mt-2">
          <p className="">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopTeamCard;
