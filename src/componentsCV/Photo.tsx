import "./Photo.css";
import foto from "@img/foto1.png"
function Photo() {
    return (
        <div className="ctn-foto-name">
            <div className="ctn-foto1">
                <img src={foto} alt="Foto" />
            </div>
            <h2>
                Dr. Menglin Li
                <br />
                <span>Technology Consultant</span>
            </h2>
        </div>
    );
}

export default Photo;
