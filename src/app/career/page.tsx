import CareerForm from "@/components/CareerForm";
import CareerHero from "@/components/CareerHero";
import Navbar from "@/components/Navbar";

const Career = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <CareerHero />
      <CareerForm />
    </main>
  );
};

export default Career;
