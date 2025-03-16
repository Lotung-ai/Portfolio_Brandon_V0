import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ProjectDetails from "./pages/projects/ProjectDetails";
import Contact from "./pages/Contact";
import "./styles/App.css";

const AnimatedRoutes = () => {
    const location = useLocation();
    const isProjectDetailsPage = location.pathname.startsWith("/projects/"); // Vérifie si on est sur un projet

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
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
            <Navbar />
            <Sidebar />
            <AnimatedRoutes />
        </Router>
    );
};

export default App;
