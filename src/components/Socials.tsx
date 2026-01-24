import Image from "next/image";

const Socials = ({
  src,
  alt,
  path,
}: {
  src: string;
  alt: string;
  path: string;
}) => {
  return (
    <div className="">
      <a href={path} className="inline-block">
        <div className="flex items-center justify-center h-10 w-10 bg-black/70 rounded-full">
          <Image src={src} width={20} height={20} alt={alt} />
        </div>
      </a>
    </div>
  );
};

export default Socials;
