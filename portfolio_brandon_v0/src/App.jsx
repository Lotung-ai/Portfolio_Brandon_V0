import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/projects/ProjectDetails";
import "./styles/App.css";

const AnimatedRoutes = () => {
    const location = useLocation();
    const isProjectDetailsPage = location.pathname.startsWith("/project/"); // Vérifie si on est sur un projet

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Routes>
            </AnimatePresence>
            {/* Applique l'effet seulement si on est sur un ProjectDetails */}
            <Footer fadeEffect={isProjectDetailsPage} />
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
