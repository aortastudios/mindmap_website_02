import Container from "./Container";
import NewsLetter from "./NewsLetter";
import BlogCard from "./BlogCard";
import MentalStateCard from "./MentalStateCard";

const RecentBlogs = () => {
  return (
    <section className="my-10 w-full h-full">
      <Container>
        <h1 className="latoclass font-semibold text-[24px] text-[#1A1A1A] mb-5">
          Recent blog posts
        </h1>
        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          {/* subscription section */}
          <NewsLetter />
          {/* right side with blog cards */}
          <div className="wrapper flex-1 flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-4 h-110">
            <BlogCard
              src="/images/clarity.png"
              text1="Wellness"
              bg1="bg-[#6941C6]/10"
              textColor1="text-[#6941C6]"
              text2="Mental Health"
              bg2="bg-[#FDF2FA]"
              textColor2="text-[#C11574]"
              nameAndTime="Phoenix Baker • 1 Jan 2023"
              title="Finding Clarity in Quiet Moments"
              text="Taking a few quiet moments each day allows your mind to settle and your thoughts to surface naturally. In stillness, you begin to notice what truly needs attention—e"
            />
            <BlogCard
              src="/images/patterns.png"
              text1="Mindfulness"
              bg1="bg-[#ECFDF3]"
              textColor1="text-[#027A48]"
              text2="Mental Health"
              bg2="bg-[#FDF2FA]"
              textColor2="text-[#C11574]"
              nameAndTime="Lana Steiner • 1 Jan 2023"
              title="Understanding Your Emotional Patterns"
              text="Emotions often follow patterns we don’t notice until we pause to reflect. By paying attention to recurring feelings and triggers, you gain insight into your emoti"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 mt-10 ">
          <MentalStateCard
            src="/images/cognitive.png"
            text="Cognitive Wellness"
          />
          <MentalStateCard
            src="/images/regulation.png"
            text="Emotional Regulation"
          />
          <MentalStateCard src="/images/rest.png" text="Rest and Recovery" />
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogs;
