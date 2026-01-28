import Link from "next/link";
import React from "react";

const WaitlistButton = ({ className }: { className: string }) => {
  return (
    <Link href="/career" className={className}>
      Join Our Waitlist
    </Link>
  );
};

export default WaitlistButton;
