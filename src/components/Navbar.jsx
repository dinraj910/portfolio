import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (e, id) => {
        e.preventDefault();
        setMobileOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="navbar-inner">
                <a href="#" className="navbar-logo">
                    DK<span className="accent">D</span>
                </a>

                <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={(e) => handleNav(e, 'about')}>About</a>
                    <a href="#tech-stack" onClick={(e) => handleNav(e, 'tech-stack')}>Tech Stack</a>
                    <a href="#projects" onClick={(e) => handleNav(e, 'projects')}>Projects</a>
                    <a href="#ai-lab" onClick={(e) => handleNav(e, 'ai-lab')}>Expertise</a>
                    <a href="#achievements" onClick={(e) => handleNav(e, 'achievements')}>Achievements</a>
                    <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="navbar-cta">Contact</a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
