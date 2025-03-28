import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "../styles/components/footer.css";

const Footer = ({ fadeEffect, isFixed }) => {

    const { t } = useTranslation();
    const { scrollYProgress } = useScroll();

    // Gère l'opacité en fonction du scroll
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [1, 0, 0, 1]);

    // Détecte si on est en haut ou en bas de la page
    const [isTop, setIsTop] = useState(true);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            setIsTop(scrollY < 10); // Si l'utilisateur est tout en haut
            setIsBottom(scrollY + windowHeight >= pageHeight - 10); // Si l'utilisateur est en bas
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Applique la classe conditionnelle pour fixer ou laisser relatif
    const footerClass = isFixed ? "footer fixed-footer" : "footer relative-footer";

    return (
        <motion.footer
            className={footerClass}
            style={
                fadeEffect
                    ? {
                        opacity: isTop || isBottom ? 1 : opacity.get(), // Visible en haut et en bas
                    }
                    : {}
            }
        >
            <div className="footer-container">
                <div className="footer-left">
                    <h2>{t('footerTitle')}</h2>
                    <p>&copy; {new Date().getFullYear()} {t('footerCopyright')}</p>
                </div>
                <div className="footer-right">
                    <a href="#">{t('footerAboutMe')}</a>
                    <a href="#">{t('footerProjects')}</a>
                    <a href="#">{t('footerContact')}</a>
                </div>
            </div>
        </motion.footer>
    );
};

// Ajoute la validation des props pour éviter l'erreur
Footer.propTypes = {
    fadeEffect: PropTypes.bool,
    isFixed: PropTypes.bool,
};

// Définit une valeur par défaut (false) si `fadeEffect` n'est pas fourni
Footer.defaultProps = {
    fadeEffect: false,
    isFixed: false, // Par défaut, le footer est relatif
};

export default Footer;
