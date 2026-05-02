'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id='experience' className='bg-[#FAF7F1] px-6 py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-14 max-w-3xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700'>
            Experience
          </p>
          <h2 className='text-4xl font-semibold tracking-[-0.04em] text-stone-950 md:text-6xl'>
            Real production experience across e-commerce, CMS and web apps.
          </h2>
        </div>

        <div className='relative'>
          <div className='absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-amber-300 via-stone-300 to-transparent md:block' />

          <div className='space-y-6'>
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className='relative md:pl-16'
              >
                <div className='absolute left-0 top-7 hidden rounded-full border border-amber-200 bg-white p-3 text-amber-700 shadow-sm md:block'>
                  <BriefcaseBusiness size={18} />
                </div>

                <div className='rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-stone-900/5'>
                  <div className='flex flex-col justify-between gap-4 md:flex-row md:items-start'>
                    <div>
                      <p className='text-sm font-semibold text-amber-700'>
                        {item.period}
                      </p>
                      <h3 className='mt-2 text-2xl font-semibold tracking-[-0.025em] text-stone-950'>
                        {item.role}
                      </h3>
                      <p className='mt-1 text-lg text-stone-500'>
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <p className='mt-5 max-w-3xl leading-8 text-stone-600'>
                    {item.description}
                  </p>

                  <div className='mt-6 grid gap-3 md:grid-cols-2'>
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className='rounded-2xl border border-stone-100 bg-[#FAF7F1] px-4 py-3 text-sm font-medium text-stone-700'
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
