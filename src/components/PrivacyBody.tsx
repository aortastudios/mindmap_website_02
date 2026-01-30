import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const PrivacyBody = () => {
  return (
    <section className="w-full h-full mb-20 mt-35 lg:mt-40 ">
      <Container>
        <div className="w-full lg:max-w-300 h-full bg-white rounded-[30px] lg:rounded-3xl p-5 lg:p-10">
          {/* header */}
          <div className=" flex flex-col lg:flex-row lg:justify-between  lg:items-center mx-auto">
            <div className="flex flex-col h-20.5 lg:h-24 w-full   ">
              <h1 className="lg:font-bold text-[24px] md:text-[38px] font-bold lg:text-[52px] text-black ">
                Privacy policy
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
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, store, and protect your personal
                information when you use our platform, mobile application, and
                related services. By accessing or using our services, you agree
                to the practices described in this policy.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Consent
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                By using our platform, you consent to the collection and use of
                your information as outlined in this Privacy Policy. If you do
                not agree with any part of this policy, please discontinue use
                of our services.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Information we Collect
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We may collect different types of information, including:
              </p>
              <ul className="list-disc pl-5 leading-7 marker:text-[#535353] text-primary-200">
                <li className="">
                  Personal Information: such as your name, email address,
                  profile details, and account credentials..
                </li>
                <li className="">
                  Usage Information: including interactions with the app,
                  features used, session duration, and activity logs.
                </li>
                <li className="">
                  Device & Technical Data: such as device type, operating
                  system, IP address, and browser information.
                </li>
                <li className="">
                  User-Generated Content: including journal entries,
                  reflections, messages, or feedback you choose to share on the
                  platform.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                How we use your Information
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 leading-7 marker:text-[#535353] text-primary-200">
                <li className="">Provide, operate, and improve our services</li>
                <li className="">
                  Personalize your experience and content recommendations
                </li>
                <li className="">
                  Facilitate therapy sessions, reflections, or wellness features
                </li>

                <li className="">
                  Ensure platform security and prevent fraud or misuse
                </li>
                <li className="">
                  Comply with legal and regulatory obligations
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Data Storage and Security
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We take reasonable technical and organizational measures to
                protect your information against unauthorized access, loss, or
                misuse. While we strive to safeguard your data, no method of
                transmission or storage is 100% secure.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Data Retention
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We retain your information only for as long as necessary to
                provide our services, comply with legal obligations, or resolve
                disputes.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Children’s Privacy
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                minors.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Changes to This Privacy Policy
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page, and continued use of the
                platform indicates acceptance of the updated policy.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] md:text-[24px] font-bold text-[#202020]">
                Cookies
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 md:text-lg mt-3">
                Kindly check out how we manage your
                <Link href={"/cookies"} className="text-blue-500 pl-1">
                  cookies here.
                </Link>{" "}
                
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyBody;
