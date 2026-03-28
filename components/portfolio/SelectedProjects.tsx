'use client';

import { useCallback, useState } from 'react';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import Image from 'next/image';
import { projects } from '@/data/projects';

export type Project = {
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

export function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section id='projects' className='px-6 py-20 md:px-10 lg:px-16 lg:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.22em] text-black/45'>
              Selected work
            </p>
            <h2 className='mt-4 text-3xl font-semibold tracking-tight text-[#1a1a1a] md:text-4xl'>
              A few projects that reflect how I build.
            </h2>
          </div>

          <div className='mt-12 space-y-8'>
            {projects.map((project) => (
              <article
                key={project.name}
                className='grid gap-8 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] md:grid-cols-[0.95fr_1.05fr] md:p-8'
              >
                <div className='overflow-hidden flex align-center justify-center rounded-[24px] bg-[#ece7de]'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={300}
                      height={300}
                    />
                  ) : (
                    <div className='min-h-[260px]' />
                  )}
                </div>

                <div className='flex flex-col justify-between'>
                  <div>
                    <p className='text-sm font-medium uppercase tracking-[0.18em] text-black/40'>
                      {project.category}
                    </p>

                    <h3 className='mt-3 text-2xl font-semibold tracking-tight text-[#1a1a1a]'>
                      {project.name}
                    </h3>

                    <p className='mt-5 text-base leading-8 text-black/65'>
                      {project.description}
                    </p>

                    <p className='mt-5 text-sm leading-7 text-black/50'>
                      {project.stack}
                    </p>
                  </div>

                  <div className='mt-8 flex flex-wrap gap-3'>
                    <a
                      href={project.liveUrl || '#'}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center justify-center rounded-xl bg-[#1f1f1f] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90'
                    >
                      View Project
                    </a>

                    <button
                      type='button'
                      onClick={() => setSelectedProject(project)}
                      className='inline-flex cursor-pointer items-center justify-center rounded-xl border border-black/15 px-4 py-2.5 text-sm font-medium text-[#1f1f1f] transition hover:bg-black/5'
                    >
                      Read Case Study
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectCaseStudyModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}
