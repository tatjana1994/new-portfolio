'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 px-6 transition ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-stone-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex h-20 max-w-7xl items-center justify-between'>
        <a
          href='#'
          className='text-lg font-semibold tracking-tight text-stone-950'
        >
          Tatjana<span className='text-amber-600'>.</span>
        </a>

        <nav className='hidden items-center gap-8 md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-stone-600 transition hover:text-amber-700'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <a
            href='https://github.com/tatjana1994'
            target='_blank'
            className='hidden rounded-full border border-stone-200 bg-white p-2 text-stone-700 transition hover:-translate-y-0.5 hover:text-amber-700 md:flex'
          >
            <FaGithub size={18} />
          </a>

          <a
            href='https://www.linkedin.com/in/tatjana-devrnja-6a35001b0/'
            target='_blank'
            className='hidden rounded-full border border-stone-200 bg-white p-2 text-stone-700 transition hover:-translate-y-0.5 hover:text-amber-700 md:flex'
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href='#contact'
            className='rounded-full bg-stone-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-600'
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
