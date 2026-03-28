import { focusItems } from '@/data/focus';

export function FocusAreas() {
  return (
    <section className='px-6 py-20 md:px-10 lg:px-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-2xl'>
          <p className='text-sm font-medium uppercase tracking-[0.22em] text-black/45'>
            What I focus on
          </p>
          <h2 className='mt-4 text-3xl font-semibold tracking-tight text-[#1a1a1a] md:text-4xl'>
            The kind of frontend work I enjoy the most.
          </h2>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {focusItems.map((item) => (
            <article
              key={item.title}
              className='rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]'
            >
              <h3 className='text-xl font-semibold text-[#1a1a1a]'>
                {item.title}
              </h3>
              <p className='mt-4 text-[15px] leading-7 text-black/65'>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
