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
      <div className="my-12 lg:mt-10 w-full">
        <Download />
      </div>
    </main>
  );
};

export default Testimonials;
