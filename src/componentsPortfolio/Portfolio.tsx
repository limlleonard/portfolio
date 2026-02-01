import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Projects from "./Projects";
import CV from "./CV";
import Contact from "./Contact";
function Portfolio() {
    return (
        <>
            <Navbar />
            <div className="underNavbar">
                <Welcome />
                <Projects />
                <CV />
                <Contact />
            </div>
        </>
    );
}
export default Portfolio;
