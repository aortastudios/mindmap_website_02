import Image from "next/image";
const divStyle =
  "absolute -bottom-5 -right-3 w-11.5 h-11.5 lg:w-20.5 lg:h-20.5";
const FeatureCard = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
      {/* first card */}
      <div className="flex-1 bg-[#F5F4F6] md:hover:bg-[#ECEAEA] md:hover:border-3 md:hover:border-gray-100  text-primary-200  h-full rounded-4xl  ">
        <div className="m-5 h-full group ">
          <div className="w-full  h-60.25 bg-white rounded-lg relative overflow-hidden">
            <Image
              fill
              src="/images/human.png"
              alt="human_image"
              className=" object-cover md:group-hover:scale-125 md:transition-all duration-300 ease-in-out "
            />
          </div>
          <div className="flex-1 text-primary-200 pt-10">
            <h2 className="font-semibold  text-xl lg:text-[30px] leading-tight latoclass ">
              MindSense: AI Copilot & Proactive Care System
            </h2>
            <p className=" text-sm lg:text-[18px] pt-6 ">
              A proactive AI that learns from a user&apos;s data to offer
              personalized insights and detect early signs of distress, acting
              as a personal safety net. Operates as both a distinct dashboard
              for holistic insights and safety net management, and as an
              integrated AI assistant within features like Journaling
            </p>
          </div>
        </div>
      </div>
      {/* second card */}
      <div className="flex-1 flex flex-col gap-6  h-full   ">
        <div className="bg-[#E6DEF6] md:hover:bg-[#BBA1F1]  group transition-all hover:duration-300  md:hover:border-3 md:hover:border-[#E6DEF6] overflow-hidden flex-1 rounded-2xl p-3 relative">
          <h1 className="font-semibold text-[30px] mt-10 pt-3 leading-tight latoclass  ">
            Information Hub (Learn)
          </h1>
          <p className=" text-sm  mt-8 lg:hidden text-shadow-primary-200">
            User&apos;s go-to place for easy-to-understand, reliable mental
            health information, serving as a foundational resource within the
            MindMap ecosystem
          </p>

          <p className="hidden lg:block text-[18px] mt-4 text-primary-200">
            User&apos;s go-to place for easy-to-understand, reliable mental
            health information, serving as a foundational resource within the
            MindMap ecosystem
          </p>
          <div className={divStyle}>
            <div className="w-full h-full relative">
              <Image
                fill
                src="/icons/info_icon.png"
                alt="info_icon"
                className="opacity-100 md:group-hover:opacity-0"
              />
              <Image
                fill
                src="/icons/hovereinfo.png"
                alt="info_icon"
                className="opacity-0 md:group-hover:opacity-100  "
              />
            </div>{" "}
          </div>
        </div>

        <div className="bg-[#FFDBDB] group text-[#FF0000] overflow-hidden md:hover:border-3 transition-all duration-300  md:hover:border-[#FFDBDB] md:hover:bg-[#ecb2b2] flex-1 rounded-2xl p-3 relative">
          <h1 className="font-semibold text-[30px] mt-6 pt-3 leading-tight latoclass ">
            MindAi: Universal Chat Assistant
          </h1>
          <p className=" text-sm lg:text-[18px] mt-5 ">
            Enhance user navigation, provide immediate answers, and offer
            personalized conversational support throughout their MindMap journey
          </p>
          <div className={divStyle}>
            <div className="w-full h-full relative">
              <Image
                fill
                src="/icons/ai_icon.png"
                alt="ai_icon"
                className="opacity-100 md:group-hover:opacity-0"
              />
              <Image
                fill
                src="/icons/hoverchat.png"
                alt="ai_icon"
                className="opacity-0 md:group-hover:opacity-100"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      {/* third card */}
      <div className="flex-1 flex flex-col gap-6  h-full relative    ">
        <div className="group  ">
          <div className="bg-[#FBF7D4] overflow-hidden  rounded-2xl text-[#726915] md:group-hover:bg-[#F4E699]  md:border-3 md:border-[#FBF7D4] transition-all duration-300 h-77.5 lg:h-103.5  p-3  md:hidden lg:block relative">
            <h1 className="font-semibold text-[30px] mt-10 pt-3 leading-tight latoclass ">
              Community and Events
            </h1>
            <p className=" text-sm lg:hidden mt-8 ">
              Users to connect with peers, ask questions, and share experiences
              in a safe environment.
            </p>
            <p className="hidden lg:block text-[18px] mt-4">
              A proactive AI that learns from a user&apos;s data to offer
              personalized insights and detect early signs of distress, acting
              as a personal safety net.
            </p>
            <div className={divStyle}>
              <div className="w-full h-full relative">
                <Image
                  fill
                  src="/icons/community_icon.png"
                  alt="community_icon"
                  className="opacity-100 md:group-hover:opacity-0"
                />

                <Image
                  fill
                  src="/icons/hoveredcom.png"
                  alt="community_icon"
                  className="opacity-0 md:group-hover:opacity-100"
                />
              </div>{" "}
            </div>
          </div>
        </div>

        <div className=" flex-1 pb-8 lg:pb-0">
          <div className="bg-[#EAFAEF] text-[#53A06E] md:hover:bg-[#98C6A8] md:border-3 overflow-hidden  group md:border-[#EAFAEF] transition-all duration-300 h-full relative rounded-2xl p-3">
            <h1 className="font-semibold text-[30px]  mt-10 pt-3 leading-tight latoclass  ">
              Book a Therapist
            </h1>
            <p className=" text-sm lg:text-[18px] mt-5 ">
              Book sessions with vetted professionals, work at your own pace
            </p>
            <div className={divStyle}>
              <div className="w-full h-full relative ">
                <Image
                  fill
                  src="/icons/therapist.png"
                  alt="therapist_icon"
                  className="opacity-100 md:group-hover:opacity-0"
                />
                <Image
                  fill
                  src="/icons/hovertherapist.png"
                  alt="therapist_icon"
                  className="opacity-0 md:group-hover:opacity-100 "
                />
              </div>{" "}
            </div>

            <div className="w-32 h-8 mt-5 lg:w-32 lg:h-8">
              <div className="w-full h-full relative">
                <Image fill src="/icons/group.png" alt="group_icon" />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
