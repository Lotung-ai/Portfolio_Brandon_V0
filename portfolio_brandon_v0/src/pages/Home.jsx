import { motion } from "framer-motion";
import "../styles/App.css";
import loadImages from "../assets/utils/imageLoader"; // Importe la fonction

const homeImages = loadImages("home"); // Charge uniquement les images du dossier "home"

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="home"
        >
            <h1>Bienvenue sur mon portfolio</h1>
            <p>Sélectionnez un projet dans le menu.</p>

            <div className="image-wrapper">
                <img src={homeImages["back.jpg"]} alt="Back" className="background-image" />
                <motion.img
                    src={homeImages["coffee.png"]}
                    alt="Coffee"
                    className="coffee-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                />
                <motion.img
                    src={homeImages["pc.png"]}
                    alt="PC"
                    className="pc-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                />
            </div>
        </motion.div>
    );
};

export default Home;
