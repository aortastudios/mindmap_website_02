import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReflectingButton = ({ className }: { className: string }) => {
  return (
    <Link href={"/contact"} className={className}>
      <span className="">Start Reflecting</span>
      <Image
        src={"/icons/chevrons-right.png"}
        width={20}
        height={20}
        alt="chevron_right_icon"
      />
    </Link>
  );
};

export default ReflectingButton;
