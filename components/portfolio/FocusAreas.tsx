'use client';

import { motion } from 'framer-motion';
import { focusAreas } from '@/data/focus';

export default function FocusAreas() {
  return (
    <section
      id='focus'
      className='relative overflow-hidden bg-[#FAF7F1] px-6 py-24'
    >
      <div className='absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-amber-200/40 blur-3xl' />
      <div className='absolute right-[-160px] bottom-0 h-[380px] w-[380px] rounded-full bg-rose-200/40 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700'>
              Focus areas
            </p>

            <h2 className='max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-stone-950 md:text-6xl'>
              The frontend work I bring to real products.
            </h2>
          </div>

          <p className='max-w-md text-base leading-7 text-stone-600'>
            I focus on building interfaces and systems that are fast, scalable,
            maintainable and ready to support real users.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className='group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/5'
              >
                <div className='absolute inset-0 opacity-0 transition group-hover:opacity-100'>
                  <div className='absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-rose-100' />
                </div>

                <div className='relative'>
                  <div className='mb-6 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700 transition group-hover:bg-stone-950 group-hover:text-amber-300'>
                    <Icon size={22} />
                  </div>

                  <h3 className='mb-3 text-lg font-semibold text-stone-950'>
                    {item.title}
                  </h3>

                  <p className='text-sm leading-7 text-stone-600'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-16 rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm'
        >
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-amber-700'>
            Approach
          </p>

          <p className='mx-auto mt-4 max-w-2xl text-2xl font-semibold leading-snug tracking-[-0.025em] text-stone-950'>
            I build frontend experiences that are not only polished, but also
            reliable, scalable and practical for real-world product use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
