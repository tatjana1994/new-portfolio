'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { techStack } from '@/data/tech';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-[#FAF7F1] px-6 pb-24 pt-32 text-[#171717]'>
      <div className='absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#F3C77C_0%,rgba(243,199,124,0.35)_35%,transparent_70%)] blur-3xl' />
      <div className='absolute right-[-160px] top-32 h-[420px] w-[420px] rounded-full bg-rose-200/50 blur-3xl' />
      <div className='absolute left-[-160px] bottom-0 h-[380px] w-[380px] rounded-full bg-amber-200/60 blur-3xl' />

      <div className='relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]'>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/70 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur'>
            <Sparkles size={16} className='text-amber-600' />
            Frontend Engineer · React / Next.js / TypeScript
          </div>

          <h1 className='max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-stone-950 md:text-7xl'>
            Building fast, scalable digital products with a focus on clean
            architecture and high-quality user experiences.
          </h1>

          <p className='mt-7 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl'>
            I design and build modern web applications — from platforms and
            dashboards to content-driven websites — using React, Next.js and
            TypeScript. Focused on performance, scalability and shipping
            production-ready products.
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#projects'
              className='group inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-stone-950/15 transition hover:-translate-y-0.5 hover:bg-stone-800'
            >
              View Projects
              <ArrowDown
                size={17}
                className='transition group-hover:translate-y-0.5'
              />
            </a>

            <a
              href='/Tatjana_Devrnja_CV.pdf'
              download
              className='inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/75 px-7 py-4 text-sm font-semibold text-stone-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-white'
            >
              Download CV
            </a>
          </div>

          <div className='mt-8 flex items-center gap-3'>
            <a
              href='mailto:devrnjat94@gmail.com'
              className='rounded-full border border-stone-200 bg-white/70 p-3 text-stone-700 transition hover:-translate-y-0.5 hover:text-amber-700'
              aria-label='Email'
            >
              <Mail size={19} />
            </a>
            <a
              href='https://www.linkedin.com/in/tatjana-devrnja-6a35001b0/'
              target='_blank'
              className='rounded-full border border-stone-200 bg-white/70 p-3 text-stone-700 transition hover:-translate-y-0.5 hover:text-amber-700'
              aria-label='LinkedIn'
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href='https://github.com/tatjana1994'
              target='_blank'
              className='rounded-full border border-stone-200 bg-white/70 p-3 text-stone-700 transition hover:-translate-y-0.5 hover:text-amber-700'
              aria-label='GitHub'
            >
              <FaGithub size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className='relative'
        >
          <div className='absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-amber-200 via-rose-100 to-white blur-2xl' />

          <div className='relative overflow-hidden rounded-[2.5rem] border border-white bg-white/75 p-5 shadow-2xl shadow-stone-900/10 backdrop-blur-xl'>
            <div className='rounded-[2rem] bg-stone-950 p-6 text-white'>
              <div className='mb-10 flex items-center justify-between'>
                <div>
                  <p className='text-sm text-white/50'>Portfolio</p>
                  <p className='text-xl font-semibold'>Tatjana Devrnja</p>
                </div>
                <div className='rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-stone-950'>
                  Available
                </div>
              </div>

              <div className='grid gap-3'>
                {[
                  'Web Applications',
                  'Platforms & Dashboards',
                  'Headless CMS',
                  'Scalable Frontend',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                    className='rounded-2xl border border-white/10 bg-white/[0.06] p-4'
                  >
                    <div className='flex items-center justify-between'>
                      <span className='font-medium'>{item}</span>
                      <span className='h-2 w-2 rounded-full bg-amber-300' />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='mt-5 grid grid-cols-2 gap-3'>
              <div className='rounded-3xl border border-stone-100 bg-white p-5'>
                <p className='text-4xl font-semibold tracking-tight'>4+</p>
                <p className='mt-1 text-sm text-stone-500'>Years experience</p>
              </div>
              <div className='rounded-3xl border border-stone-100 bg-white p-5'>
                <p className='text-4xl font-semibold tracking-tight'>12+</p>
                <p className='mt-1 text-sm text-stone-500'>Core technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className='relative mx-auto mt-16 flex max-w-7xl flex-wrap gap-2'>
        {techStack.map((tech) => (
          <span
            key={tech}
            className='rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur'
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
