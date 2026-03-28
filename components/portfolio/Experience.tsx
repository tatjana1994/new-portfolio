import { experienceItems } from '@/data/experience';

export function Experience() {
  return (
    <section id='experience' className='px-6 py-20 md:px-10 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-2xl'>
          <p className='text-sm font-medium uppercase tracking-[0.22em] text-black/45'>
            Experience
          </p>
          <h2 className='mt-4 text-3xl font-semibold tracking-tight text-[#1a1a1a] md:text-4xl'>
            A quick look at where I’ve worked.
          </h2>
        </div>

        <div className='mt-12 grid gap-6'>
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className='rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]'
            >
              <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                <p className='text-sm font-medium uppercase tracking-[0.18em] text-black/40'>
                  {item.period}
                </p>
                <p className='text-sm text-black/45'>{item.company}</p>
              </div>

              <h3 className='mt-4 text-2xl font-semibold tracking-tight text-[#1a1a1a]'>
                {item.role}
              </h3>

              <div className='mt-4 space-y-3 max-w-4xl'>
                {item.text.map((paragraph) => (
                  <p
                    key={paragraph}
                    className='text-base leading-8 text-black/65'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className='mt-5 text-sm leading-7 text-black/45'>
                {item.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
