export function Footer() {
  return (
    <footer className='border-t border-black/10 px-6 py-12 md:px-10 lg:px-16'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-sm font-medium text-[#1f1f1f]'>Tatjana Devrnja</p>
          <p className='mt-1 text-sm text-black/50'>
            Frontend Engineer · React / Next.js
          </p>
        </div>

        <div className='flex gap-6 text-sm text-black/60'>
          <a href='#projects' className='hover:text-black transition'>
            Work
          </a>
          <a href='#experience' className='hover:text-black transition'>
            Experience
          </a>
          <a href='#contact' className='hover:text-black transition'>
            Contact
          </a>
        </div>

        <div className='flex gap-4 text-sm text-black/60'>
          <a
            href='https://linkedin.com/in/tatjana-devrnja-6a35001b0'
            target='_blank'
            className='hover:text-black transition'
          >
            LinkedIn
          </a>

          <a
            href='mailto:devrnjat94@gmail.com'
            className='hover:text-black transition'
          >
            Email
          </a>
        </div>
      </div>

      <div className='mx-auto mt-10 max-w-7xl text-xs text-black/40'>
        © {new Date().getFullYear()} Tatjana Devrnja. All rights reserved.
      </div>
    </footer>
  );
}
