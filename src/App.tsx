import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Contact from "./components/Contact";
function App() {
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

export default App;
