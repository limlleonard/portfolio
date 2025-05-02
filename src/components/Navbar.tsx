import "./Navbar.css";
import { useTranslation } from "react-i18next";
function Navbar() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };
    return (
        <nav id="navbar" className="navbar">
            <a href="#welcome-section">{t("welcome")}</a>
            <a href="#projects">{t("projects")}</a>
            <a href="#cv">CV</a>
            <a href="#contact">{t("contact")}</a>
            <select
                name="select-lang"
                id="select-lang"
                onChange={changeLanguage}
                value={i18n.language}
            >
                <option value="de">DE</option>
                <option value="en">EN</option>
            </select>
        </nav>
    );
}

export default Navbar;
