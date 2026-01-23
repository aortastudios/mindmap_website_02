import Community from "@/components/Community";
import Download from "@/components/Download";
import FrequentQuestions from "@/components/FrequentQuestions";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import Sanctuary from "@/components/Sanctuary";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="home  w-full h-full    min-h-screen  overflow-hidden   ">
      <Hero />
      <Community />
      <OurFeatures />
      <Sanctuary />
      <Testimonials />
      <Download />
      <FrequentQuestions />
    </main>
  );
};

export default Home;
