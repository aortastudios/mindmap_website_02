import Image from "next/image";
import Link from "next/link";

const MentalStateCard = ({
  src,
  src2,
  text,
  href,
}: {
  src: string;
  src2: string;
  text: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="w-full h-15 lg:h-109.25 flex flex-row lg:flex-col items-center gap-6 lg:gap-0 lg:items-start group "
    >
      <div className=" w-15.75 h-15.75 lg:w-full lg:h-94.5  lg:mx-auto rounded-[10px] lg:rounded-[50px] overflow-hidden relative">
        <Image
          src={src}
          alt="mental_state_image"
          className="w-full h-full group-hover:hidden block object-cover "
          fill
        />
        <Image
          src={src2}
          alt="mental_state_image"
          className="w-full h-full group-hover:block hidden object-cover "
          fill
        />
      </div>
      <p className="font-bold text-base lg:text-[24px] text-primary-200">
        {text}
      </p>
    </Link>
  );
};

export default MentalStateCard;
