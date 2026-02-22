"use client";
import Image from "next/image";
import JoinButton from "./JoinButton";
import Container from "./Container";
import { company, footerLink, resources, socialLink } from "@/utils/navLinks";
import Link from "next/link";
import Socials from "./Socials";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;
  const isWaitList = pathName.includes("/waitlist");
  return (
    <footer
      className={` ${isWaitList ? "hidden" : "w-full h-full   border-l border-l-[#f4f4f4] footer rounded-br-[20px] lg:rounded-br-none rounded-bl-[20px] lg:rounded-bl-none overflow-hidden"}`}
    >
      {/* desktop */}
      <div
        className="relative w-full  h-215.5 mx-auto 
                      bg-[#000000] hidden lg:block"
      >
        {/* Overlay for the dark background on 27% width */}
        <div className="hidden lg:block  bg-[url('/images/footer.png')] bg-cover bg-no-repeat absolute top-0 right-0 w-[60%] h-full  z-0"></div>

        {/* Content sits above both backgrounds */}
        <Container>
          <div className="lg:w-160 h-42 pt-10 lg:pt-30 text-white z-10 relative ">
            <h3 className="font-medium text-[14px] lg:text-[16px] latoclass">
              Get Early Access
            </h3>
            <h2 className="font-semibold text-[28px] lg:text-[40px]">
              Build the habit from day one
            </h2>
            <JoinButton
              name="Join the waitlist"
              className2="p-4 rounded-full bg-[#F3F3F3]/8"
              className="latoclass mt-4 flex items-center flex-nowrap  justify-between pl-5 px-2 gap-2 w-53.5 lg:w-60 h-14 z-10 bg-[#FFFFFF]/10 border border-[#000000]/5 border-l border-l-gray-500  border-r border-r-gray-300  text-white  text-[18px]  font-medium rounded-full"
            />
          </div>
          {/* Logo and links */}
          <div className=" h-153 lg:h-104 w-full absolute left-0 right-0 bottom-0 backdrop-blur-md border-t border-t-gray-600 ">
            <div className=" mx-auto max-w-298 mt-5 ">
              <div className="flex lg:items-center  flex-col lg:flex-row">
                <div className="w-full flex-1">
                  <div className=" flex-1 flex items-center gap-2 mt-5">
                    <Image
                      src={"/icons/logo.png"}
                      width={40}
                      height={40}
                      alt="Logo"
                      className=" w-6 h-6 lg:w-10 lg:h-10"
                    />
                    <span className="text-[28px] lg:text-[44px] bricolage font-semibold text-white">
                      Mindmap
                    </span>
                  </div>
                  <p className="lg:w-155.5 text-[16px] lg:text-[20px] font-[400px] pr-4 lg:pr-0 lg:text-white text-[#FFFFFF]/70">
                    A calm space to reflect, journal, and understand your mind -
                    one entry at a time.
                  </p>
                  {/* social media icons */}
                  <div className="pt-5 ">
                    <ul className="flex items-center gap-3">
                      {socialLink.map((link, index) => (
                        <Socials
                          key={index}
                          path={link.path}
                          alt={link.alt}
                          src={link.src}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 flex  text-white  ">
                  <div className="flex w-full gap-4 pt-6 lg:pt-0 ">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="flex-1 pt-5">
                      <h4 className="text-[16px] text-[#535353] font-medium pl-2">
                        Resources
                      </h4>
                      <div className="mt-5">
                        <ul className="flex flex-col justify-center gap-5 ">
                          {resources.map((link) => {
                            const active = isActive(link.path);
                            return (
                              <li
                                key={link.path}
                                className="text-[#EEEEEE] font-medium text-[16px] flex items-center gap-1"
                              >
                                {/* Dot placeholder to prevent layout shift */}
                                <span
                                  className={`mt-1 w-1 h-1 rounded-full ${
                                    active ? "bg-white" : "bg-transparent"
                                  }`}
                                ></span>
                                <Link href={link.path} className="">
                                  {link.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 pt-5 lg:pr-10">
                      <h4 className="text-[16px] text-[#535353] font-medium pl-1">
                        Company
                      </h4>
                      <div className="mt-5">
                        <ul className="flex flex-col justify-center gap-5 ">
                          {company.map((link) => {
                            const active = isActive(link.path);

                            return (
                              <li
                                key={link.path}
                                className="text-[#EEEEEE] font-medium text-[16px] flex items-center gap-1"
                              >
                                {/* Dot placeholder to prevent layout shift */}
                                <span
                                  className={`mt-1 w-1 h-1 rounded-full ${
                                    active ? "bg-white" : "bg-transparent"
                                  }`}
                                ></span>
                                <Link href={link.path} className="">
                                  {link.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* for desktop */}
            <div className=" h-px max-w-298 mx-auto w-[90%] lg:w-auto bg-white/20 mt-20 mb-1 hidden lg:block "></div>
            {/* for mobile */}
            <div className=" h-px max-w-298 mx-auto w-[90%] lg:w-auto bg-white/20 my-6 lg:hidden "></div>

            <div className="lg:hidden w-[90%] lg:w-auto  max-w-298 mx-auto   ">
              <div className="mt-20">
                <ul className="flex items-center justify-center gap-2 my-3">
                  {footerLink.map((link) => (
                    <li key={link.name} className="text-[14px] text-white/70">
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[14px] font-normal text-white/70 text-center pb-5">
                © {new Date().getFullYear()} MindMap. All rights reserved.
              </p>
            </div>

            <div className="text-white hidden lg:flex max-w-298 mx-auto w-[90%] lg:w-auto mt-1  items-center justify-between">
              <div className="">
                <p className="text-[18px] font-normal text-white/70 ">
                  © {new Date().getFullYear()} MindMap. All rights reserved.
                </p>
              </div>
              <div className="">
                <ul className="flex items-center justify-center gap-2 my-3">
                  {footerLink.map((link) => (
                    <li key={link.name} className="text-[18px] text-white/70">
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* mobile */}
      <div
        className="relative w-full  h-218.5 mx-auto  lg:hidden block
                      bg-[url('/images/footer.png')] bg-cover bg-no-repeat"
      >
        {/* Overlay for the dark background on 27% width */}
        <div className="hidden lg:block  bg-[url('/images/footer.png')] bg-cover bg-no-repeat absolute top-0 right-0 w-[60%] h-full  z-0"></div>

        {/* Content sits above both backgrounds */}
        <Container>
          <div className="lg:w-160 h-20 pt-5 lg:pt-29.5 text-white z-10 relative pt-10 ">
            <h3 className="font-medium text-[14px] lg:text-[16px] latoclass">
              Get Early Access
            </h3>
            <h2 className="font-semibold text-[28px] lg:text-[40px]">
              Build the habit from day one
            </h2>
            <JoinButton
              name="Join the waitlist"
              className2="p-4 rounded-full bg-[#F3F3F3]/8"
              className="latoclass mt-4 flex items-center flex-nowrap  justify-between  px-2 gap-2 w-53.5 lg:w-60 h-14 z-10 bg-[#FFFFFF]/10 border border-[#000000]/5 border-l border-l-gray-500  border-r border-r-gray-300  text-white  text-[18px]  font-medium rounded-full"
            />
          </div>
          {/* Logo and links */}
          <div className=" h-152.75 w-full absolute left-0 right-0 bottom-0 backdrop-blur-md pb-5 border-[0.5px] border-gray-400">
            <div className="max-w-360 mx-auto pl-5 xl:pl-34 ">
              <div className="flex lg:items-center  flex-col lg:flex-row mt-10">
                <div className="w-full flex-1">
                  <div className=" flex-1 flex items-center gap-2 mt-3">
                    <Image
                      src={"/icons/logo.png"}
                      width={40}
                      height={40}
                      alt="Logo"
                      className=" w-6 h-6 lg:w-10 lg:h-10"
                    />
                    <span className="text-[28px] lg:text-[44px] bricolage font-semibold text-white">
                      Mindmap
                    </span>
                  </div>
                  <p className="lg:w-155.5 text-[16px] lg:text-[20px] font-[400px] pr-4 lg:pr-0 lg:text-white text-[#FFFFFF]/70">
                    A calm space to reflect, journal, and understand your mind,
                    one entry at a time.
                  </p>
                  {/* social media icons */}
                  <div className="pt-4 mt-5 ">
                    <ul className="flex items-center gap-3">
                      {socialLink.map((link, index) => (
                        <Socials
                          key={index}
                          path={link.path}
                          alt={link.alt}
                          src={link.src}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 flex  text-white  mt-10 ">
                  <div className="flex w-full gap-4 pt-2 lg:pt-0 ">
                    <div className="flex-1 hidden lg:block"></div>
                    <div className="flex-1 pt-5">
                      <h4 className="text-[16px] text-[#535353] font-medium pl-1">
                        Resources
                      </h4>
                      <div className="mt-2">
                        <ul className="flex flex-col justify-center gap-3  ">
                          {resources.map((link) => {
                            const active = isActive(link.path);
                            return (
                              <li
                                key={link.path}
                                className="text-[#EEEEEE] flex items-center gap-1 font-medium text-[16px]"
                              >
                                {/* Dot placeholder to prevent layout shift */}
                                <span
                                  className={`mt-1 w-1 h-1 rounded-full ${
                                    active ? "bg-white" : "bg-transparent"
                                  }`}
                                ></span>
                                <Link href={link.path} className="">
                                  {link.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 pt-5 lg:pr-10">
                      <h4 className="text-[16px] text-[#535353] font-medium pl-1">
                        Company
                      </h4>
                      <div className="mt-2">
                        <ul className="flex flex-col justify-center gap-3 ">
                          {company.map((link) => {
                            const active = isActive(link.path);

                            return (
                              <li
                                key={link.path}
                                className="text-[#EEEEEE] flex items-center gap-1 font-medium text-[16px]"
                              >
                                {/* Dot placeholder to prevent layout shift */}
                                <span
                                  className={`mt-1 w-1 h-1 rounded-full ${
                                    active ? "bg-white" : "bg-transparent"
                                  }`}
                                ></span>
                                <Link href={link.path} className="">
                                  {link.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* for mobile */}
            <div className=" h-px max-w-298 mx-auto w-[90%] lg:w-auto bg-white/20 mt-5 mb-10 lg:hidden "></div>

            <div className="lg:hidden w-[90%] lg:w-auto  max-w-298 mx-auto  ">
              <div className="mt-5">
                <ul className="flex items-center justify-center gap-2 my-1">
                  {footerLink.map((link) => (
                    <li key={link.name} className="text-[12px] text-white/70">
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[12px] font-normal text-white/70 text-center pb-5">
                © {new Date().getFullYear()} MindMap. All rights reserved.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
