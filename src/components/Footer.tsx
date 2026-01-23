import Image from "next/image";
import JoinButton from "./JoinButton";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="w-full h-full footer">
      <div
        className="relative w-full h-190 max-w-360 mx-auto 
                      bg-[url('/images/footer.png')] bg-cover bg-no-repeat"
      >
        {/* Overlay for the dark background on 27% width */}
        <div className="absolute top-0 left-0 w-[27%] h-full bg-[#27272E] z-0"></div>

        {/* Content sits above both backgrounds */}
        <Container>
          <div className="w-160 h-42  pt-29.5 text-white z-10 relative ">
            <h3 className="font-medium text-[16px] latoclass">
              Get Early Access
            </h3>
            <h2 className="font-semibold text-[40px]">
              Build the habit from day one
            </h2>
            <JoinButton
              name="Join the waitlist"
              className2="p-4 rounded-full bg-[#F3F3F3]/8"
              className="latoclass mt-8 flex items-center flex-nowrap  justify-between pl-5 px-2 gap-2 w-60 h-14 z-10 bg-[#FFFFFF]/10 border border-[#000000]/5 border-l border-l-gray-500  border-r border-r-gray-300  text-white  text-[18px]  font-medium rounded-full"
            />
          </div>
          <div className="h-75 w-full absolute left-0 bottom-0 backdrop-blur-md pl-34">
            <div className="flex items-center">
              <div className="w-full flex-1">
                <div className=" flex-1 flex items-center gap-2 mt-10">
                  <Image
                    src={"/icons/logo.png"}
                    width={40}
                    height={40}
                    alt="Logo"
                  />
                  <span className="text-[44px] bricolage font-semibold text-white">
                    Mindmap
                  </span>
                </div>
                <p className="w-155.5 text-[20px] font-[400px] text-white">
                  A calm space to reflect, journal, and understand your mind,
                  one entry at a time.
                </p>
              </div>
              <div className="flex-1 flex  text-white bg-red-200">
                <div className="flex w-full gap-4">
                  <div className="flex-1"></div>
                  <div className="flex-1">left</div>
                  <div className="flex-1">right</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
