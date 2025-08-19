import React from 'react';
import type { Skill } from '../types';
import Section from './Section';

const technicalSkills: Skill[] = [
    { name: "Core Java" },
    { name: "Python" },
    { name: "Machine Learning" },
    { name: "MySQL" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "UI/UX Design" },
];

const softSkills: Skill[] = [
    { name: "Problem Solving" },
    { name: "Analytical Skills" },
    { name: "Communication" },
    { name: "Critical Thinking" },
];

const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
    <li className="flex items-center mb-2 mr-2">
        <div className="flex items-center rounded-md bg-green/10 px-3 py-1.5 text-sm font-medium leading-5 text-green font-mono">
            {name}
        </div>
    </li>
);

const Skills: React.FC = () => {
    return (
        <Section title="My Skills">
            <div>
                <h3 className="font-medium text-white mb-4 text-lg">Technical Proficiencies</h3>
                <ul className="flex flex-wrap list-none p-0 mb-6">
                    {technicalSkills.map((skill) => (
                        <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </ul>

                <h3 className="font-medium text-white mb-4 mt-8 text-lg">Soft Skills</h3>
                <ul className="flex flex-wrap list-none p-0">
                    {softSkills.map((skill) => (
                        <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Skills;