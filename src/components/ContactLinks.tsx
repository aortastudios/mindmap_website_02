import ContactLinkCard from "./ContactLinkCard";
import Container from "./Container";

const ContactLinks = () => {
  return (
    <section className="w-full my-10 lg:mb-20">
      <Container>
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-6">
          <ContactLinkCard
            src="/icons/caller2.png"
            text="Give us call"
            number={"+11 343 34242"}
          />
          <ContactLinkCard
            src="/icons/caller4.png"
            text="Send us a mail"
            number={"Mindsense@gmail.com"}
          />
          <ContactLinkCard
            src="/icons/caller3.png"
            text=""
            number={"1761 Treva Groves"}
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactLinks;
