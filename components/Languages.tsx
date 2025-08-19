
import React from 'react';
import Section from './Section';

const Languages: React.FC = () => {
    return (
        <Section title="Languages">
            <ul className="list-disc list-inside text-slate-400">
                <li>Tamil (Native)</li>
                <li>English (Professional Working Proficiency)</li>
            </ul>
        </Section>
    );
};

export default Languages;
