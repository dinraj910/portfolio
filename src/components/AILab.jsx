export default function AILab() {
    const domains = [
        { icon: '🧠', title: 'Computer Vision', desc: 'YOLO object detection, image classification, anomaly detection, medical imaging' },
        { icon: '💬', title: 'NLP & Text Intelligence', desc: 'Sentiment analysis, spam detection, fake news classification, LSTM & Bi-LSTM' },
        { icon: '🔬', title: 'Deep Learning', desc: 'CNN, ResNet, Autoencoders, GANs, Transfer Learning, sequence modeling' },
        { icon: '🌐', title: 'Web Development', desc: 'Full-stack MERN apps, React, Node.js, Flask, FastAPI, REST APIs' },
        { icon: '🏗️', title: 'System Design', desc: 'Scalable architectures, microservices, database design, API design patterns' },
        { icon: '📈', title: 'Predictive Analytics', desc: 'Time series forecasting, LSTM predictions, financial & weather analytics' },
        { icon: '📱', title: 'Mobile & Cross-Platform', desc: 'React Native apps, responsive interfaces, cross-platform experiences' },
        { icon: '⚡', title: 'Real-Time AI Systems', desc: 'Live inference pipelines, real-time detection, edge deployment, streaming' },
        { icon: '🏥', title: 'Healthcare AI', desc: 'Brain tumor MRI analysis, skin lesion classification, medical imaging systems' },
        { icon: '🛡️', title: 'Safety & Industrial AI', desc: 'Traffic monitoring, defect inspection, wildlife monitoring, loss prevention' },
        { icon: '🔧', title: 'MLOps & Deployment', desc: 'Docker, Kubernetes, CI/CD pipelines, model serving, production deployment' },
        { icon: '🎨', title: 'UI/UX Engineering', desc: 'Modern web design, interactive interfaces, responsive layouts, Figma to code' },
    ];

    const stats = [
        { number: '80+', label: 'AI Projects Built' },
        { number: '40+', label: 'Deep Learning Systems' },
        { number: '10+', label: 'Real-Time AI Deployments' },
        { number: '20+', label: 'Web Projects' },
    ];

    return (
        <section className="ai-lab" id="ai-lab">
            <div className="container">
                <div className="ai-lab-header reveal">
                    <span className="section-label">AI Systems Lab</span>
                    <h2 className="section-title">Domains of Expertise</h2>
                    <p className="section-subtitle">
                        The areas I specialize in — from building AI models to designing scalable systems and beautiful interfaces.
                    </p>
                </div>

                <div className="ai-lab-grid">
                    {domains.map((d, i) => (
                        <div className="lab-card reveal" key={i}>
                            <div className="lab-card-icon">{d.icon}</div>
                            <h3 className="lab-card-title">{d.title}</h3>
                            <p className="lab-card-desc">{d.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="stats-row">
                    {stats.map((s, i) => (
                        <div className="stat-card reveal" key={i}>
                            <div className="stat-number">{s.number}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
