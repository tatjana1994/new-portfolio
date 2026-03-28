export function Contact() {
  return (
    <section id='contact' className='px-6 py-20 md:px-10 lg:px-16 lg:py-24'>
      <div className='mx-auto max-w-7xl rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-12'>
        <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
          <div>
            <p className='text-sm font-medium uppercase tracking-[0.22em] text-black/45'>
              Contact
            </p>

            <h2 className='mt-4 text-3xl font-semibold tracking-tight text-[#1a1a1a] md:text-4xl'>
              Open to frontend opportunities and meaningful product work.
            </h2>

            <p className='mt-6 max-w-xl text-base leading-8 text-black/65'>
              I’m currently interested in frontend roles where I can contribute
              to modern web products, performance-focused interfaces, and
              scalable frontend systems. If you think we’d be a good fit, I’d be
              glad to connect.
            </p>

            <div className='mt-8 space-y-3 text-base text-black/70'>
              <p>Email: devrnjat94@gmail.com</p>
              <p>LinkedIn: linkedin.com/in/tatjana-devrnja-6a35001b0</p>
              <p>Location: Serbia · Remote</p>
            </div>

            <div className='mt-8'>
              <a
                href='/Tatjana_Devrnja_CV.pdf'
                download
                className='inline-flex items-center justify-center rounded-2xl bg-[#1f1f1f] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90'
              >
                Download CV
              </a>
            </div>
          </div>

          <form className='grid gap-4'>
            <input
              type='text'
              placeholder='Your name'
              className='h-14 rounded-2xl border border-black/10 bg-[#faf8f4] px-4 outline-none transition placeholder:text-black/35 focus:border-black/25'
            />

            <input
              type='email'
              placeholder='Your email'
              className='h-14 rounded-2xl border border-black/10 bg-[#faf8f4] px-4 outline-none transition placeholder:text-black/35 focus:border-black/25'
            />

            <textarea
              placeholder='Tell me a bit about your project or role'
              rows={6}
              className='rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-4 outline-none transition placeholder:text-black/35 focus:border-black/25'
            />

            <button
              type='submit'
              className='mt-2 cursor-pointer inline-flex h-14 items-center justify-center rounded-2xl bg-[#1f1f1f] px-6 text-sm font-medium text-white transition hover:opacity-90'
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
