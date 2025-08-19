
import React from 'react';
import Section from './Section';

interface CertificationItem {
    name: string;
    issuer: string;
    year: string;
}

const certifications: CertificationItem[] = [
    {
        name: "Full Stack Developer",
        issuer: "Tap Academy",
        year: "2025 (Pursuing)"
    },
    {
        name: "Machine Learning Certificate",
        issuer: "Novitech Private Limited",
        year: "2023"
    },
    {
        name: "Core Java",
        issuer: "CSC Computer Center",
        year: "2022"
    }
];

const Certifications: React.FC = () => {
    return (
        <Section title="Certifications">
            <div className="space-y-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="group relative transition-all p-4 rounded-md hover:bg-light-navy/50">
                        <div className="sm:flex-grow">
                             <h3 className="font-medium leading-snug text-white">
                                {cert.name}
                            </h3>
                            <p className="text-sm text-slate mt-1">{cert.issuer}</p>
                            <p className="text-sm text-green mt-2 font-mono">{cert.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
