import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation("portfolio");
    return (
        <section id="contact-section" className="contact-section">
            <h2>{t("contact.together")}</h2>
            <div className="contact-wrapper">
                <a
                    href="https://github.com/limlleonard"
                    target="_blank"
                    className="contact-link"
                >
                    <i className="fab fa-github"></i>GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/menglin-li0/"
                    target="_blank"
                    className="contact-link"
                >
                    <i className="fab fa-linkedin"></i>Linkedin
                </a>
                <a
                    href="E-Mail: limlleonard@gmail.com"
                    className="contact-link"
                >
                    <i className="fas fa-at"></i>E-Mail
                </a>
                <a href="Tel: 0176 6711 5852" className="contact-link">
                    <i className="fas fa-mobile-alt"></i>
                    {t("contact.call")}
                </a>
            </div>
        </section>
    );
}

export default Contact;
