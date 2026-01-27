import Image from "next/image";

const CustomHeader = () => {
  return (
    <div className="w-full mt-40 lg:mt-0 lg:pt-3    ">
      <div className="  flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
        <div className="flex flex-col lg:flex-row justify-between h-36.5 lg:h-20.5 ">
          <h1 className="lg:font-bold text-[24px] font-bold lg:text-[52px] text-black">Terms of Use</h1>
          <p className="text-primary-200 font-normal text-[14px] lg:text-base">
            Last updated: 21/01/2026
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/icons/pdf_download.png"}
            width={148}
            height={44}
            alt="download_pdf"
            className="w-full lg:w-37 "
          />
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
