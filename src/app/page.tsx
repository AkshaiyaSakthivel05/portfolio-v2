import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Technologies from '@/components/sections/Technologies';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Technologies />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
