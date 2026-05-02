'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

export default function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='projects' className='bg-white px-6 py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700'>
              Selected work
            </p>
            <h2 className='max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-stone-950 md:text-6xl'>
              Projects designed to look clean, work fast and feel premium.
            </h2>
          </div>

          <p className='max-w-md text-base leading-7 text-stone-600'>
            A mix of marketplace, SaaS, e-commerce, AI and client-facing
            websites built with modern frontend architecture.
          </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>
          {projects.map((project, index) => (
            <motion.button
              key={project.slug}
              type='button'
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className='group cursor-pointer relative overflow-hidden rounded-[2rem] border border-stone-200 bg-[#FAF7F1] p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/10'
            >
              <div
                className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-r ${project.accent} opacity-80`}
              />

              <div className='relative rounded-[1.5rem] border border-white/70 bg-white/80 p-6 backdrop-blur-xl'>
                <div className='mb-16 flex items-start justify-between gap-4'>
                  <div>
                    <p className='text-sm font-medium text-stone-500'>
                      {project.category} · {project.year}
                    </p>
                    <h3 className='mt-3 text-3xl font-semibold tracking-[-0.035em] text-stone-950'>
                      {project.title}
                    </h3>
                  </div>

                  <span className='rounded-full bg-stone-950 p-3 text-white transition group-hover:rotate-12 group-hover:bg-amber-600'>
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <p className='max-w-xl text-base leading-7 text-stone-600'>
                  {project.description}
                </p>

                <div className='mt-7 flex flex-wrap gap-2'>
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
