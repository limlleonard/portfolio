import "./CV.css";
import { useTranslation } from "react-i18next";

function CV() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const iframeSrc =
        lang === "de"
            ? "/index_de_dev.html"
            : lang === "en"
            ? "/index_en_dev.html"
            : "/index_en_dev.html";
    return (
        <section id="cv" className="cv-section">
            <h2 className="projects-section-header">Curriculum Vitae</h2>
            <iframe className="page" src={iframeSrc}></iframe>
        </section>
    );
}

export default CV;
