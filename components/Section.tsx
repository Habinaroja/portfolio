import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
    return (
        <section className={`py-24 animate-fade-in-up ${className}`} style={{ animationDelay: '100ms', opacity: 0 }}>
             <h2 className="text-2xl font-bold tracking-tight text-white mb-8">
                <span className="text-green font-mono text-xl mr-2">#</span>{title}
            </h2>
            {children}
        </section>
    );
};

export default Section;