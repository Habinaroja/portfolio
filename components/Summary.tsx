
import React from 'react';
import Section from './Section';

interface SummaryProps {
    content: string;
}

const Summary: React.FC<SummaryProps> = ({ content }) => {
    return (
        <Section title="Summary">
            <p className="text-slate-400 leading-relaxed">
                {content}
            </p>
        </Section>
    );
};

export default Summary;
