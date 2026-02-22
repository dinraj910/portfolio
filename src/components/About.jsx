export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual reveal">
                        <div className="about-image-frame">
                            <div className="about-avatar">

                                <img src="/images/dinraj_myimage.jpg" alt="Dinraj" className="about-avatar-img" />

                            </div>
                            <div className="about-orb about-orb-1" />
                            <div className="about-orb about-orb-2" />
                            <div className="about-orb about-orb-3" />
                        </div>
                        <div className="about-visual-facts">
                            <div className="about-fact">
                                <span className="about-fact-number">80+</span>
                                <span className="about-fact-label">Projects Built</span>
                            </div>
                            <div className="about-fact">
                                <span className="about-fact-number">40+</span>
                                <span className="about-fact-label">Deep Learning Systems</span>
                            </div>
                            <div className="about-fact">
                                <span className="about-fact-number">10+</span>
                                <span className="about-fact-label">Deployed Solutions</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content reveal">
                        <span className="section-label">About Me</span>
                        <h2 className="section-title">
                            Hi, I'm Dinraj —<br />
                            <span className="about-highlight">I build things that think.</span>
                        </h2>
                        <div className="about-paragraphs">
                            <p>
                                I'm an AI Engineer and Full-Stack Developer who loves turning complex ideas
                                into real, working systems. From training deep learning models to deploying
                                web apps people actually use — I enjoy every step of the journey.
                            </p>
                            <p>
                                My work spans computer vision, NLP, predictive analytics, and full-stack
                                development. I've built over 80 projects — from medical imaging classifiers
                                and wildlife monitoring systems to interactive space encyclopedias and
                                real-time emotion detectors.
                            </p>
                            <p>
                                What drives me isn't just the technology — it's the impact. Whether it's
                                helping doctors detect tumors faster, making roads safer with traffic AI,
                                or building tools that other developers can use — I'm always looking for
                                problems worth solving.
                            </p>
                        </div>

                        <div className="about-interests">
                            <div className="about-interest-tag">🧠 Deep Learning</div>
                            <div className="about-interest-tag">🌍 Real-World AI</div>
                            <div className="about-interest-tag">🎨 Clean Design</div>
                            <div className="about-interest-tag">🚀 Building Products</div>
                            <div className="about-interest-tag">📚 Continuous Learning</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
