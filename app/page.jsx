import About from "@/components/About";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import SkillsSection from "@/components/SkillsSection";


export default function Page() {
  return (
    <>
    <div className="relative z-10">
      <Hero />
      <About/>
      <Project/>
      <SkillsSection />

    </div>
      
    </>

  );
}


