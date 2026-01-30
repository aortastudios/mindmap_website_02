import Image from "next/image";

const SanctuaryCards = () => {
  return (
    <div className="w-full h-full pt-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {/* first card */}
        <div className=" lg:flex-1 bg-blue-100 w-full h-168 flex flex-col justify-between rounded-[20px] overflow-hidden ">
          <div className="text-primary-100 h-20 font-semibold text-[32px] px-5 pt-8">
            <h2 className="">Journal Entry</h2>{" "}
            <p className="text-[16px] font-semibold mt-2">
              Capture work instantly. no noise - just what matters. Create
              tickets that keep pace with your tasks.
            </p>
          </div>
          <div className=" w-full lg:w-100.5 h-120  rounded-[20px] p-3 relative">
            <Image
              src={"/images/journal.png"}
              fill
              alt="Journal"
              className="object-contain "
            />
          </div>
        </div>
        {/* second card */}
        <div className="flex-1 flex flex-col gap-6  h-full   ">
          <div className="group bg-primary-100 h-95.5 flex flex-col justify-between rounded-[20px] overflow-hidden ">
            <h2 className="text-white h-20 font-semibold text-[24px] xl:text-[32px] px-2 lg:px-5 pt-12 lg:pt-8">
              Access Anywhere around the Globe
            </h2>
            <div className=" w-full  h-50  rounded-[20px] p-3 relative">
              <Image
                src={"/images/globe.png"}
                fill
                alt="Globe"
                className=" group-hover:scale-125 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
          {/* third */}

          <div className="relative group  bg-primary-100 w-full    h-68 flex flex-col justify-between rounded-[20px] overflow-hidden ">
            <Image
              src={"/images/reflection.png"}
              fill
              alt="Reflection"
              className="opacity-100 md:group-hover:opacity-100"
            />
            <Image
              src={"/images/hoveredreflect.png"}
              fill
              alt="Reflection"
              className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
        {/* fourth card */}
        <div className="flex-1 flex flex-col gap-6  h-full relative  ">
          <div className="relative  bg-primary-100 w-full  group  h-70.25 flex flex-col justify-between rounded-[20px] overflow-hidden ">
            <Image
              src={"/images/phone.png"}
              fill
              alt="Phone"
              className="md:group-hover:scale-125 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* fifth card */}
          <div className=" flex-1 pb-8 lg:pb-0 block md:hidden lg:block">
            <div className=" group bg-primary-100 h-93 w-full flex flex-col justify-between rounded-[20px] overflow-hidden relative ">
              <h2 className="text-white h-20 font-semibold text-[32px] px-5 pt-8">
                Your daily check-in
              </h2>
              <div className="absolute -bottom-5 -right-4  h-85 w-63  rounded-[20px] p-3 ">
                <Image
                  src={"/images/checkin_img.png"}
                  fill
                  alt="checkin"
                  className=" md:group-hover:opacity-0 opacity-100"
                />

                <Image
                  src={"/images/hovercheck.png"}
                  fill
                  alt="checkin"
                  className=" md:group-hover:opacity-100 md:group-hover:scale-90 transition-opacity duration-500 ease-in-out opacity-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanctuaryCards;
