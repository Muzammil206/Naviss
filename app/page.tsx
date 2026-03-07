import Nav        from "@/components/sections/Nav";
import Hero       from "@/components/sections/Hero";
import Marquee    from "@/components/sections/Marquee";
import Statement  from "@/components/sections/Statement";
import Services   from "@/components/sections/Services";
import Projects   from "@/components/sections/Projects";
import Process    from "@/components/sections/Process";
import Sectors    from "@/components/sections/Sectors";
import TechStack  from "@/components/sections/TechStack";
import About      from "@/components/sections/About";
import Contact    from "@/components/sections/Contact";
import Footer     from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Services />
        <Projects />
        <Process />
        <Sectors />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
