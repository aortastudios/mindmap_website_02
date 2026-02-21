import Image from "next/image";
import Link from "next/link";

const MentalStateCard = ({ src, text,href }: { src: string; text: string; href: string }) => {
  return (
    <Link href={href} className="w-full h-15 lg:h-109.25 flex flex-row lg:flex-col items-center gap-6 lg:gap-0 lg:items-start ">
      <div className=" w-15.75 h-15.75 lg:w-full lg:h-94.5  lg:mx-auto rounded-[10px] lg:rounded-[50px] overflow-hidden relative ">
        <Image src={src} alt="mental_state_image"  className="w-full h-full " width={100} height={100} />
      </div>
      <p className="font-bold text-base lg:text-[24px] text-primary-200">
        {text}
      </p>
    </Link>
  );
};

export default MentalStateCard;
