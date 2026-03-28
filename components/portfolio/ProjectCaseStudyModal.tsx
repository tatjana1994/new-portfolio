'use client';

import { useEffect } from 'react';

type Project = {
  name: string;
  category: string;
  description: string;
  stack: string;
  image?: string;
  liveUrl?: string;
  caseStudy: {
    overview: string;
    role: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
};

type ProjectCaseStudyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export function ProjectCaseStudyModal({
  isOpen,
  onClose,
  project,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6'
      onClick={onClose}
    >
      <div
        className='relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] bg-[#fcfaf7] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] md:p-8'
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type='button'
          onClick={onClose}
          className='absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm text-black/60 transition hover:bg-black/5 hover:text-black'
          aria-label='Close modal'
        >
          ✕
        </button>

        <div>
          <p className='text-xs font-medium uppercase tracking-[0.22em] text-black/40'>
            {project.category}
          </p>

          <h3 className='mt-3 text-3xl font-semibold tracking-tight text-[#1a1a1a]'>
            {project.name}
          </h3>

          <p className='mt-5 text-sm leading-7 text-black/45'>
            {project.stack}
          </p>

          <div className='mt-8 space-y-6'>
            <section>
              <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-black/45'>
                Overview
              </h4>
              <p className='mt-2 text-[15px] leading-8 text-black/65'>
                {project.caseStudy.overview}
              </p>
            </section>

            <section>
              <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-black/45'>
                My role
              </h4>
              <p className='mt-2 text-[15px] leading-8 text-black/65'>
                {project.caseStudy.role}
              </p>
            </section>

            <section>
              <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-black/45'>
                Challenge
              </h4>
              <p className='mt-2 text-[15px] leading-8 text-black/65'>
                {project.caseStudy.challenge}
              </p>
            </section>

            <section>
              <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-black/45'>
                Solution
              </h4>
              <p className='mt-2 text-[15px] leading-8 text-black/65'>
                {project.caseStudy.solution}
              </p>
            </section>

            <section>
              <h4 className='text-sm font-semibold uppercase tracking-[0.14em] text-black/45'>
                Outcome
              </h4>
              <p className='mt-2 text-[15px] leading-8 text-black/65'>
                {project.caseStudy.outcome}
              </p>
            </section>
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-xl bg-[#1f1f1f] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90'
              >
                Visit Live Project
              </a>
            ) : null}

            <button
              type='button'
              onClick={onClose}
              className='inline-flex cursor-pointer items-center justify-center rounded-xl border border-black/15 px-4 py-2.5 text-sm font-medium text-[#1f1f1f] transition hover:bg-black/5'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
