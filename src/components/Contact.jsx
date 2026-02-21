import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/dinrajdinesh564@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    _subject: form.subject,
                    message: form.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        }
    };

    const contactLinks = [
        {
            icon: '📧',
            label: 'Email',
            value: 'dinrajdinesh564@gmail.com',
            href: 'mailto:dinrajdinesh564@gmail.com',
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: 'github.com/dinraj910',
            href: 'https://github.com/dinraj910',
        },
        {
            icon: '🔗',
            label: 'LinkedIn',
            value: 'Dinraj K Dinesh',
            href: 'https://linkedin.com/in/dinraj-k-dinesh-07956b254',
        },
        {
            icon: '🚀',
            label: 'Live Projects',
            value: 'astrosphere.onrender.com',
            href: 'https://astrosphere.onrender.com',
        },
    ];

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <span className="section-label">Get In Touch</span>
                        <h2 className="section-title">Let's Build Something Exceptional</h2>
                        <p className="section-subtitle">
                            Whether it's a production AI system, a research collaboration,
                            or a full-stack project — I'm ready to engineer it.
                        </p>

                        <div className="contact-links">
                            {contactLinks.map((link, i) => (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link-item"
                                    key={i}
                                >
                                    <div className="contact-link-icon">{link.icon}</div>
                                    <div className="contact-link-text">
                                        <div className="contact-link-label">{link.label}</div>
                                        <div className="contact-link-value">{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>


                    </div>

                    <div className="contact-form reveal">
                        <h3>Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-subject">Subject</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    placeholder="Project collaboration / Inquiry"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-message">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="form-submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message →'}
                            </button>

                            {status === 'success' && (
                                <div className="form-status success">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-status error">
                                    Something went wrong. Please email me directly at dinrajdinesh564@gmail.com
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
