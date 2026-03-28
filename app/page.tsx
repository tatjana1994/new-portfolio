import { Header } from '@/components/portfolio/Header';
import { Footer } from '@/components/portfolio/Footer';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { FocusAreas } from '@/components/portfolio/FocusAreas';
import { SelectedProjects } from '@/components/portfolio/SelectedProjects';
import { Experience } from '@/components/portfolio/Experience';
import { Contact } from '@/components/portfolio/Contact';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#f7f4ef] text-[#1f1f1f]'>
      <Header />

      <Hero />
      <About />
      <FocusAreas />
      <SelectedProjects />
      <Experience />
      <Contact />

      <Footer />
    </main>
  );
}
