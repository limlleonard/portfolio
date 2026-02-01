import "./Education.css";
import { useTranslation } from "react-i18next";

function Education() {
    const { t } = useTranslation("cv");
    return (
        <div className="ctn-ul bildung">
            <h3 className="title">{t("education.title")}</h3>
            <ul>
                <li>
                    <h5>04/2014 - 12/2019</h5>
                    <h4>{t("education.doctor")}</h4>
                    <h4>{t("education.doctor-uni")}</h4>
                </li>
                <li>
                    <h5>09/2011 - 03/2014</h5>
                    <h4>Master in Biomedical Engineering</h4>
                    <h4>Beijing Institute of Technology, China</h4>
                </li>
                <li>
                    <h5>09/2007 - 07/2011</h5>
                    <h4>Bachelor in Biomedical Engineering</h4>
                    <h4>Tianjin Medical University, China</h4>
                </li>
            </ul>
        </div>
    );
}

export default Education;
