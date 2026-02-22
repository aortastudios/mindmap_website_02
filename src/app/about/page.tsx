import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTeam from "@/components/AboutTeam";
import Download from "@/components/Download";

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <div className="w-full pb-20">
        <Download />
      </div>
    </main>
  );
};

export default About;
