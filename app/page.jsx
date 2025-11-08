import AboutUs from "@/components/AboutUs";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import OurServices from "@/components/OurServices";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <CaseStudy></CaseStudy>
      <WorkProcess></WorkProcess>
      <Experience></Experience>
      <Idea></Idea>
      <Footer></Footer>
    </main>
  );
}
