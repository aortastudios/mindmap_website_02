import Image from "next/image";
import Link from "next/link";

const JoinButton = ({
  className,
  className2,
  name,
  iconClass,
}: {
  className: string;
  className2?: string;
  name: string;
  iconClass?: string;
}) => {
  return (
    <Link href={"/waitlist"} className={className}>
      <span className="">{name}</span>
      <span className={className2}>
        <Image
          src={"/icons/sms.png"}
          width={16}
          height={16}
          alt="sms_icon"
          className={iconClass}
        />
      </span>
    </Link>
  );
};

export default JoinButton;
