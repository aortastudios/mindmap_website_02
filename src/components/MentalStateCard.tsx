import Image from "next/image";

const MentalStateCard = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="w-full h-15 lg:h-109.25 flex flex-row lg:flex-col items-center gap-6 lg:gap-0 lg:items-start ">
      <div className=" w-15.75 h-15.75 lg:w-94.5 lg:h-94.5  lg:mx-auto rounded-[10px] lg:rounded-[50px] overflow-hidden relative ">
        <Image src={src} alt="mental_state_image" fill />
      </div>
      <p className="font-bold text-base lg:text-[24px] text-primary-200">
        {text}
      </p>
    </div>
  );
};

export default MentalStateCard;
