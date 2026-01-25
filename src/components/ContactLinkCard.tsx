import Image from "next/image";

const ContactLinkCard = ({ src }: { src: string }) => {
  return (
    <div className="bg-white h-22.5 lg:h-24.5 w-full p-5 rounded-[20px]">
      <Image
        src={src}
        width={165}
        height={58}
        alt="call_card"
        className=" w-48.25 h-12.5 lg:w-41.5 lg:h-14.5 object-contain"
      />
    </div>
  );
};

export default ContactLinkCard;
