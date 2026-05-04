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
      className='relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24'
    >
      <div className='absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-amber-100 blur-3xl' />
      <div className='absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-rose-100 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className='overflow-hidden rounded-[2rem] border border-stone-200 bg-[#FAF7F1] p-3 shadow-2xl shadow-stone-900/5 sm:rounded-[2.5rem] sm:p-4'
        >
          <div className='grid gap-4 sm:gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
            <div className='rounded-[1.6rem] bg-stone-950 p-5 text-white sm:rounded-[2rem] sm:p-6 md:p-10'>
              <div className='mb-10 inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/75 sm:mb-14 sm:text-sm md:mb-20'>
                <MapPin size={15} className='shrink-0 text-amber-300' />
                <span className='truncate'>
                  Serbia · Available for remote work
                </span>
              </div>

              <p className='mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm sm:tracking-[0.25em]'>
                Contact
              </p>

              <h2 className='max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-6xl md:tracking-[-0.045em]'>
                Let’s create something that looks beautiful and works
                flawlessly.
              </h2>

              <p className='mt-5 max-w-xl text-base leading-7 text-white/65 sm:mt-6 sm:text-lg sm:leading-8'>
                Open for frontend roles, freelance projects and collaborations
                focused on React, Next.js, e-commerce, dashboards and headless
                CMS websites.
              </p>

              <a
                href='mailto:devrnjat94@gmail.com'
                className='mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-300 sm:mt-9 sm:px-7 sm:py-4'
              >
                Send email
                <Send size={17} />
              </a>
            </div>

            <div className='grid gap-4 sm:gap-5'>
              {contactLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className='group flex flex-col gap-4 rounded-[1.6rem] border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5 sm:flex-row sm:items-center sm:justify-between sm:rounded-[2rem] sm:p-6'
                  >
                    <div className='flex min-w-0 items-center gap-3 sm:gap-4'>
                      <div className='shrink-0 rounded-xl bg-amber-100 p-3 text-amber-700 transition group-hover:bg-stone-950 group-hover:text-amber-300 sm:rounded-2xl sm:p-4'>
                        <Icon size={21} />
                      </div>

                      <div className='min-w-0'>
                        <p className='text-sm font-medium text-stone-500'>
                          {item.label}
                        </p>
                        <p className='mt-1 break-words font-semibold text-stone-950'>
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <span className='self-start rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-600 transition group-hover:bg-amber-100 group-hover:text-amber-800 sm:self-auto sm:px-4 sm:py-2'>
                      Open
                    </span>
                  </motion.a>
                );
              })}

              <div className='rounded-[1.6rem] border border-amber-200 bg-amber-50 p-5 sm:rounded-[2rem] sm:p-7'>
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 sm:text-sm sm:tracking-[0.2em]'>
                  Best fit
                </p>

                <p className='mt-4 text-xl font-semibold leading-snug tracking-[-0.025em] text-stone-950 sm:text-2xl'>
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
