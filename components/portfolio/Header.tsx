'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-black/10 bg-[#f7f4ef]/80 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16'>
        <Link
          href='/'
          className='text-sm font-semibold tracking-tight text-[#1f1f1f]'
        >
          Tatjana Devrnja
        </Link>

        <nav className='hidden items-center gap-8 text-sm text-black/60 md:flex'>
          <a href='#projects' className='hover:text-black transition'>
            Work
          </a>
          <a href='#experience' className='hover:text-black transition'>
            Experience
          </a>
          <a href='#contact' className='hover:text-black transition'>
            Contact
          </a>
        </nav>

        <a
          href='/Tatjana_Devrnja_CV.pdf'
          download
          className='rounded-xl border border-black/15 px-4 py-2 text-sm font-medium text-[#1f1f1f] transition hover:bg-black/5'
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
