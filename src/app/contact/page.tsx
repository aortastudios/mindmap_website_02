import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactLinks from "@/components/ContactLinks";
import Download from "@/components/Download";
import FrequentQuestions from "@/components/FrequentQuestions";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden contact">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactLinks />
      <Download />
      <FrequentQuestions />
    </main>
  );
};

export default Contact;
