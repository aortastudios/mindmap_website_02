import Image from "next/image";
import Container from "./Container";
import DownloadButton from "./DownloadButton";

const Download = () => {
  return (
    <section className="w-full h-full">
      <Container>
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="w-full h-160 bg-primary-100 rounded-[40px] mx-auto flex items-center justify-center relative">
            <div className="w-151.75 h-94.5 ">
              <div className="flex justify-center ">
                <Image
                  src={"/icons/logo.png"}
                  width={64}
                  height={64}
                  alt="Logo_icon"
                />
              </div>

              {/* various icons poistioned absolutely */}

              <div className="animate-pulse ">
                <Image
                  src={"/images/reflect1.png"}
                  width={68}
                  height={68}
                  alt="icon"
                  className="absolute left-16.75 top-26.25"
                />
                <Image
                  src={"/images/reflect2.png"}
                  width={68}
                  height={68}
                  alt="icon"
                  className="absolute left-21.5 top-113.75"
                />
                <Image
                  src={"/images/reflect3.png"}
                  width={68}
                  height={68}
                  alt="icon"
                  className="absolute right-20 top-26.25"
                />
                <Image
                  src={"/images/reflect4.png"}
                  width={68}
                  height={68}
                  alt="icon"
                  className="absolute right-20 top-110.25"
                />
                <Image
                  src={"/images/reflect5.png"}
                  width={68}
                  height={68}
                  alt="icon"
                  className="absolute left-45.5 top-68.75"
                />
                <Image
                  src={"/images/reflect6.png"}
                  width={68}
                  height={68}
                  alt="icon"
                  className="absolute right-46 top-68.75"
                />
              </div>
              <div className="text-[64px] font-bold text-white leading-tight">
                <h1 className="text-center">Ready to reflect</h1>
                <h1 className="text-center">differently</h1>
              </div>
              <p className="text-center text-[18px] text-white font-medium">
                Your space for journaling, reflection, and mindful progress —
                designed to help you show up daily and stay consistent.
              </p>
              <div className="w-full flex items-center justify-center gap-4">
                {/* Downloads */}

                <DownloadButton
                  path="#"
                  name="Download for Android"
                  iconClass="text-primary-200 text-[16px]"
                  className2="p-2 rounded-full bg-[#111111]/8"
                  className="latoclass mt-8 flex items-center justify-center gap-2 w-67 h-14 z-10 bg-white text-[#111111]  text-[18px] lg:text-xl font-medium rounded-full "
                />
                <DownloadButton
                  path="#"
                  iconClass="text-white group-hover:text-primary-200 text-[16px]"
                  name="Download for IOS"
                  className2="p-2 rounded-full bg-[#F3F3F3]/8 group-hover:bg-[#111111]/8"
                  className="latoclass mt-8 flex items-center group justify-center gap-2 w-59 h-14 z-10 hover:text-primary-200 hover:bg-white text-white bg-white/10  text-[18px] lg:text-xl font-medium rounded-full "
                />
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden block mt-10">
          <div className="w-full h-160 bg-primary-100 rounded-[40px] flex items-center justify-center relative overflow-hidden">
            <div className="w-80.5 h-90">
              <div className=" ">
                <div className="flex justify-center ">
                  <Image
                    src={"/icons/logo.png"}
                    width={32}
                    height={32}
                    alt="Logo_icon"
                  />
                </div>
                {/* absolutely positioned icons */}
                <div className="animate-pulse ">
                  <Image
                    src={"/images/reflect1.png"}
                    width={52}
                    height={52}
                    alt="icon"
                    className="absolute left-[5.2px] top-10.25"
                  />
                  <Image
                    src={"/images/reflect2.png"}
                    width={52}
                    height={52}
                    alt="icon"
                    className="absolute -left-5 top-107.75"
                  />
                  <Image
                    src={"/images/reflect3.png"}
                    width={52}
                    height={52}
                    alt="icon"
                    className="absolute right-5 top-26.25"
                  />
                  <Image
                    src={"/images/reflect4.png"}
                    width={52}
                    height={52}
                    alt="icon"
                    className="absolute right-5 top-121"
                  />
                  {/* <Image
                    src={"/images/reflect5.png"}
                    width={68}
                    height={68}
                    alt="icon"
                    className="absolute left-45.5 top-68.75"
                  /> */}
                  <Image
                    src={"/images/reflect6.png"}
                    width={68}
                    height={68}
                    alt="icon"
                    className="absolute -right-10 top-76.25"
                  />
                </div>
                <div className="font-bold text-[28px]text-white leading-tight mt-4 text-white">
                  <h1 className="text-center">Ready to reflect</h1>
                  <h1 className="text-center">differently?</h1>
                </div>
                <p className="font-medium text-[16px] text-white/70 mt-2 text-center">
                  Your space for journaling, reflection, and mindful progress
                  designed to help you show up daily and stay consistent.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <DownloadButton
                  path="#"
                  name="Download for Android"
                  iconClass="text-primary-200 text-[14px]"
                  className2="p-4 rounded-full bg-[#111111]/8"
                  className="latoclass mt-8 flex items-center  justify-between pl-5 px-2 gap-2 w-62.25 h-14 z-10 bg-white text-primary-100  text-[14px] lg:text-xl font-medium rounded-full "
                />
                <DownloadButton
                  path="#"
                  iconClass="text-white text-[14px]"
                  name="Download for IOS"
                  className2="p-4 rounded-full bg-[#F3F3F3]/8"
                  className="latoclass mt-4 flex items-center justify-between pl-5 px-2 gap-2 w-62.25 h-14 z-10 text-white bg-white/10  text-[14px] lg:text-xl font-medium rounded-full "
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Download;
