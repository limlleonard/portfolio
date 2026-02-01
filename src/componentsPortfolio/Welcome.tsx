import "./Welcome.css";
import { useTranslation } from "react-i18next";

function Welcome() {
    const { t } = useTranslation("portfolio");
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
            <h1>{t("welcome.hello")}</h1>
            <h2 id="ds">{t("welcome.developer")}</h2>
        </section>
    );
}

export default Welcome;
