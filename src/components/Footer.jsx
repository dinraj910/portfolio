export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        © {new Date().getFullYear()} <span className="accent">Dinraj K Dinesh</span> — Built with precision.
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/dinraj910" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/dinraj-k-dinesh-07956b254" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:dinrajdinesh564@gmail.com">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
