import ContactLinkCard from "./ContactLinkCard";
import Container from "./Container";

const ContactLinks = () => {
  return (
    <section className="w-full my-10 lg:mb-20">
      <Container>
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-6">
          <ContactLinkCard src="/icons/call.png" />
          <ContactLinkCard src="/icons/message.png" />
          <ContactLinkCard src="/icons/track.png" />
        </div>
      </Container>
    </section>
  );
};

export default ContactLinks;
