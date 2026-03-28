export function About() {
  return (
    <section className='px-6 py-20 md:px-10 lg:px-16 lg:py-24'>
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16'>
        <div>
          <p className='text-sm font-medium uppercase tracking-[0.22em] text-black/45'>
            About
          </p>
          <h2 className='mt-4 text-3xl font-semibold tracking-tight text-[#1a1a1a] md:text-4xl'>
            Frontend development with a strong product mindset.
          </h2>
        </div>

        <div className='space-y-6 text-base leading-8 text-black/65 md:text-lg'>
          <p>
            Over the last few years, I’ve worked on websites and web
            applications where frontend quality had a direct impact on user
            experience, content flexibility, and overall business presentation.
            A large part of my experience comes from building CMS-driven
            websites, reusable components, responsive layouts, and scalable UI
            structures that are easy to extend over time.
          </p>

          <p>
            I’m especially comfortable in headless setups, where the frontend
            needs to be both technically solid and easy to maintain. That means
            thinking carefully about component architecture, data flow,
            responsiveness, performance, and how content editors will use the
            system in real life.
          </p>

          <p>
            What I care about most is building interfaces that are not just
            visually accurate, but actually production-ready: clean code,
            consistent behavior, thoughtful structure, and a user experience
            that feels smooth across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
