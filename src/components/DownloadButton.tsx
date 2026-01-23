import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const DownloadButton = ({
  className,
  className2,
  name,
  path,
  iconClass,
}: {
  className: string;
  className2?: string;
  name: string;
  path: string;
  iconClass?: string;
}) => {
  return (
    <Link href={path} className={className}>
      <span className="">{name}</span>
      <span className={className2}>
        <FaArrowRightLong className={iconClass} />
      </span>
    </Link>
  );
};

export default DownloadButton;
