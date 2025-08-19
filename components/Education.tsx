import React from 'react';
import type { EducationItem } from '../types';
import Section from './Section';

const educationHistory: EducationItem[] = [
    {
        degree: "BE Computer Science and Engineering",
        institution: "AVS Engineering College",
        percentage: "87%"
    },
    {
        degree: "12th Grade (HSC)",
        institution: "Sri Saradha Memorial School",
        percentage: "87.16%"
    },
    {
        degree: "10th Grade (SSLC)",
        institution: "Government Girls Higher Secondary School, Attur",
        percentage: "86.6%"
    }
];

const Education: React.FC = () => {
    return (
        <Section title="Education">
            <div className="space-y-6">
                {educationHistory.map((item, index) => (
                    <div key={index} className="group relative transition-all p-4 rounded-md hover:bg-light-navy/50">
                        <div className="sm:flex-grow">
                             <h3 className="font-medium leading-snug text-white">
                                {item.degree}
                            </h3>
                            <p className="text-sm text-slate mt-1">{item.institution}</p>
                            <p className="text-sm text-green mt-2 font-mono">Percentage: {item.percentage}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;