import "./Language.css";
import { useTranslation } from "react-i18next";

function Language() {
    const { t } = useTranslation("cv");
    return (
        <div className="ctn-ul language">
            <h3 className="title">Sprachkenntnisse</h3>
            <ul>
                <li>
                    <span className="text">{t("language.german")}: </span>
                    <span className="level">C1</span>
                </li>
                <li>
                    <span className="text">{t("language.english")}: </span>
                    <span className="level">C1</span>
                </li>
                <li>
                    <span className="text">{t("language.chinese")}: </span>
                    <span className="level">C2</span>
                </li>
                <li>
                    <span className="text">{t("language.french")}: </span>
                    <span className="level">A2</span>
                </li>
            </ul>
        </div>
    );
}

export default Language;
