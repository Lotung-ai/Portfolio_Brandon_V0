import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/components/navbar.css";

export default function Navbar() {
    const { t } = useTranslation();

    const [showNav, setShowNav] = useState(true); // Contrôle l'opacité lors du scroll
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0); // Pour suivre la position du scroll
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);

    const triggerAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 2000); // même durée que transition
    }

    // Réinitialiser l'animation de translation lors du changement de page
    useEffect(() => {
        setShowNav(true); // Réinitialise l'état de l'opacité
    }, [location.pathname]);

    // Gérer le scroll pour cacher/afficher la navbar avec l'effet d'opacité
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Défilement vers le bas : cache la navbar
                setShowNav(false);
            } else {
                // Défilement vers le haut : affiche la navbar
                setShowNav(true);
            }

            setLastScrollY(currentScrollY); // Met à jour la dernière position du scroll
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // Gérer l'affichage de la navbar après un arrêt du scroll
    useEffect(() => {
        let timeoutId;

        const handleScrollStop = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowNav(true); // Réaffiche la navbar après un délai d'inactivité
            }, 800); // Délai de 500ms avant de réafficher
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
                opacity: showNav ? 1 : 0, // Contrôle l'opacité lors du scroll
                transition: "opacity 0.5s ease-in-out", // Animation de l'opacité
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
                <button
                    className="burger-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`burger-line ${menuOpen ? "open" : ""}`}></span>
                    <span className={`burger-line ${menuOpen ? "open" : ""}`}></span>
                    <span className={`burger-line ${menuOpen ? "open" : ""}`}></span>
                </button>

                <motion.div
                    className="spin-logo"
                    animate={isAnimating ? { rotateY: 180 } : { rotateY: 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                    onClick={() => {
                        if (window.innerWidth <= 768) {
                            setMenuOpen(!menuOpen);
                            triggerAnimation();
                        } else {
                            window.location.href = "/";
                        }
                    }}
                >
                    <div className="navbar-logo" />
                </motion.div>

                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <Link to="/aboutme" onClick={() => setMenuOpen(false)}>{t('navBarItemAboutMe')}</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>{t('navBarItemProjects')}</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>{t('navBarItemContact')}</Link>
                    <LanguageSwitcher />
                </div>

            </motion.div>
        </motion.nav>
    );
}