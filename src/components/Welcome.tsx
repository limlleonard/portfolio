import "./Welcome.css";
import { useTranslation } from "react-i18next";

function Welcome() {
    const { t } = useTranslation();
    return (
        <section id="welcome-section" className="welcome-section">
            <div className="container-img">
                <img
                    className="welcome-image"
                    src="./img/you_want_me.png?raw=true"
                    alt="image welcome"
                />
                <h2 id="ywm">You want me</h2>
            </div>
            <h1>{t("hello")}</h1>
            <p id="ds">{t("developer")}</p>
        </section>
    );
}

export default Welcome;
