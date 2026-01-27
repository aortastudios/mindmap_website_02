import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const CookieBody = () => {
  return (
    <section className="w-full h-full mb-20 mt-35 lg:mt-20 ">
      <Container>
        <div className="w-full lg:max-w-300 h-full bg-white rounded-[30px] lg:rounded-3xl p-5 lg:p-10">
          {/* header */}
          <div className=" flex flex-col lg:flex-row lg:justify-between  lg:items-center mx-auto">
            <div className="flex flex-col h-20.5 lg:h-24 w-full   ">
              <h1 className="lg:font-bold text-[24px] md:text-[38px] font-bold lg:text-[52px] text-black ">
                Cookies
              </h1>
              <p className="text-primary-200 font-normal text-[14px] lg:text-base">
                Last updated: 21/01/2026
              </p>
            </div>
            <div className="w-full lg:flex justify-end my-4">
              <Image
                src={"/icons/pdf_download.png"}
                width={148}
                height={44}
                alt="download_pdf"
                className="w-full md:w-[60%] md:mx-auto lg:mx-0  lg:w-37  object-contain"
              />
            </div>
          </div>

          <div className=" w-full lg:w-280 mx-auto h-px bg-[#B2B2B2] mt-3"></div>
          <div className="h-full mx-auto mt-10 ">
            <div className="">
              <h1 className=" text-[20px] md:text-[24px] font-bold text-[#202020]">
                Introduction
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                This Cookies Policy explains how we use cookies and similar
                technologies when you visit or use our platform and mobile
                application. It describes what these technologies are, why we
                use them, and how you can manage your preferences.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                What Are Cookies?
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                Cookies are small text files stored on your device when you
                visit a website or use an application. They help the platform
                remember your preferences, improve functionality, and provide a
                smoother user experience.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Managing Cookies
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                You can manage or disable cookies through your browser or device
                settings. Please note that disabling certain cookies may affect
                the functionality and performance of the platform.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Changes to This Cookies Policy
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We may update this Cookies Policy from time to time to reflect
                changes in technology or legal requirements. Any updates will be
                posted on this page.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                What Are Cookies?
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We may use the following types of cookies
              </p>
              <ul className="list-disc pl-5 leading-7 marker:text-[#535353] text-primary-200">
                <li className="">
                  <span className="font-medium">
                    Essential Cookies:
                    <br className="" />
                    <span className="text-[#535353]">
                      These cookies are necessary for the platform to function
                      properly. They enable core features such as account
                      access, security, and navigation.
                    </span>
                  </span>
                </li>

                <li className="">
                  <span className="font-medium">
                    Functional Cookies:
                    <br className="" />
                    <span className="text-[#535353]">
                      These cookies remember your preferences, such as language
                      settings or display choices, to enhance your experience.
                    </span>
                  </span>
                </li>

                <li className="">
                  <span className="font-medium">
                    Analytics Cookies:
                    <br className="" />
                    <span className="text-[#535353]">
                      These cookies help us analyze traffic and user behavior to
                      improve our services and features.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                How We Use Cookies
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We use cookies to:
              </p>
              <ul className="list-disc pl-5 leading-7 marker:text-[#535353] text-primary-200">
                <li className="">Ensure the platform functions correctly</li>
                <li className="">Ensure the platform functions correctly</li>
                <li className="">
                  Understand how users engage with our services
                </li>
                <li className="">Remember user preferences and settings</li>
              </ul>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Contact Us
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                If you have questions about our use of cookies or this Cookies
                Policy, please{" "}
                <Link href={"/contact"} className="text-blue-500 mx-1">
                  contact us
                </Link>
                through our official support channels.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CookieBody;
