export default function Collaboration() {
    const services = [
        { icon: '🤖', title: 'Custom AI Model Development' },
        { icon: '👁️', title: 'Computer Vision Systems' },
        { icon: '💬', title: 'NLP Systems' },
        { icon: '📊', title: 'Predictive Analytics Platforms' },
        { icon: '🌐', title: 'Full-Stack AI Web Applications' },
        { icon: '🏗️', title: 'AI System Architecture Consulting' },
    ];

    return (
        <section className="collaboration" id="collaboration">
            <div className="container">
                <div className="collab-wrapper">
                    <span className="section-label reveal">Let's Work Together</span>
                    <h2 className="section-title reveal">Open for High-Impact AI &amp; Full-Stack Projects</h2>
                    <p className="section-subtitle reveal">
                        I actively collaborate on advanced AI engineering, ML system development,
                        and full-stack application projects. Available for freelance, consulting,
                        and research-driven paid collaborations.
                    </p>

                    <div className="services-grid">
                        {services.map((s, i) => (
                            <div className="service-card reveal" key={i}>
                                <div className="service-icon">{s.icon}</div>
                                <h3 className="service-title">{s.title}</h3>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
