
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generatePortfolioContent } from './services/geminiService';
import { Project, PortfolioContent } from './types';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Hobbies from './components/Hobbies';
import LoadingSpinner from './components/LoadingSpinner';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedInIcon from './components/icons/LinkedInIcon';
import EmailIcon from './components/icons/EmailIcon';


const App: React.FC = () => {
    const [portfolioContent, setPortfolioContent] = useState<PortfolioContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('about');

    const sections: { id: string; name: string }[] = [
        { id: 'about', name: 'About' },
        { id: 'education', name: 'Education' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'certifications', name: 'Certifications' },
        { id: 'languages', name: 'Languages' },
        { id: 'hobbies', name: 'Hobbies' },
    ];
    
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const handleScroll = useCallback(() => {
        const pageYOffset = window.pageYOffset;
        // Adjust offset to trigger highlighting when section is closer to the top
        const scrollOffset = window.innerHeight * 0.4; 
        let currentSection = '';

        sections.forEach(section => {
            const ref = sectionRefs.current[section.id];
            if (ref && ref.offsetTop <= pageYOffset + scrollOffset) {
                currentSection = section.id;
            }
        });
        
        if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
        } else if (!currentSection && pageYOffset < 300) {
            setActiveSection('about');
        }
    }, [sections, activeSection]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const content = await generatePortfolioContent();
                setPortfolioContent(content);
            } catch (err) {
                console.error("Error generating portfolio content:", err);
                setError("Failed to load dynamic content. Please check your API key and try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-white">
                <LoadingSpinner />
                <p className="mt-4 text-lg text-slate-400">Building your portfolio with AI...</p>
                <p className="mt-2 text-sm text-slate-500">This might take a moment.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-900/10 text-white p-8">
                <div className="text-center bg-light-navy p-8 rounded-lg shadow-2xl">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">An Error Occurred</h2>
                    <p className="text-slate-300">{error}</p>
                </div>
            </div>
        );
    }

    const projects: Project[] = [
        {
            title: "Image-based OTP verification in Android mobile application",
            description: portfolioContent?.projectDescriptions.find(p => p.title.includes("Image-based OTP"))?.description || "",
        },
        {
            title: "Leaf classification using decision tree algorithm",
            description: portfolioContent?.projectDescriptions.find(p => p.title.includes("Leaf classification"))?.description || "",
        },
        {
            title: "Handwritten recognition using SVM algorithm",
            description: portfolioContent?.projectDescriptions.find(p => p.title.includes("Handwritten recognition"))?.description || "",
        },
        {
            title: "Car purchase prediction using K-Nearest Neighbour Algorithm",
            description: portfolioContent?.projectDescriptions.find(p => p.title.includes("Car purchase prediction"))?.description || "",
        },
    ];

    return (
        <>
            <Header sections={sections} activeSection={activeSection} />
            <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:px-24">
                 <main>
                    {/* Hero Section */}
                    <section ref={(el) => { if (el) sectionRefs.current['about'] = el; }} id="about" className="min-h-[80vh] flex flex-col justify-center animate-fade-in-up">
                        <div className="max-w-3xl">
                            <span className="text-green font-mono">Hi, my name is</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2">Habina Roja N.</h1>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate mt-2">I build things for the web.</h2>
                            <p className="mt-6 max-w-xl text-slate-400 leading-relaxed">
                                {portfolioContent?.summary}
                            </p>
                            <ul className="mt-8 flex items-center space-x-6">
                                <li>
                                    <a href="https://github.com/Habinaroja" target="_blank" rel="noreferrer" className="text-slate hover:text-green transition-colors">
                                        <span className="sr-only">GitHub</span>
                                        <GitHubIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/habina-roja-n" target="_blank" rel="noreferrer" className="text-slate hover:text-green transition-colors">
                                        <span className="sr-only">LinkedIn</span>
                                        <LinkedInIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:habinaroja51@gmail.com" className="text-slate hover:text-green transition-colors">
                                        <span className="sr-only">Email</span>
                                        <EmailIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                     </section>
                     
                    <div ref={(el) => { if (el) sectionRefs.current['education'] = el; }} id="education" className="scroll-mt-20">
                       <Education />
                    </div>
                    <div ref={(el) => { if (el) sectionRefs.current['skills'] = el; }} id="skills" className="scroll-mt-20">
                        <Skills />
                    </div>
                    <div ref={(el) => { if (el) sectionRefs.current['projects'] = el; }} id="projects" className="scroll-mt-20">
                        <Projects projects={projects} />
                    </div>
                    <div ref={(el) => { if (el) sectionRefs.current['certifications'] = el; }} id="certifications" className="scroll-mt-20">
                        <Certifications />
                    </div>
                    <div ref={(el) => { if (el) sectionRefs.current['languages'] = el; }} id="languages" className="scroll-mt-20">
                        <Languages />
                    </div>
                    <div ref={(el) => { if (el) sectionRefs.current['hobbies'] = el; }} id="hobbies" className="scroll-mt-20">
                        <Hobbies />
                    </div>
                </main>
                <footer className="text-center py-8 mt-16 border-t border-light-navy/20">
                    <p className="text-sm text-slate-500 font-mono">
                        Designed & Built by Habina Roja N with a little help from AI
                    </p>
                </footer>
            </div>
        </>
    );
};

export default App;