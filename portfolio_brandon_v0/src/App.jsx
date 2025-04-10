import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingDownloadButton from "./components/FloatingDownloadButton";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import "./styles/App.css";
import './utils/i18n';
import ScrollToTop from "./utils/ScrollToTop";

const AnimatedRoutes = () => {
    const location = useLocation();
    const isProjectDetailsPage = location.pathname.startsWith("/projects/"); // Vérifie si on est sur un projet

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
            {/* Affiche le footer sauf pour les pages projet */}
            {!isProjectDetailsPage && <Footer />}
        </>
    );
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <FloatingDownloadButton />
            <AnimatedRoutes />
        </Router>
    );
};

export default App;
