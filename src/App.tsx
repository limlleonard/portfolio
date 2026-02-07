import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import "./App.css";
import Portfolio from "./componentsPortfolio/Portfolio";
import CV from "./componentsCV/CV";
function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            {/* <nav className="p-4">
                <Link to="/" className="mr-4">
                    Portfolio
                </Link>
                <Link to="/page-two">Page Two</Link>
            </nav> */}
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/cv-page" element={<CV />} />
            </Routes>
        </Router>
    );
}

export default App;
