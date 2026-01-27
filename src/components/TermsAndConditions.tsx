import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const TermsAndConditions = () => {
  return (
    <section className="w-full h-full mb-20 mt-35 lg:mt-20 ">
      <Container>
        <div className="w-full lg:w-300 h-full bg-white rounded-[30px] lg:rounded-3xl p-10">
          {/* header */}
          <div className=" flex flex-col lg:flex-row lg:justify-between  lg:items-center mx-auto">
            <div className="flex flex-col h-20.5 lg:h-24 w-full   ">
              <h1 className="lg:font-bold text-[24px] font-bold lg:text-[52px] text-black ">
                Terms of Use
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
                className="w-full lg:w-37 "
              />
            </div>
          </div>

          <div className=" w-full lg:w-280 mx-auto h-px bg-[#B2B2B2] mt-3"></div>
          <div className="h-full mx-auto mt-10 ">
            <div className="">
              <h1 className=" text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Introduction
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                These Terms of Use govern your access to and use of our
                platform, mobile application, and related services. By accessing
                or using our services, you agree to be bound by these Terms. If
                you do not agree, please discontinue use of the platform.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Eligibility
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                You must be at least 18 years old to use our services. By using
                the platform, you confirm that you meet this requirement and
                have the legal capacity to agree to these Terms.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Account Registration
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                To access certain features, you may be required to create an
                account. You agree to provide accurate and complete information
                and to keep your login credentials secure. You are responsible
                for all activity that occurs under your account.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Use of the Platform
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                You agree to use the platform only for lawful and personal
                purposes. You must not
              </p>
              <ul className="list-disc pl-5 leading-7 marker:text-[#535353] text-primary-200">
                <li className="">
                  Misuse, disrupt, or interfere with the platform’s
                  functionality
                </li>
                <li className="">
                  Access or attempt to access unauthorized areas
                </li>
                <li className="">
                  Use the platform to distribute harmful, misleading, or
                  unlawful content
                </li>
                <li className="">
                  Attempt to reverse engineer or exploit any part of the service
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                User Content
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                You retain ownership of content you create or upload, including
                journal entries, reflections, and messages. By submitting
                content, you grant us a limited license to store, display, and
                process it solely for the purpose of providing and improving our
                services.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Therapy and Wellness Disclaimer
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                Our platform may provide access to therapy-related services,
                wellness tools, or educational content. This content is not a
                substitute for professional medical or mental health advice. In
                cases of emergency, users should seek immediate professional
                assistance
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Payments and Fees
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                If paid features or therapy sessions are offered, pricing and
                payment terms will be clearly displayed before purchase. All
                payments are subject to applicable taxes and are non-refundable
                unless stated otherwise.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Termination
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                We reserve the right to suspend or terminate your account if you
                violate these Terms or misuse the platform. You may also stop
                using the service at any time.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Intellectual Property
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                All platform content, design, trademarks, and technology
                (excluding user content) are owned by us and protected by
                intellectual property laws. You may not copy, modify, or
                distribute any part of the platform without permission.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Limitation of Liability
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                To the fullest extent permitted by law, we are not liable for
                any indirect, incidental, or consequential damages arising from
                your use of the platform or inability to access the services.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Indemnification
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                You agree to indemnify and hold us harmless from any claims,
                damages, or expenses arising from your use of the platform or
                violation of these Terms.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Governing Law
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                These Terms are governed by and interpreted in accordance with
                applicable laws, without regard to conflict of law principles.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Changes to These Terms
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                We may update these Terms from time to time. Continued use of
                the platform after changes are posted constitutes acceptance of
                the revised Terms.
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-[20px] lg:text-[24px] font-bold text-[#202020]">
                Contact Us
              </h1>
              <p className="text-primary-200 font-medium text-[14px] leading-6 lg:leading-7 lg:text-lg mt-3">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or your data, please{" "}
                <Link href={"/contact"} className="text-blue-500">
                  contact us
                </Link>{" "}
                through our official support channels.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermsAndConditions;
