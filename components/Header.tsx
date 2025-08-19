import React, { useState, useEffect } from 'react';

interface HeaderProps {
    sections: { id: string; name: string }[];
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ sections, activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/80 backdrop-blur-sm shadow-lg' : ''}`}>
            <nav className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-24 py-4 flex justify-between items-center">
                <a href="#about" className="text-xl font-bold text-white hover:text-green transition-colors">
                    Habina<span className="text-green">.</span>
                </a>
                <ul className="hidden md:flex items-center space-x-8">
                    {sections.map(section => (
                        <li key={section.id}>
                            <a 
                                href={`#${section.id}`} 
                                className={`font-mono text-sm capitalize transition-colors ${activeSection === section.id ? 'text-green' : 'text-light-slate hover:text-green'}`}
                            >
                                {section.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;