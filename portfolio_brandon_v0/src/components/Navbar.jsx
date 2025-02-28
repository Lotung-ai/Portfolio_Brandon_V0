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
            {/* Triangle à droite */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
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
                <Link to="/" className="logo">Logo</Link>
                <div className="menu">
                    <Link to="/About">About me</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Project">Project</Link>
                </div>
                <Link to="/Contact" className="contact">Contact</Link>
            </motion.div>
        </motion.nav>
    );
}
