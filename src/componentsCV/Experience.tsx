import "./Experience.css";
import { useTranslation } from "react-i18next";

function Experience() {
    const { t } = useTranslation("cv");
    return (
        <div className="right1 erfahrungen">
            <div className="erfahrung">
                <h3>
                    <span className="stelle">Technology Consultant</span>
                    <span className="arbeitgeber">
                        BearingPoint GmbH, Berlin
                    </span>
                </h3>
                <span className="zeit">05/2022 - 11/2024</span>
                <div className="project">
                    <p className="project-name">Generative AI Tool</p>
                    <ul>
                        <li>{t("experience.genai-scrap")}</li>
                        <li>{t("experience.genai-llm")}</li>
                        <li>{t("experience.genai-flask")}</li>
                    </ul>
                </div>
                <div className="project">
                    <p className="project-name">{t("experience.ppt-title")}</p>
                    <ul>
                        <li>{t("experience.ppt-app")}</li>
                    </ul>
                </div>
                <div className="project">
                    <p className="project-name">{t("experience.aml-title")}</p>
                    <ul>
                        <li>{t("experience.aml-kmeans")}</li>
                        <li>{t("experience.aml-clean")}</li>
                        <li>{t("experience.aml-static")}</li>
                        <li>{t("experience.aml-xgboost")}</li>
                    </ul>
                </div>
                <div className="project">
                    <p className="project-name">CodeOrigin</p>
                    <ul>
                        <li>{t("experience.codeorigin")}</li>
                    </ul>
                </div>
            </div>
            <div className="erfahrung">
                <h3>
                    <span className="stelle">{t("experience.teacher")}</span>
                    <span className="arbeitgeber">
                        Freie Waldorfschule Wolfsburg
                    </span>
                </h3>
                <span className="zeit">02/2021 - 04/2022</span>
                <div>
                    <ul>
                        <li>{t("experience.teacher-pygame")}</li>
                    </ul>
                </div>
            </div>
            <div className="erfahrung">
                <h3>
                    <span className="stelle">{t("experience.teacher")}</span>
                    <span className="arbeitgeber">Freie Schule Prerow</span>
                </h3>
                <span className="zeit">08/2020 - 01/2021</span>
            </div>
            <br />
            <div className="erfahrung">
                <h3>
                    <span className="stelle">{t("experience.researcher")}</span>
                    <span className="arbeitgeber">{t("experience.uni")}</span>
                </h3>
                <span className="zeit">04/2014 - 03/2020</span>
                <div>
                    <p className="project-name">{t("experience.droplet")}</p>
                    <ul>
                        <li>{t("experience.droplet-image")}</li>
                        <li>{t("experience.droplet-static")}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
