import Image from "next/image";
const divStyle = "absolute bottom-0 right-0 w-11.5 h-11.5 lg:w-20.5 lg:h-20.5";
const FeatureCard = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
      {/* first card */}
      <div className="flex-1 bg-gray-100  text-primary-200  h-full rounded-4xl">
        <div className="m-5 h-full ">
          <div className="w-full lg:w-77.5 h-60.25 bg-white rounded-lg relative">
            <Image
              fill
              src="/images/human.png"
              alt="human_image"
              className=" object-cover"
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
        <div className="bg-[#E6DEF6] flex-1 rounded-2xl p-3 relative">
          <h1 className="font-semibold text-[30px] mt-10 pt-3 leading-tight latoclass  ">
            Information Hub (Learn)
          </h1>
          <p className=" text-sm  mt-8 lg:hidden text-shadow-primary-200">
            User&apos;s go-to place for easy-to-understand, reliable mental
            health information, serving as a foundational resource within the
            MindMap ecosystem
          </p>

          <p className="hidden lg:block text-[18px] mt-4 text-primary-200">
            User&apos;s go-to place for easy-to-understand, reliable mental health
            information, serving as a foundational resource within the MindMap
            ecosystem
          </p>
          <div className={divStyle}>
            <div className="w-full h-full relative">
              <Image fill src="/icons/info_icon.png" alt="info_icon" />
            </div>{" "}
          </div>
        </div>

        <div className="bg-[#FFDBDB] text-[#FF0000] flex-1 rounded-2xl p-3 relative">
          <h1 className="font-semibold text-[30px] mt-6 pt-3 leading-tight latoclass ">
            MindAi: Universal Chat Assistant
          </h1>
          <p className=" text-sm lg:text-[18px] mt-5 ">
            Enhance user navigation, provide immediate answers, and offer
            personalized conversational support throughout their MindMap journey
          </p>
          <div className={divStyle}>
            <div className="w-full h-full relative">
              <Image fill src="/icons/ai_icon.png" alt="ai_icon" />
            </div>{" "}
          </div>
        </div>
      </div>
      {/* third card */}
      <div className="flex-1 flex flex-col gap-6  h-full relative   ">
        <div className="bg-[#FBF7D4] text-[#726915] h-77.5 lg:h-103.5 rounded-2xl p-3  md:hidden lg:block">
          <h1 className="font-semibold text-[30px] mt-10 pt-3 leading-tight latoclass ">
            Community and Events
          </h1>
          <p className=" text-sm lg:hidden mt-8 ">
            Users to connect with peers, ask questions, and share experiences in
            a safe environment.
          </p>
          <p className="hidden lg:block text-[18px] mt-4">
            A proactive AI that learns from a user&apos;s data to offer
            personalized insights and detect early signs of distress, acting as
            a personal safety net. 
          </p>
        </div>

        <div className=" flex-1 pb-8 lg:pb-0">
          <div className="bg-[#EAFAEF] text-[#53A06E]  h-full relative rounded-2xl p-3">
            <h1 className="font-semibold text-[30px]  mt-10 pt-3 leading-tight latoclass  ">
              Book a Therapist
            </h1>
            <p className=" text-sm lg:text-[18px] mt-5 ">
              Book sessions with vetted professionals, work at your own pace
            </p>
            <div className={divStyle}>
              <div className="w-full h-full relative">
                <Image fill src="/icons/therapist.png" alt="therapist_icon" />
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
