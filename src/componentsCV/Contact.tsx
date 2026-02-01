import "./Contact.css";
import { useTranslation } from "react-i18next";
import { CVContactData } from "../assets/CVContactData";
function Contact() {
    const { t, i18n } = useTranslation("cv");
    return (
        <div className="ctn-ul contact">
            <h3 className="title">{t("contact")}</h3>
            {/* <p>{i18n.language}</p> */}
            <ul>
                {CVContactData.map((item, index) => (
                    <li key={index}>
                        <span className="icon">
                            <i className={item.icon} aria-hidden="true"></i>
                        </span>
                        {item.isLink ? (
                            <a href={item.href} target="_blank">
                                {item.label}
                            </a>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contact;

{
    /* <li>
<span className="icon">
    <i className="fa fa-phone" aria-hidden="true"></i>
</span>
<span className="text">+49 176 6711 5852</span>
</li>
<li>
<span className="icon">
    <i className="fa fa-envelope-o" aria-hidden="true"></i>
</span>
<span className="text">limlleonard@gmail.com</span>
</li>
<li>
<span className="icon">
    <i
        className="fa fa-internet-explorer"
        aria-hidden="true"
    ></i>
</span>
<a
    href="https://limlleonard.github.io/portfolio"
    className="text"
    target="_blank"
>
    Portfolio
</a>
</li>
<li>
<span className="icon">
    <i className="fa fa-github" aria-hidden="true"></i>
</span>
<a
    href="https://github.com/limlleonard"
    className="text"
    target="_blank"
>
    https://github.com/limlleonard
</a>
</li>
<li>
<span className="icon">
    <i className="fa fa-linkedin" aria-hidden="true"></i>
</span>
<a
    href="https://www.linkedin.com/in/menglin-li0/"
    className="text"
    target="_blank"
>
    LinkedIn
</a>
<span className="text"></span>
</li>
<li>
<span className="icon">
    <i className="fa fa-map-marker" aria-hidden="true"></i>
</span>
<span className="text">Berlin</span>
</li> */
}
