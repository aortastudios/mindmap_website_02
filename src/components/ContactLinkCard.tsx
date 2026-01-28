import Image from "next/image";

const ContactLinkCard = ({
  src,
  text,
  number,
}: {
  src: string;
  text: string;
  number: string;
}) => {
  return (
    <div className="bg-white h-25 lg:h-24.5 w-full p-5 rounded-[20px] flex items-center">
      <Image
        src={src}
        width={60}
        height={60}
        alt="contact_icon"
        className="size-12.5 object-contain mr-4"
      />
      <div className="text-[#535353] text-base lg:text-lg font-medium pb-1.5">
        <p>{text}</p>
        <p className="text-primary-200 font-semibold pt-1.5">{number}</p>
      </div>
    </div>
  );
};

export default ContactLinkCard;
