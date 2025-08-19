import React from 'react';
import type { Project } from '../types';
import Section from './Section';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <Section title="Projects">
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-8">
                             <h3 className="font-medium leading-snug text-slate-200">
                                <span className="inline-block font-medium text-white group-hover:text-green transition-colors text-base">{project.title}</span>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
