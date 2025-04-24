import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/home.css";
import loadImages from "../utils/imageLoader"; // Importe la fonction

const homeImages = loadImages("home"); // Charge uniquement les images du dossier "home"

const Home = () => {
    const { t } = useTranslation();

    const [showBubblePC, setShowBubblePC] = useState(false); 
    const [showBubbleCoffee, setShowBubbleCoffee] = useState(false);
    const [showBubblePhone, setShowBubblePhone] = useState(false); 

    const [isCoffeeClicked, setIsCoffeeClicked] = useState(false);
    const [isPCClicked, setIsPCClicked] = useState(false);
    const [isPhoneClicked, setIsPhoneClicked] = useState(false);

    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="home"
        >
            <div className="image-wrapper">
                <img
                    src={homeImages["back.jpg"]}
                    alt="Back"
                    className="background-image" />
                <h2 className="title">{t('homeTitle')}</h2>
                <p className="text">{t('homeText')}</p>
                <motion.img
                    src={isCoffeeClicked ? homeImages["coffee_out.png"] : homeImages["coffee.png"]}
                    alt="Coffee"
                    className="coffee-image"
                    animate={{ x: 0, y: 0 }}
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    onHoverStart={() => setShowBubbleCoffee(true)}
                    onHoverEnd={() => setShowBubbleCoffee(false)}
                    onClick={() => {
                        setIsCoffeeClicked(true); // Change l'image
                        setTimeout(() => navigate("/aboutme"), 500); // Navigue après un court délai
                    }}
                />
                <motion.div
                    className="dialogue-coffee-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: showBubbleCoffee ? 1 : 0, scale: showBubbleCoffee ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img
                        src={homeImages["dialogue_coffee.png"]}
                        alt="Dialogue_bubble_coffee"
                        className="dialogue-coffee"
                    />
                    <p className="dialogue-coffee-text">{t('homeDialogue')}</p>
                </motion.div>
                <motion.img
                    src={isPCClicked ? homeImages["pc_fire.png"] : homeImages["pc.png"]}
                    alt="PC"
                    className="pc-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    onHoverStart={() => setShowBubblePC(true)}
                    onHoverEnd={() => setShowBubblePC(false)}
                    onClick={() => {
                        setIsPCClicked(true); // Change l'image
                        setTimeout(() => navigate("/projects"), 500); // Navigue après un court délai
                    }}
                />                
                <motion.div
                    className="dialogue-pc-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: showBubblePC ? 1 : 0, scale: showBubblePC ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img
                        src={homeImages["dialogue_pc.png"]}
                        alt="Dialogue_bubble_pc"
                        className="dialogue-pc"
                    />
                    <p className="dialogue-pc-text">About my project, click here</p>
                </motion.div>
                <motion.img
                    src={isPhoneClicked ? homeImages["phone_smiling.png"] : homeImages["phone.png"]}
                    alt="Phone"
                    className="phone-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    onHoverStart={() => setShowBubblePhone(true)}
                    onHoverEnd={() => setShowBubblePhone(false)}
                    onClick={() => {
                        setIsPhoneClicked(true); // Change l'image
                        setTimeout(() => navigate("/contact"), 500); // Navigue après un court délai
                    }}
                />
                <motion.div
                    className="dialogue-phone-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: showBubblePhone ? 1 : 0, scale: showBubblePhone ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.img
                        src={homeImages["dialogue_phone.png"]}
                        alt="Dialogue_bubble_phone"
                        className="dialogue-phone"
                    />
                    <p className="dialogue-phone-text">Contact me, click here</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
