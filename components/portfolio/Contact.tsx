'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const contactLinks = [
  {
    label: 'Email',
    value: 'devrnjat94@gmail.com',
    href: 'mailto:devrnjat94@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'tatjana-devrnja',
    href: 'https://www.linkedin.com/in/tatjana-devrnja-6a35001b0/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: 'View projects',
    href: 'https://github.com/tatjana1994',
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-white px-6 py-24'
    >
      <div className='absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-amber-100 blur-3xl' />
      <div className='absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-rose-100 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className='overflow-hidden rounded-[2.5rem] border border-stone-200 bg-[#FAF7F1] p-4 shadow-2xl shadow-stone-900/5'
        >
          <div className='grid gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
            {/* Left */}
            <div className='rounded-[2rem] bg-stone-950 p-8 text-white md:p-10'>
              <div className='mb-20 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/75'>
                <MapPin size={16} className='text-amber-300' />
                Serbia · Available for remote work
              </div>

              <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300'>
                Contact
              </p>

              <h2 className='max-w-2xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl'>
                Let’s create something that looks beautiful and works
                flawlessly.
              </h2>

              <p className='mt-6 max-w-xl text-lg leading-8 text-white/65'>
                Open for frontend roles, freelance projects and collaborations
                focused on React, Next.js, e-commerce, dashboards and headless
                CMS websites.
              </p>

              <a
                href='mailto:devrnjat94@gmail.com'
                className='mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-300'
              >
                Send email
                <Send size={17} />
              </a>
            </div>

            <div className='grid gap-5'>
              {contactLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className='group flex items-center justify-between gap-5 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5'
                  >
                    <div className='flex items-center gap-4'>
                      <div className='rounded-2xl bg-amber-100 p-4 text-amber-700 transition group-hover:bg-stone-950 group-hover:text-amber-300'>
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className='text-sm font-medium text-stone-500'>
                          {item.label}
                        </p>
                        <p className='mt-1 font-semibold text-stone-950'>
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <span className='rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-600 transition group-hover:bg-amber-100 group-hover:text-amber-800'>
                      Open
                    </span>
                  </motion.a>
                );
              })}

              <div className='rounded-[2rem] border border-amber-200 bg-amber-50 p-7'>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-amber-800'>
                  Best fit
                </p>

                <p className='mt-4 text-2xl font-semibold leading-snug tracking-[-0.025em] text-stone-950'>
                  React / Next.js projects where UI quality, performance and
                  clean implementation matter.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
