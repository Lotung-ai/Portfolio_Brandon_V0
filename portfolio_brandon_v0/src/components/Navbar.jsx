import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowNav(false); // Réinitialisation de l'animation lors du changement de page
        setTimeout(() => setShowNav(true), 500);
    }, [location.pathname]);

    return (
        <motion.nav
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="navbar"
        >
            {/* Triangle animé à droite */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="navbar-triangle"
            />

            {/* Contenu de la Navbar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="navbar-content"
            >
                <Link to="/" className="logo">
                    <div className="navbar-logo" />
                </Link>
                <div className="menu">
                    <Link to="/About">About me</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Project">Project</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </motion.div>
        </motion.nav>
    );
}
