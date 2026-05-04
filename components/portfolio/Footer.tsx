'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative overflow-hidden bg-[#FAF7F1] px-6 pt-24 pb-10 text-stone-700'>
      <div className='absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#F3C77C_0%,rgba(243,199,124,0.25)_40%,transparent_70%)] blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='rounded-[2rem] border border-stone-200 bg-white p-10 shadow-xl shadow-stone-900/5'
        >
          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <div>
              <h3 className='text-3xl font-semibold tracking-[-0.03em] text-stone-950 md:text-4xl'>
                Let’s build something great.
              </h3>
              <p className='mt-2 text-stone-600'>
                Open for freelance work and full-time opportunities.
              </p>
            </div>

            <a
              href='mailto:devrnjat94@gmail.com'
              className='inline-flex items-center justify-center rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-600'
            >
              Get in touch
            </a>
          </div>

          <div className='my-10 h-px bg-stone-200' />

          <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
            <p className='text-sm text-stone-500'>
              © {new Date().getFullYear()} Tatjana Devrnja. All rights reserved.
            </p>

            <div className='flex items-center gap-3'>
              <a
                href='mailto:devrnjat94@gmail.com'
                className='rounded-full border border-stone-200 bg-white p-3 transition hover:-translate-y-0.5 hover:text-amber-700'
              >
                <Mail size={18} />
              </a>

              <a
                href='https://www.linkedin.com/in/tatjana-devrnja-6a35001b0/'
                target='_blank'
                className='rounded-full border border-stone-200 bg-white p-3 transition hover:-translate-y-0.5 hover:text-amber-700'
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href='https://github.com/tatjana1994'
                target='_blank'
                className='rounded-full border border-stone-200 bg-white p-3 transition hover:-translate-y-0.5 hover:text-amber-700'
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
