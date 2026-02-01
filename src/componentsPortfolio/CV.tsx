import "./CV.css";
import { useTranslation } from "react-i18next";

function CV() {
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const iframeSrc = window.location.origin + "/cv-page";
    // lang === "de"
    //     ? window.location.origin + "/cv-page"
    //     : lang === "en"
    //     ? "./index_en_dev.html"
    //     : "./index_en_dev.html";
    return (
        <section id="cv" className="cv-section">
            <h2 className="projects-section-header">Curriculum Vitae</h2>
            <div className="iframe-wrapper">
                <iframe className="iframe" src={iframeSrc}></iframe>
            </div>
        </section>
    );
}

export default CV;
