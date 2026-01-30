import Link from "next/link";
import React from "react";

const WaitlistButton = ({ className }: { className: string }) => {
  return (
    <Link href="/waitlist" className={className}>
      Join Our Waitlist
    </Link>
  );
};

export default WaitlistButton;
