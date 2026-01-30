import Image from "next/image";
import Link from "next/link";

const WaitList = () => {
  return (
    // desktop
    <>
      <main className="w-full  hidden  min-h-screen lg:flex items-center lg:items-start px-5 lg:px-10  justify-center lg:justify-start bg-[url('/images/mobile_hero_bg.png')] lg:bg-[url('/images/hero_bg.png')] bg-cover bg-no-repeat">
        <div className="w-full lg:max-w-163.25 h-157.75 lg:h-216  p-5 lg:p-10 text-start flex flex-col justify-between  py-12 backdrop-blur-sm rounded-3xl my-10">
          {/* Logo */}
          <div className="">
            {/* desktop */}
            <Link href="/" className="hidden lg:flex justify-start gap-3  ">
              <Image src="/icons/logo.png" width={40} height={40} alt="Logo" />
              <Image
                src="/icons/logo_text.png"
                width={180}
                height={40}
                alt="Logo"
              />
            </Link>
            {/* mobile */}
            <Link href="/" className="flex justify-start gap-3 lg:hidden  ">
              <Image src="/icons/logo.png" width={24} height={24} alt="Logo" />
              <Image
                src="/icons/logo_text.png"
                width={87}
                height={21}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="">
            {/* Headings */}
            <div className="">
              <p className="text-primary-200 text-[12px] rounded-lg font-semibold h-6.25 flex items-center justify-center bg-white py-3 px-2 w-29.75 ">
                COMING SOON!!
              </p>
            </div>{" "}
            <div className=" text-[28px] lg:text-[40px] font-bold text-white leading-tight my-5">
              <h2 className="">A quieter way to</h2>
              <h2 className="">check in with yourself</h2>
            </div>
            <div className="text-[#EEEEEE] text-base font-medium hidden lg:block">
              <p className="">
                We&apos;re building a gentle space for reflection, mood
                tracking, and growth
              </p>
              <p className="">
                designed to fit into real life, not interrupt it.
              </p>
            </div>
            <div className="text-[#EEEEEE] text-base font-medium lg:hidden">
              <p className="">
                We&apos;re building a gentle space for reflection, mood
                tracking, and growth designed to fit into real life, not
                interrupt it.
              </p>
            </div>
            {/* Form */}
            <form className="flex  items-center justify-between my-5 px-3 bg-white w-full lg:w-90  h-12.5 gap-4 rounded-2xl">
              <input
                type="email"
                placeholder="Ex. jone@example.com"
                className=" py-2 rounded-lg w-[60%] text-black placeholder:text-[#B2B2B2] text-[14px] outline-none"
              />
              <button className="bg-primary-100 text-[#F8FAFC] px-3 text-base lg:px-6 py-1 lg:py-2 rounded-xl font-semibold">
                Join now
              </button>
            </form>
            <div className="relative w-full lg:w-74.75 h-8 mt-3 mb-5">
              <Image
                src={"/icons/social_proof.png"}
                fill
                alt="social-proof"
                className="object-contain"
              />
            </div>
          </div>
          {/* Footer */}
          <footer className="text-[#EEEEEE] font-normal text-base m">
            <p className="">
              © {new Date().getFullYear()} - All rights reserved.
            </p>
          </footer>
        </div>
      </main>
      {/* mobile */}
      <main className="w-full lg:hidden  min-h-screen flex items-center lg:items-start px-5 lg:px-10  justify-center lg:justify-start bg-[url('/images/mobile_hero_bg.png')] lg:bg-[url('/images/hero_bg.png')] bg-cover bg-no-repeat">
        <div className="w-full lg:max-w-163.25 h-157.75 lg:h-216  p-5 md:p-10 text-start flex flex-col justify-between  py-12 backdrop-blur-sm rounded-3xl my-10">
          {/* Logo */}
          <div className="">
            {/* desktop */}
            <Link href="/" className="hidden lg:flex justify-start gap-3  ">
              <Image src="/icons/logo.png" width={40} height={40} alt="Logo" />
              <Image
                src="/icons/logo_text.png"
                width={180}
                height={40}
                alt="Logo"
              />
            </Link>
            {/* mobile */}
            <Link href="/" className="flex justify-start gap-3 lg:hidden  ">
              <Image src="/icons/logo.png" width={24} height={24} alt="Logo" />
              <Image
                src="/icons/logo_text.png"
                width={87}
                height={21}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="">
            {/* Headings */}
            <div className="">
              <p className="text-primary-200 text-[12px] font-semibold h-6.25 flex items-center justify-center rounded-lg bg-white py-3 px-2 w-29.75 ">
                COMING SOON!!
              </p>
            </div>{" "}
            <div className=" text-[28px] lg:text-[40px] font-bold text-white leading-tight my-5">
              <h2 className="">A quieter way to</h2>
              <h2 className="">check in with yourself</h2>
            </div>
            <div className="text-[#EEEEEE] text-base font-medium hidden lg:block">
              <p className="">
                We&apos;re building a gentle space for reflection, mood
                tracking, and growth
              </p>
              <p className="">
                designed to fit into real life, not interrupt it.
              </p>
            </div>
            <div className="text-[#EEEEEE] text-base font-medium lg:hidden">
              <p className="">
                We&apos;re building a gentle space for reflection, mood
                tracking, and growth designed to fit into real life, not
                interrupt it.
              </p>
            </div>
            {/* Form */}
            <form className="flex  items-center justify-between my-5 px-3 bg-white w-full lg:w-90  h-12.5 gap-4 rounded-2xl">
              <input
                type="email"
                placeholder="Ex. jone@example.com"
                className=" py-2 rounded-lg w-[60%] px-1 text-black placeholder:text-[#B2B2B2] text-[14px] outline-none"
              />
              <button className="bg-primary-100 h-10.5 w-[40%] text-[#F8FAFC] px-3 text-[10px] sm:text-base lg:px-6 py-1 lg:py-2 rounded-xl font-semibold">
                Join now
              </button>
            </form>
            <div className="relative w-full lg:w-74.75 h-8 mt-3 mb-5">
              <Image
                src={"/icons/social_proof.png"}
                fill
                alt="social-proof"
                className="object-contain"
              />
            </div>
          </div>
          {/* Footer */}
          <footer className="text-[#EEEEEE] font-normal text-base m">
            <p className="">
              © {new Date().getFullYear()} - All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default WaitList;
