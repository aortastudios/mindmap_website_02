import CommunityHeader from "@/components/CommunityHeader";
import Download from "@/components/Download";
import Navbar from "@/components/Navbar";
import TestimonialsMasonry from "@/components/TestimonialMansory";

const Testimonials = () => {
  return (
    <main className="w-full overflow-hidden min-h-screen community">
      <Navbar />
      <CommunityHeader />
      <TestimonialsMasonry />
      <Download />
    </main>
  );
};

export default Testimonials;
