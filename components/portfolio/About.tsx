'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Gauge, Layers3, Sparkles } from 'lucide-react';

const highlights = [
  {
    label: '4+ years',
    text: 'frontend experience',
  },
  {
    label: 'React / Next.js',
    text: 'main tech stack',
  },
  {
    label: 'Scalable apps',
    text: 'platforms, dashboards, CMS',
  },
];

const cards = [
  {
    title: 'Production-ready UI',
    description:
      'I build clean, responsive interfaces that are made for real users and easy to scale and maintain.',
    icon: Code2,
  },
  {
    title: 'Performance mindset',
    description:
      'Focused on fast rendering, optimized assets, SSR and overall application performance.',
    icon: Gauge,
  },
  {
    title: 'CMS flexibility',
    description:
      'Experience with WordPress Headless, WPGraphQL and Contentful for scalable content-driven systems.',
    icon: Layers3,
  },
];

export default function About() {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-[#fffdf8] px-6 py-24 text-stone-950 sm:py-32'
    >
      <div className='absolute right-[-180px] top-20 h-[460px] w-[460px] rounded-full bg-amber-100 blur-3xl' />
      <div className='absolute left-[-160px] bottom-10 h-[380px] w-[380px] rounded-full bg-rose-100 blur-3xl' />
      <div className='absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-stone-300 to-transparent' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className='lg:sticky lg:top-28'
          >
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700'>
              About me
            </p>

            <h2 className='max-w-2xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl'>
              Frontend engineer focused on performance, UX and building real
              products.
            </h2>

            <p className='mt-7 max-w-xl text-lg leading-8 text-stone-600'>
              I’m Tatjana, a Frontend Engineer with 4+ years of experience
              building modern web applications using React, Next.js and
              TypeScript.
            </p>

            <p className='mt-4 max-w-xl text-base leading-8 text-stone-500'>
              I work on products where performance, usability and clean
              architecture directly shape the user experience. My focus is on
              building scalable applications, dashboards and platforms that are
              ready for real users and real business needs.
            </p>

            <div className='mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3'>
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className='group rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-[#fff7e8] hover:shadow-xl hover:shadow-stone-900/5'
                >
                  <p className='text-xl font-semibold tracking-tight text-stone-950'>
                    {item.label}
                  </p>
                  <p className='mt-1 text-sm text-stone-500'>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className='space-y-5'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className='overflow-hidden rounded-[2.25rem] border border-stone-200 bg-[#f8f2e8] p-4 shadow-[0_24px_80px_rgba(28,25,23,0.08)]'
            >
              <div className='rounded-[1.8rem] bg-stone-950 p-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8'>
                <div className='mb-10 flex items-start justify-between gap-4'>
                  <div>
                    <div className='mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80'>
                      <Sparkles size={15} className='text-amber-300' />
                      What I bring
                    </div>

                    <h3 className='max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl'>
                      I build scalable frontend systems with a strong focus on
                      performance and user experience.
                    </h3>
                  </div>

                  <ArrowUpRight
                    className='hidden text-amber-300 sm:block'
                    size={30}
                  />
                </div>

                <p className='max-w-2xl text-base leading-8 text-white/65'>
                  I turn product ideas and designs into fast, responsive and
                  maintainable applications. I work closely with teams to ship
                  reliable, production-ready solutions that scale.
                </p>
              </div>
            </motion.div>

            <div className='grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3'>
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.12 + index * 0.07 }}
                    className='group rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-stone-300 hover:shadow-[0_24px_70px_rgba(28,25,23,0.10)]'
                  >
                    <div className='mb-6 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700 transition duration-300 group-hover:bg-stone-950 group-hover:text-amber-300'>
                      <Icon size={22} />
                    </div>

                    <h4 className='text-lg font-semibold text-stone-950'>
                      {card.title}
                    </h4>

                    <p className='mt-3 text-sm leading-7 text-stone-600'>
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='group relative mt-10 overflow-hidden rounded-[2rem] border border-amber-200 bg-amber-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/5'
        >
          <div className='absolute right-[-80px] top-[-80px] h-44 w-44 rounded-full bg-amber-200/70 blur-3xl' />

          <div className='relative'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-amber-800'>
              Main focus
            </p>

            <p className='mt-4 text-2xl font-semibold leading-snug tracking-[-0.03em] text-stone-950'>
              Building scalable, high-performance interfaces that are
              structured, maintainable and ready for real-world use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
