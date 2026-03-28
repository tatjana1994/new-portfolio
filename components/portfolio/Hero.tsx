import { techItems } from '@/data/tech';

export function Hero() {
  return (
    <section className='border-b border-black/10 px-6 py-24 md:px-10 lg:px-16 lg:py-32'>
      <div className='mx-auto max-w-7xl'>
        <p className='text-xs font-medium uppercase tracking-[0.25em] text-black/40'>
          Frontend Engineer · React / Next.js / TypeScript
        </p>

        <h1 className='mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-[#181818] md:text-6xl lg:text-7xl'>
          Building fast, scalable web applications with a focus on performance
          and clean architecture.
        </h1>

        <p className='mt-8 max-w-2xl text-base leading-8 text-black/60 md:text-lg'>
          I’m Tatjana Devrnja, a frontend engineer with 4+ years of experience
          building modern web applications, primarily in e-commerce and headless
          CMS environments.
        </p>

        <p className='mt-4 max-w-2xl text-base leading-8 text-black/60 md:text-lg'>
          I focus on creating reusable component systems, integrating APIs, and
          delivering production-ready interfaces that are fast, responsive, and
          maintainable.
        </p>

        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
          <a
            href='#projects'
            className='inline-flex items-center justify-center rounded-2xl bg-[#1f1f1f] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90'
          >
            View Selected Work
          </a>

          <a
            href='/Tatjana_Devrnja_CV.pdf'
            download
            className='inline-flex items-center justify-center rounded-2xl border border-black/15 px-6 py-3.5 text-sm font-medium text-[#1f1f1f] transition hover:bg-black/5'
          >
            Download CV
          </a>
        </div>

        <div className='mt-14 flex flex-wrap gap-3'>
          {techItems.map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-black/10 px-4 py-1.5 text-xs text-black/60'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
