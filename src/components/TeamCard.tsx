import Image from "next/image";
interface TeamCardProp {
  src: string;
  alt: string;
  firstName: string;
  lastName: string;
  position: string;
  role: string;
}

const TeamCard = ({
  src,
  alt,
  firstName,
  lastName,
  position,
  role,
}: TeamCardProp) => {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex gap-4 w-full ">
        <div className="size-30.75  rounded-full overflow-hidden border-2 border-[#F28632] bg-[#CEB18F]">
          <Image
            src={src}
            className="object-contain w-full h-full"
            width={123}
            height={123}
            alt={alt}
          />
        </div>
        <div className="flex-1 flex text-primary-100 flex-col justify-center ">
          <div className="w-full flex flex-col">
            <h1 className="text-[16px] font-bold">{firstName}</h1>
            <h1 className="text-[16px] font-bold">{lastName}</h1>
            <h3 className="text-[13px] font-medium pt-3">{position}</h3>
          </div>
        </div>
      </div>
      <div className="pt-5 text-primary-100">
        <p className="font-medium text-[14px]">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
