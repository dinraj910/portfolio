export default function Achievements() {
    const achievements = [
        {
            icon: '🚀',
            title: 'Built 70+ ML & AI Systems',
            desc: 'End-to-end machine learning solutions spanning computer vision, NLP, and predictive analytics.',
        },
        {
            icon: '🧬',
            title: 'Production Deep Learning Architectures',
            desc: 'Designed and deployed CNN, LSTM, YOLO, and Autoencoder-based networks for real-world use cases.',
        },
        {
            icon: '⚡',
            title: 'Real-Time AI Web Applications',
            desc: 'Deployed live inference systems with Flask, React, and TensorFlow Serving for instant predictions.',
        },
        {
            icon: '🏥',
            title: 'Healthcare AI Systems',
            desc: 'Built medical imaging classifiers for Brain Tumor MRI analysis with multi-class classification.',
        },
        {
            icon: '🏭',
            title: 'Industrial AI Solutions',
            desc: 'Anomaly detection and defect inspection systems with explainable heatmap outputs.',
        },
        {
            icon: '🔧',
            title: 'Full-Stack AI Deployment',
            desc: 'Complete system development from data pipeline, model training, to production web deployment.',
        },
    ];

    return (
        <section className="achievements" id="achievements">
            <div className="container">
                <div className="achievements-header reveal">
                    <span className="section-label">Track Record</span>
                    <h2 className="section-title">Achievements & Expertise</h2>
                    <p className="section-subtitle">
                        A proven record of building, deploying, and scaling intelligent systems.
                    </p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((a, i) => (
                        <div className="achievement-card reveal" key={i}>
                            <div className="achievement-icon">{a.icon}</div>
                            <h3 className="achievement-title">{a.title}</h3>
                            <p className="achievement-desc">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
