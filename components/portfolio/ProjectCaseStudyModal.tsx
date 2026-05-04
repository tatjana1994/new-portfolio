'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/data/projects';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectCaseStudyModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-stone-950/50 px-4 py-8 backdrop-blur-md'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className='max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#FAF7F1] p-4 shadow-2xl'
          >
            <div className='overflow-hidden rounded-[1.6rem] bg-white'>
              <div className={`bg-gradient-to-r ${project.accent} p-8 md:p-10`}>
                <div className='flex items-start justify-between gap-6'>
                  <div>
                    <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-stone-700'>
                      Case Study
                    </p>
                    <h3 className='text-4xl font-semibold tracking-[-0.045em] text-stone-950 md:text-6xl'>
                      {project.title}
                    </h3>
                    <p className='mt-4 max-w-2xl text-lg leading-8 text-stone-700'>
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className='rounded-full cursor-pointer bg-white/80 p-3 text-stone-800 shadow-sm transition hover:bg-white'
                    aria-label='Close modal'
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              <div className='grid gap-8 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10'>
                <div>
                  <h4 className='text-xl font-semibold text-stone-950'>
                    Overview
                  </h4>
                  <p className='mt-3 leading-8 text-stone-600'>
                    {project.longDescription}
                  </p>

                  <h4 className='mt-8 text-xl font-semibold text-stone-950'>
                    My role
                  </h4>
                  <p className='mt-3 leading-8 text-stone-600'>
                    {project.role}
                  </p>

                  <div className='mt-8 flex flex-wrap gap-3'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        className='inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-lg'
                      >
                        Live project
                        <ExternalLink
                          size={16}
                          className='transition-transform duration-300 group-hover:translate-x-1'
                        />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        className='group inline-flex items-center gap-2 rounded-full border border-stone-200 px-5 py-3 text-sm font-semibold text-stone-900 transition-all duration-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white hover:shadow-md'
                      >
                        GitHub
                        <FaGithub
                          size={16}
                          className='transition-transform duration-300 group-hover:scale-110'
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div className='space-y-5'>
                  <div className='rounded-3xl border border-stone-200 bg-[#FAF7F1] p-6'>
                    <h4 className='font-semibold text-stone-950'>Impact</h4>
                    <ul className='mt-4 space-y-3'>
                      {project.impact.map((item) => (
                        <li
                          key={item}
                          className='flex gap-3 text-sm leading-6 text-stone-600'
                        >
                          <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600' />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='rounded-3xl border border-stone-200 bg-white p-6'>
                    <h4 className='font-semibold text-stone-950'>Features</h4>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className='rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700'
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='rounded-3xl border border-stone-200 bg-white p-6'>
                    <h4 className='font-semibold text-stone-950'>Tech stack</h4>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className='rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
