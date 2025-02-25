import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projet1 from "./pages/projects/Project1";
import Projet2 from "./pages/projects/Project2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/Project1" element={<Projet1 />} />
                <Route path="/projects/Project2" element={<Projet2 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
