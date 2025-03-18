import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/components/navbar.css";

export default function Navbar() {
    const [showNav, setShowNav] = useState(true); // Contr�le l'opacit� lors du scroll
    const [lastScrollY, setLastScrollY] = useState(0); // Pour suivre la position du scroll
    const location = useLocation();

    // R�initialiser l'animation de translation lors du changement de page
    useEffect(() => {
        setShowNav(true); // R�initialise l'�tat de l'opacit�
    }, [location.pathname]);

    // G�rer le scroll pour cacher/afficher la navbar avec l'effet d'opacit�
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // D�filement vers le bas : cache la navbar
                setShowNav(false);
            } else {
                // D�filement vers le haut : affiche la navbar
                setShowNav(true);
            }

            setLastScrollY(currentScrollY); // Met � jour la derni�re position du scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // G�rer l'affichage de la navbar apr�s un arr�t du scroll
    useEffect(() => {
        let timeoutId;

        const handleScrollStop = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowNav(true); // R�affiche la navbar apr�s un d�lai d'inactivit�
            }, 800); // D�lai de 500ms avant de r�afficher
        };

        window.addEventListener("scroll", handleScrollStop);

        return () => {
            window.removeEventListener("scroll", handleScrollStop);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <motion.nav
            initial={{ width: 0 }} // Animation de translation initiale
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="navbar"
            style={{
                opacity: showNav ? 1 : 0, // Contr�le l'opacit� lors du scroll
                transition: "opacity 0.5s ease-in-out", // Animation de l'opacit�
            }}
        >
            {/* Contenu de la Navbar */}
            <motion.div
                initial={{ opacity: 0, x: -20 }} // Animation de translation du contenu
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="navbar-content"
            >
                <Link to="/" className="spin-logo">
                    <div className="navbar-logo" />
                </Link>
                <div className="menu">
                    <Link to="/aboutme">About me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </motion.div>
        </motion.nav>
    );
}