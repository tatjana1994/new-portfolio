'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Gauge, Layers3, Sparkles } from 'lucide-react';

const highlights = [
  {
    label: '4+ years',
    text: 'Frontend experience',
  },
  {
    label: 'React / Next.js',
    text: 'Main tech stack',
  },
  {
    label: 'CMS & E-commerce',
    text: 'Headless architecture',
  },
];

const cards = [
  {
    title: 'Production-ready UI',
    description:
      'I build clean, responsive interfaces that are easy to maintain and ready for real users.',
    icon: Code2,
  },
  {
    title: 'Performance mindset',
    description:
      'I care about fast rendering, optimized images, SSR, metadata and overall page quality.',
    icon: Gauge,
  },
  {
    title: 'CMS flexibility',
    description:
      'I work with WordPress Headless, WPGraphQL and Contentful to create dynamic content structures.',
    icon: Layers3,
  },
];

export default function About() {
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-white px-6 py-24'
    >
      <div className='absolute right-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-amber-100 blur-3xl' />
      <div className='absolute left-[-160px] bottom-10 h-[360px] w-[360px] rounded-full bg-rose-100 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className='sticky top-28'
          >
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700'>
              About me
            </p>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl'>
              Frontend developer focused on polished, scalable digital products.
            </h2>

            <p className='mt-6 max-w-xl text-lg leading-8 text-stone-600'>
              I’m Tatjana, a Frontend Engineer with 4+ years of experience
              building high-performance web applications using React, Next.js
              and TypeScript. My focus is on clean architecture, premium UI,
              performance and real business usability.
            </p>

            <div className='mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3'>
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className='rounded-3xl border border-stone-200 bg-[#FAF7F1] p-5'
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
              className='overflow-hidden rounded-[2rem] border border-stone-200 bg-[#FAF7F1] p-5 shadow-sm'
            >
              <div className='rounded-[1.5rem] bg-stone-950 p-7 text-white'>
                <div className='mb-10 flex items-start justify-between gap-4'>
                  <div>
                    <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80'>
                      <Sparkles size={15} className='text-amber-300' />
                      What I bring
                    </div>

                    <h3 className='max-w-2xl text-3xl font-semibold tracking-[-0.035em] md:text-4xl'>
                      I combine strong frontend implementation with a refined
                      sense for visual quality.
                    </h3>
                  </div>

                  <ArrowUpRight className='text-amber-300' size={28} />
                </div>

                <p className='max-w-2xl text-base leading-8 text-white/65'>
                  I enjoy turning Figma designs and business requirements into
                  fast, responsive and maintainable products. I’m comfortable
                  working with designers, backend developers and CMS-driven
                  workflows.
                </p>
              </div>
            </motion.div>

            <div className='grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3'>
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.12 + index * 0.07 }}
                    className='group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5'
                  >
                    <div className='mb-6 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700 transition group-hover:bg-stone-950 group-hover:text-amber-300'>
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='rounded-[2rem] border border-amber-200 bg-amber-50 p-7'
            >
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-amber-800'>
                Main focus
              </p>

              <p className='mt-4 text-2xl font-semibold leading-snug tracking-[-0.025em] text-stone-950'>
                Building interfaces that are not only visually polished, but
                also fast, structured and practical for real business use.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
