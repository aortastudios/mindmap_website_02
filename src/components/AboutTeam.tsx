import Container from "./Container";
import Image from "next/image";
import DesktopTeamCard from "./DesktopTeamCard";
import TeamCard from "./TeamCard";

const AboutTeam = () => {
  return (
    <section className=" my-10 lg:my-0 lg:mt-20 lg:mb-10">
      <Container>
        <div className="w-full h-full flex flex-col">
          <div className=" lg:mb-14 ">
            <h1 className="text-center text-[24px] lg:text-[52px] text-primary-100 font-bold">
              Meet the Team
            </h1>

            <h2 className=" hidden lg:block text-[12px] lg:text-[22px] text-primary-100 text-center">
              The people behind the process
            </h2>

            <h2 className=" text-[12px] lg:text-[22px] text-primary-100 text-center lg:hidden">
              What and Who we are!
            </h2>
          </div>
          {/* Team members  / DESKTOP*/}
          <div className=" hidden lg:block w-full h-full lg:mt-10 ">
            {/* CEO */}

            <div className="flex w-full h-98.5">
              <div className="flex-1 flex justify-end overflow-hidden border-2 border-[#FF9500] bg-[#CEB18F] rounded-[80px]">
                <Image
                  src={"/images/david.png"}
                  width={245}
                  height={368}
                  alt="CEO"
                />
              </div>

              <div className="flex-3  text-primary-100 p-8">
                <h1 className="text-[32px] font-bold">David</h1>
                <h1 className="text-[48px] font-bold">
                  BABATUNDE{" "}
                  <span className="text-[16px] font-medium">
                    (Founder & CEO)
                  </span>
                </h1>
                <div className="font-medium text-[16px] mt-10">
                  <p className="">
                    David&apos;s passion and advocacy for mental health
                    awareness stemmed from his own personal experiences battling
                    with severe anxiety for almost 5 years. It was from these
                    experiences that David felt there needed to be a change in
                    the way mental health is perceived and treated.
                  </p>
                  <p className="py-4">
                    He strongly believes there needs to be more representatives
                    of colour within the industry to challenge the stigmas and
                    preconceptions associated with mental health within the UK
                    and to provide the solutions needed to support people on
                    their journey towards positive mental change.
                  </p>
                </div>
              </div>
            </div>
            {/* other team members cards */}
            <div className="flex my-4 mt-18 pt-5">
              <div className="w-180">
                <DesktopTeamCard
                  name={"Julia Onyewesi"}
                  position={" (Marketing Manager)"}
                  src={"/images/julia.png"}
                  role={
                    "Julia’s passion and advocacy for mental health stems from her interest in understanding how the psychological factors that we experience day to day effect our mental state. Her knowledge and hollistic understanding of content creation, AI integration and UI/UX makes her an invaluable member of the marketing team."
                  }
                  alt={"marketing_manager"}
                />
              </div>
              {/* <div className="flex-1  ">
                <div className="w-85 h-79.5 relative">
                  <Image src={"/images/ring.png"} alt="ring_image" fill />
                </div>{" "}
              </div> */}
            </div>
            <div className="flex my-5">
              <div className="flex-1"></div>

              <div className="flex-2">
                <DesktopTeamCard
                  name={"Mariana Belloso Dall"}
                  position={"(Marketing Executive)"}
                  src={"/images/mariana.png"}
                  role={
                    "Mariana is a highly driven healthcare professional. A very meticulous and disciplined mental health advocate that has a natural affinity to seeing stigmatisation of mental health in society dispelled and the misinformation around healing being linear debunked."
                  }
                  alt={"marketing_executive"}
                />
              </div>
            </div>
            <div className="my-10">
              <DesktopTeamCard
                name={"Toyin Joseph"}
                position={"(Operations Manager)"}
                src={"/images/toyin.png"}
                role={
                  "Toyin is an experienced Doctor who has a passion to increase awareness of mental health and access to resources and services for underrepresented and marginalised communities. She is very structured and process driven and has extensive experience in implementing new operational models and optimising processes."
                }
                alt={"marketing_manager"}
              />
            </div>
          </div>
          {/* mobile */}
          <div className="lg:hidden">
            <div className="w-full flex flex-col ">
              <div className="flex gap-4 w-full ">
                <div className="size-30.75 relative rounded-full overflow-hidden border-2 border-[#F28632] bg-[#CEB18F]">
                  <Image
                    src={"/images/david.png"}
                    className="object-contain"
                    fill
                    alt="julia"
                  />
                </div>
                <div className="flex-1 flex text-primary-100 flex-col justify-center ">
                  <div className="w-full flex flex-col">
                    <h1 className="text-[16px] font-bold">David</h1>
                    <h1 className="text-[16px] font-bold">BABATUNDE</h1>
                    <h3 className="text-[13px] font-medium pt-3">
                      (Founder & CEO)
                    </h3>
                  </div>
                </div>
              </div>
              <div className="pt-5 text-primary-100">
                <p className="font-medium text-[14px]">
                  David&apos;s passion and advocacy for mental health awareness
                  stemmed from his own personal experiences battling with severe
                  anxiety for almost 5 years. It was from these experiences that
                  David felt there needed to be a change in the way mental
                  health is perceived and treated.
                </p>
                <p className="pt-3 font-medium text-[14px]">
                  He strongly believes there needs to be more representatives of
                  colour within the industry to challenge the stigmas and
                  preconceptions associated with mental health within the UK and
                  to provide the solutions needed to support people on their
                  journey towards positive mental change.
                </p>
              </div>
            </div>
            <div className="pt-8">
              <TeamCard
                src="/images/julia.png"
                alt="julia"
                firstName="Julia"
                lastName="Onyewesi"
                position="(Marketing Manager)"
                role="Julia’s passion and advocacy for mental health stems from her interest in understanding how the psychological factors that we experience day to day effect our mental state. Her knowledge and hollistic understanding of content creation, AI integration and UI/UX makes her an invaluable member of the marketing team."
              />
            </div>
            <div className="pt-8">
              <TeamCard
                src="/images/mariana.png"
                alt="julia"
                firstName="Mariana"
                lastName="Belloso Dall"
                position="(Marketing Executive)"
                role="Mariana is a highly driven healthcare professional.A very meticulous and disciplined mental health advocate that has a natural affinity to seeing stigmatisation of mental health in society dispelled and the misinformation around healing being linear debunked."
              />
            </div>

            <div className="w-full flex flex-col pt-16 relative">
              {/* <div className="w-56 h-52.5 absolute top-[-10%] right-[20%]">
                <Image
                  src={"/images/ring.png"}
                  width={224}
                  height={210}
                  alt="ring"
                  className="w-full h-full object-contain"
                />
              </div> */}

              <div className="flex gap-4 w-full ">
                <div className="flex-1 flex text-primary-100 flex-col justify-center ">
                  <div className="w-full flex flex-col">
                    <h1 className="text-[16px] font-bold">Toyin</h1>
                    <h1 className="text-[16px] font-bold">Joseph</h1>
                    <h3 className="text-[13px] font-medium pt-3">
                      (Operations Manager)
                    </h3>
                  </div>
                </div>
                <div className="size-30.75 relative rounded-full overflow-hidden border-2 border-[#F28632] bg-[#CEB18F]">
                  <Image
                    src={"/images/toyin.png"}
                    className="object-contain"
                    fill
                    alt="julia"
                  />
                </div>
              </div>
              <div className="pt-5 text-primary-100">
                <p className="font-medium text-[14px]">
                  Toyin is an experienced Doctor who has a passion to increase
                  awareness of mental health and access to resources and
                  services for underrepresented and marginalised communities.
                  She is very structured and process driven and has extensive
                  experience in implementing new operational models and
                  optimising processes. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutTeam;
