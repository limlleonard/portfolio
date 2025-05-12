import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="contact-section">
            <h2>{t("together")}</h2>
            <div className="contact-wrapper">
                <a
                    href="https://github.com/limlleonard"
                    target="_blank"
                    className="btn contact-link"
                >
                    <i className="fab fa-github"></i>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/menglin-li0/"
                    target="_blank"
                    className="btn contact-link"
                >
                    <i className="fab fa-linkedin"></i> Linkedin
                </a>
                <a
                    id="btn-email"
                    title="limlleonard@gmail.com"
                    href="E-Mail: limlleonard@gmail.com"
                    className="btn contact-link"
                >
                    <i className="fas fa-at"></i> E-Mail
                </a>
                <a
                    title="Tel: 0176 6711 5852"
                    href="Tel: 0176 6711 5852"
                    className="btn contact-link"
                >
                    <i className="fas fa-mobile-alt"></i>{" "}
                    <span>{t("call")}</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;
