import CookieBody from "@/components/CookieBody";
import Navbar from "@/components/Navbar";
import React from "react";

const Cookies = () => {
  return <main className="w-full min-h-screen overflow-hidden cookie">
    <Navbar/>
    <CookieBody/>
  </main>;
};

export default Cookies;
