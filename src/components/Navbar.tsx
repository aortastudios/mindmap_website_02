"use client";
import { deskTopNavLinks, mobileNavLinks } from "@/utils/navLinks";
import Image from "next/image";
import Link from "next/link";
import WaitlistButton from "./WaitListButton";
import { useUiStore } from "@/store/uiStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();
  const specialRoutes = ["/", "/about"];
  const pathname = usePathname();
  // Check if current route is one of the special ones
  const isSpecial = specialRoutes.includes(pathname);
  const isAbout = pathname.includes("/about");

  // Decide logo + text color
  // const logo = isSpecial ? "/icons/default_logo.png" : "/icons/blue_logo.png";
  // const logoText = isSpecial
  //   ? "/icons/white_logo_text.png"
  //   : "/icons/blue_logo_text.png";
  const textColor = isSpecial ? "text-white" : "text-primary-200";

  // For change of navbar background on scroll

  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className="fixed  top-0 left-0 right-0  backdrop-blur-xs lg:backdrop-blur-none   max-w-360  h-32 mx-auto  flex items-center justify-center z-50"
      id="home"
    >
      {/* desktop */}
      <div
        className={`hidden max-w-310 w-full h-20 px-5 lg:flex items-center justify-center py-4.5 ${isScrolledPastHero && isSpecial && "backdrop-blur-xs rounded-full px-10 transition-all duration-700 ease-in-out"} overflow-hidden  ${isAbout && "border-[0.5px] border-gray-500 rounded-[128px] shadow-md"}`}
      >
        <div className="w-full flex ">
          {/* logo */}
          <Link href={"/"} className="flex-1 flex items-center gap-2">
            {isSpecial ? (
              isScrolledPastHero ? (
                <>
                  <Image
                    src={"/icons/blue_logo.png"}
                    width={32}
                    height={32}
                    alt="Logo"
                  />
                  <Image
                    src={"/icons/blue_logo_text.png"}
                    width={122}
                    height={27}
                    alt="Site_name"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={"/icons/default_logo.png"}
                    width={32}
                    height={32}
                    alt="Logo"
                  />
                  <Image
                    src={"/icons/white_logo_text.png"}
                    width={122}
                    height={27}
                    alt="Site_name"
                  />
                </>
              )
            ) : (
              <>
                <Image
                  src={"/icons/blue_logo.png"}
                  width={32}
                  height={32}
                  alt="Logo"
                />
                <Image
                  src={"/icons/blue_logo_text.png"}
                  width={122}
                  height={27}
                  alt="Site_name"
                />
              </>
            )}
          </Link>

          <div className=" flex-1 flex items-center  justify-end gap-8">
            <nav className="">
              {/* desktop NavLinks */}
              <div className="">
                <ul className="flex items-center gap-8 font-semibold">
                  {deskTopNavLinks.map((link) => (
                    <li key={link.name} className={`${isSpecial && isScrolledPastHero ? "text-primary-200" : textColor}  `}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <WaitlistButton className="waitlist-btn flex items-center justify-center w-42 h-11  z-10 bg-primary-100   font-semibold text-[#ffffff] rounded-full" />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="w-[90%]  mx-auto flex lg:hidden   ">
        <div className="w-full flex justify-between items-center h-14   rounded-full bg-white px-5 py-3 ">
          <div className="flex-1  cursor-pointer z-50">
            <Link href={"/"} className="flex gap-2 ">
              <Image
                src="/icons/mobile_logo.png"
                width={24}
                height={24}
                alt="footer_icon"
              />
              <Image
                src="/icons/mobile_logo_text.png"
                width={87}
                height={21}
                alt="footer_icon"
              />
            </Link>
          </div>
          <div
            onClick={toggleMobileNav}
            className="flex-1 flex justify-end cursor-pointer z-50"
          >
            {isMobileNavOpen ? (
              <Image
                src={"/icons/close.png"}
                width={32}
                height={32}
                alt="close_icon"
              />
            ) : (
              <Image
                src={"/icons/open.png"}
                width={32}
                height={32}
                alt="open_icon"
              />
            )}
          </div>
        </div>
        <nav
          className={` ${
            isMobileNavOpen ? "left-0 right-0" : "-left-full"
          } absolute  top-0  h-screen flex flex-col space-y-10  px-8 bg-white z-40 `}
        >
          <ul className="flex  flex-col space-y-8 mt-20 pt-10">
            {mobileNavLinks.map((link) => (
              <li
                key={link.path}
                className="text-2xl text-primary-100 font-bold cursor-pointer"
              >
                <Link
                  className="text-[24px] font-bold"
                  onClick={toggleMobileNav}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <WaitlistButton className="waitlist-btn flex items-center justify-center w-full h-13  z-10 bg-primary-100   font-semibold text-[#ffffff] rounded-full" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
