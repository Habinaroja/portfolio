
import React from 'react';
import Section from './Section';

const Hobbies: React.FC = () => {
    return (
        <Section title="Hobbies">
            <ul className="list-disc list-inside text-slate-400">
                <li>Exploring new technologies and frameworks.</li>
                <li>Creating UI/UX designs with Figma.</li>
                <li>Playing strategic games like Chess.</li>
                <li>Cooking and experimenting with new recipes.</li>
            </ul>
        </Section>
    );
};

export default Hobbies;
