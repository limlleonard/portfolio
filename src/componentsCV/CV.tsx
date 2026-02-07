import "./CV.css";
import { useTranslation } from "react-i18next";
import Photo from "./Photo";
import Contact from "./Contact";
import Education from "./Education";
import Language from "./Language";
import Skills from "./Skills";
import Experience from "./Experience";
function CV() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    const { i18n } = useTranslation();
    if (lang) {
        i18n.changeLanguage(lang);
    }
    const { t } = useTranslation("cv");
    return (
        <>
            <div className="page" id="page1">
                <div className="left">
                    <Photo />
                    <div className="left1">
                        <Contact />
                        <Education />
                        <Language />
                        <div className="ctn-ul hobby">
                            <h3 className="title">Hobby</h3>
                            <span>{t("hobby")}</span>
                        </div>
                    </div>
                </div>
                <div className="right" id="right0">
                    <h2 className="title2">{t("skills")}</h2>
                    <Skills />
                    <h2 className="title2">{t("experience.title")}</h2>
                    <Experience />
                </div>
            </div>
        </>
    );
}

export default CV;
