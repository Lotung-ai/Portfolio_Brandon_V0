import { motion } from "framer-motion";
import "../styles/footer.css"; // Import du CSS

const Footer = () => {
    return (
        <motion.footer  
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="footer"
        >
            <div className="footer-container">
                {/* Section de gauche */}
                <div className="footer-left">
                    <h2>VotreSite</h2>
                    <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
                </div>

                {/* Section de droite */}
                <div className="footer-right">
                    <a href="#">Mentions légales</a>
                    <a href="#">Confidentialité</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
