import Community from "@/components/Community";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import Sanctuary from "@/components/Sanctuary";

const Home = () => {
  return (
    <main className="home  w-full h-full    min-h-screen  overflow-hidden   ">
      <Hero />
      <Community />
      <OurFeatures />
      <Sanctuary />
    </main>
  );
};

export default Home;
