import Image from "next/image";
import Link from "next/link";

const ReflectingButton = ({
  className,
  className2,
  name,
  path
}: {
  className: string;
  className2?: string;
  name: string;
  path:string
}) => {
  return (
    <Link href={path} className={className}>
      <span className="">{name}</span>
      <span className={className2}>
        <Image
          src={"/icons/chevrons-right.png"}
          width={20}
          height={20}
          alt="chevron_right_icon"
          className="group-hover:hidden block"
        />
         <Image
          src={"/icons/chevrons-white.png"}
          width={20}
          height={20}
          alt="chevron_right_icon"
          className="group-hover:block hidden"
        />
      </span>
    </Link>
  );
};

export default ReflectingButton;
