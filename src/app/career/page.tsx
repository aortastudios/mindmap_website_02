import CareerForm from "@/components/CareerForm";
import CareerHero from "@/components/CareerHero";
import ContactLinks from "@/components/ContactLinks";
import Download from "@/components/Download";
import FrequentQuestions from "@/components/FrequentQuestions";
import Navbar from "@/components/Navbar";

const Career = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden career">
      <Navbar />
      <CareerHero />
      <CareerForm />
      <ContactLinks />
      <Download />
      <FrequentQuestions />
    </main>
  );
};

export default Career;
