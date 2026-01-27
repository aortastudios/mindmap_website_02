import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/TermsAndConditions";
import React from "react";

const Terms = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden terms ">
      <Navbar />
      <TermsAndConditions />
    </main>
  );
};

export default Terms;
