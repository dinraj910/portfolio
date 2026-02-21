const projects = [
    {
        number: '01',
        title: 'Astrosphere – Interactive AI-Powered Space Encyclopedia',
        impact: 'A hyper-modern space intelligence platform delivering interactive celestial exploration and real-time astronomical data.',
        problem: 'Traditional space information websites lack interactivity, immersive design, and real-time data integration.',
        solution: 'Built a visually immersive, data-driven web platform that provides structured space knowledge with dynamic UI and interactive elements.',
        techStack: ['React', 'JavaScript', 'Modern UI/UX', 'API Integration', 'Responsive Design'],
        features: ['Interactive space objects', 'High-quality image rendering', 'Structured educational content', 'Live deployment'],
        category: 'Frontend Engineering + Interactive System Design',
        liveLink: 'https://astrosphere.onrender.com',
        githubLink: 'https://github.com/dinraj910/Astrosphere',
        image: 'images/astrosphere.png',
    },
    {
        number: '02',
        title: 'Spam SMS Classification (NLP + LSTM RNN)',
        impact: 'End-to-end NLP pipeline with LSTM-based sequence modeling for spam detection.',
        problem: 'SMS spam continues to be a widespread problem, requiring intelligent automated filtering beyond keyword matching.',
        solution: 'End-to-end NLP pipeline with text preprocessing, tokenization, LSTM-based sequence modeling, evaluation, and deployment-ready architecture using TensorFlow/Keras.',
        model: 'LSTM RNN',
        techStack: ['Python', 'TensorFlow', 'Keras', 'NLP', 'LSTM', 'Tokenization'],
        features: ['Text preprocessing pipeline', 'Sequence tokenization', 'LSTM modeling', 'Deployment-ready architecture'],
        category: 'NLP | Deep Learning | Text Classification',
        githubLink: 'https://github.com/dinraj910/Spam-SMS-Classification-using-LSTM-RNN-',
        image: 'https://camo.githubusercontent.com/00c597e53198f684d7d78223c6ba7e9093ffae49b350987f24ff57bd8f2919af/68747470733a2f2f656469746f722e616e616c79746963737669646879612e636f6d2f75706c6f6164732f333230383668656164696e672e6a706567',
    },
    {
        number: '03',
        title: 'Sentiment Analysis using LSTM (NLP)',
        impact: 'Resume-grade sentiment analysis system for real-world text classification.',
        problem: 'Understanding sentiment in user-generated text at scale requires models that capture sequential context and meaning.',
        solution: 'Resume-grade sentiment analysis system with custom word-level tokenization and recurrent neural network modeling for real-world text classification.',
        model: 'LSTM (Long Short-Term Memory)',
        techStack: ['Python', 'TensorFlow', 'Keras', 'NLP', 'LSTM', 'Word Embeddings'],
        features: ['Custom word-level tokenization', 'RNN modeling', 'Real-world text classification', 'Production-ready pipeline'],
        category: 'NLP | Sentiment Analysis | Deep Learning',
        githubLink: 'https://github.com/dinraj910/Sentiment-Analysis-LSTM-NLP',
        image: 'https://bairesdev.mo.cloudinary.net/blog/2023/05/anC3A1lisis-de-sentimientos-opiniones-diferentes-varios-comentarios-de-los-clientes-buenas.jpg_s1024x1024wisk20cuZzouoq0Vke0RAHYPjMHsTgpuejmwg1WKqTZo83iOqY.jpg?tx=w_1920,q_auto',
    },
    {
        number: '04',
        title: 'Traffic AI – Real-Time Vehicle Detection & Flow Analysis',
        impact: 'Real-time vehicle detection, tracking, and traffic flow analytics using YOLOv8.',
        problem: 'Manual traffic monitoring is inefficient and cannot scale across multiple intersections simultaneously.',
        solution: 'Real-time vehicle detection, tracking, and traffic flow analytics using YOLOv8 and ByteTrack with GPU-accelerated inference and CSV-based reporting.',
        model: 'YOLOv8 + ByteTrack',
        techStack: ['Python', 'YOLOv8', 'ByteTrack', 'OpenCV', 'GPU Inference', 'CSV Reporting'],
        features: ['Real-time detection', 'Multi-object tracking', 'Flow analytics', 'GPU-accelerated inference'],
        category: 'Computer Vision | Object Detection | Real-Time AI',
        githubLink: 'https://github.com/dinraj910/Traffic-AI-YOLO',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '05',
        title: 'Structural Damage Severity Assessment (CNN)',
        impact: 'Computer vision system for disaster response and infrastructure inspection.',
        problem: 'Post-disaster structural assessment is dangerous, slow, and relies on limited expert availability.',
        solution: 'Computer vision system that classifies building damage severity from images, designed for disaster response and infrastructure inspection.',
        model: 'Custom CNN',
        techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Flask', 'Image Classification'],
        features: ['Severity classification', 'Disaster response ready', 'Infrastructure inspection', 'Web deployment'],
        category: 'Computer Vision | Disaster Response AI',
        githubLink: 'https://github.com/dinraj910/Structural-Damage-Severity-Assessment-CNN',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '06',
        title: 'Retail Loss Prevention & Shelf Intelligence (YOLO)',
        impact: 'YOLO-based retail analytics with explainable loss-prevention insights.',
        problem: 'Retail shrinkage and poor shelf management cost billions annually, with manual monitoring being impractical at scale.',
        solution: 'YOLO-based retail analytics system detecting product–person interactions, shelf stock conditions, and generating explainable loss-prevention insights.',
        model: 'YOLOv8',
        techStack: ['Python', 'YOLOv8', 'OpenCV', 'Deep Learning', 'Analytics'],
        features: ['Product-person interaction detection', 'Shelf stock monitoring', 'Loss-prevention insights', 'Explainable outputs'],
        category: 'Computer Vision | Retail AI | Analytics',
        githubLink: 'https://github.com/dinraj910/Retail-Loss-Prevention-Shelf-Intelligence-using-YOLO',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '07',
        title: 'DermaAI – Skin Lesion Classification (CNN + ResNet)',
        impact: 'Medical imaging application classifying skin lesions with confidence scores.',
        problem: 'Early detection of malignant skin lesions is critical but requires specialist dermatologists not always accessible.',
        solution: 'Medical imaging application that classifies skin lesions as benign or malignant with confidence scores using deep CNN architectures.',
        model: 'CNN + ResNet',
        techStack: ['Python', 'TensorFlow', 'ResNet', 'CNN', 'Medical Imaging', 'Flask'],
        features: ['Benign/malignant classification', 'Confidence scores', 'Deep CNN architecture', 'Medical-grade UI'],
        category: 'Healthcare AI | Medical Imaging | Deep Learning',
        githubLink: 'https://github.com/dinraj910/DermaAI-Skin-Lesion-Classification-CNN-ResNet-',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '08',
        title: 'Industrial Defect Inspection (CNN Autoencoder)',
        impact: 'AI-based anomaly detection system for automated quality control.',
        problem: 'Manual defect inspection in manufacturing is inconsistent and expensive.',
        solution: 'Unsupervised anomaly detection system for industrial surface inspection using reconstruction-based CNN autoencoders with explainable heatmaps.',
        model: 'CNN Autoencoder',
        techStack: ['Python', 'TensorFlow', 'Flask', 'Heatmap Visualization', 'Anomaly Detection'],
        features: ['PASS / REVIEW / FAIL output', 'Explainable defect heatmaps', 'Reconstruction error thresholding', 'Unsupervised learning'],
        category: 'Industrial AI | Anomaly Detection',
        githubLink: 'https://github.com/dinraj910/Industrial-Defect-Inspection-CNN-Autoencoder-Explainable-Heatmaps-',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '09',
        title: 'Visual CNN Builder with Code Generation',
        impact: 'Full-stack ML engineering platform for visual neural network design.',
        problem: 'Designing CNN architectures manually requires deep expertise and is error-prone for beginners and rapid prototyping.',
        solution: 'Full-stack ML engineering platform enabling visual, layer-by-layer CNN design with automatic deep learning code generation.',
        model: 'Full-Stack ML Platform',
        techStack: ['React', 'Node.js', 'Python', 'TensorFlow', 'Code Generation', 'Full-Stack'],
        features: ['Visual layer-by-layer design', 'Automatic code generation', 'Deep learning integration', 'Interactive UI'],
        category: 'Full-Stack ML | Developer Tools | AI Platform',
        githubLink: 'https://github.com/dinraj910/Visual-CNN-Builder-With-Code-Generation',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '10',
        title: 'AI-Based UI/UX Quality Inspector (CNN + Explainable AI)',
        impact: 'Explainable AI system to automatically evaluate web and mobile UI quality.',
        problem: 'UI/UX quality assessment is subjective and time-consuming, lacking automated intelligent evaluation tools.',
        solution: 'Built an explainable AI system to automatically evaluate web and mobile UI quality using custom CNNs and weak supervision.',
        model: 'Custom CNN + Explainable AI',
        techStack: ['Python', 'TensorFlow', 'CNN', 'Explainable AI', 'Weak Supervision'],
        features: ['Automated UI evaluation', 'Explainable predictions', 'Custom CNN architecture', 'Weak supervision training'],
        category: 'Computer Vision | Explainable AI | UI Analysis',
        githubLink: 'https://github.com/dinraj910/AI-Based-UI-UX-Quality-Inspector-CNN-Explainable-AI-',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '11',
        title: 'AI-Powered Wildlife Monitoring System (YOLOv8)',
        impact: 'AI-based solution for automated detection of conflict-prone wildlife species.',
        problem: 'Manual wildlife monitoring in conflict zones is dangerous, limited in coverage, and cannot operate 24/7.',
        solution: 'AI-based solution using computer vision to automatically detect and quantify conflict-prone wildlife species from camera-trap or forest-edge images, supporting conservation efforts.',
        model: 'YOLOv8',
        techStack: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'Conservation AI'],
        features: ['Automated species detection', 'Camera-trap image processing', 'Species quantification', 'Conservation support'],
        category: 'Computer Vision | Wildlife AI | Conservation',
        githubLink: 'https://github.com/dinraj910/AI-powered-wildlife-monitoring-system-using-YOLOv8',
        image: 'https://weboccult.com/wp-content/uploads/2025/03/Wildlife-Monitoring-2.png',
    },
    {
        number: '12',
        title: 'AI Real-Time Face Emotion Detection',
        impact: 'Real-time facial emotion recognition achieving impressive accuracy on 35,000+ images.',
        problem: 'Understanding human emotions in real-time from facial expressions enables better human-computer interaction.',
        solution: 'Built with advanced Convolutional Neural Networks and trained on the comprehensive FER2013 dataset containing over 35,000 labeled facial images for real-time emotion detection.',
        model: 'Custom CNN (FER2013)',
        techStack: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Real-Time Inference'],
        features: ['Real-time detection', '35,000+ training images', 'Multi-emotion classification', 'Live webcam support'],
        category: 'Computer Vision | Emotion AI | Real-Time Detection',
        githubLink: 'https://github.com/dinraj910/AI-Real-time-Face-Emotion-Detection',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
    {
        number: '13',
        title: 'Fake News Detection using Bidirectional LSTM',
        impact: 'Bidirectional LSTM system trained on WELFake dataset for news classification.',
        problem: 'Misinformation spreads rapidly online, and manual fact-checking cannot keep pace with the volume of published content.',
        solution: 'Fake News Detection system using a Bidirectional LSTM (TensorFlow/Keras) trained on the WELFake dataset, treating long-form news classification as a Many-to-One sequence task.',
        model: 'Bidirectional LSTM',
        techStack: ['Python', 'TensorFlow', 'Keras', 'Bi-LSTM', 'NLP', 'WELFake Dataset'],
        features: ['Bidirectional sequence modeling', 'WELFake dataset training', 'Many-to-One classification', 'Production-ready'],
        category: 'NLP | Fake News Detection | Deep Learning',
        githubLink: 'https://github.com/dinraj910/Fake-News-Detection-using-Bidirectional-LSTM',
        image: 'https://www.keele.ac.uk/about/news/2025/january/artificial-intelligence/fake-news-detector-960.jpg',
    },
];

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="projects-header reveal">
                    <span className="section-label">Flagship Projects</span>
                    <h2 className="section-title">Production-Grade AI Systems</h2>
                    <p className="section-subtitle">
                        Each project represents a complete system — from problem analysis to deployed solution.
                    </p>
                </div>

                {projects.map((project, idx) => (
                    <div className="project-card reveal" key={idx}>
                        <div className="project-info">
                            <span className="project-number">Project {project.number}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-impact">{project.impact}</p>

                            <p className="project-section-title">Problem</p>
                            <p className="project-text">{project.problem}</p>

                            <p className="project-section-title">Solution</p>
                            <p className="project-text">{project.solution}</p>

                            {project.model && (
                                <>
                                    <p className="project-section-title">Model</p>
                                    <p className="project-text">{project.model}</p>
                                </>
                            )}

                            <p className="project-section-title">Tech Stack</p>
                            <div className="project-tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <span className="tech-tag" key={i}>{tech}</span>
                                ))}
                            </div>

                            <p className="project-section-title">Key Features</p>
                            <ul className="project-features">
                                {project.features.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))}
                            </ul>

                            <span className="project-category">{project.category}</span>

                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                    View Repository
                                </a>
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="project-image-overlay" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
