import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import FocusAreas from '@/components/portfolio/FocusAreas';
import SelectedProjects from '@/components/portfolio/SelectedProjects';
import Experience from '@/components/portfolio/Experience';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <SelectedProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
