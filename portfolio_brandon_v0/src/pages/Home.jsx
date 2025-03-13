import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import loadImages from "../assets/utils/imageLoader"; // Importe la fonction

const homeImages = loadImages("home"); // Charge uniquement les images du dossier "home"

const Home = () => {
    const [showBubblePC, setShowBubblePC] = useState(false); 
    const [showBubbleCoffee, setShowBubbleCoffee] = useState(false);
    const [showBubblePhone, setShowBubblePhone] = useState(false); 

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
                <h1 className="title">Welcome in my portfolio</h1>
                <p className="text">Select an item on the menu</p>
                <motion.img
                    src={homeImages["coffee.png"]}
                    alt="Coffee"
                    className="coffee-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    onHoverStart={() => setShowBubbleCoffee(true)}
                    onHoverEnd={() => setShowBubbleCoffee(false)}
                    onClick={() => navigate("/aboutme")}
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
                    <p className="dialogue-coffee-text">About me, click here</p>
                </motion.div>
                <motion.img
                    src={homeImages["pc.png"]}
                    alt="PC"
                    className="pc-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    onHoverStart={() => setShowBubblePC(true)}
                    onHoverEnd={() => setShowBubblePC(false)}
                    onClick={() => navigate("/projects")}
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
                    src={homeImages["phone.png"]}
                    alt="Phone"
                    className="phone-image"
                    whileHover={{ y: 10 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    onHoverStart={() => setShowBubblePhone(true)}
                    onHoverEnd={() => setShowBubblePhone(false)}
                    onClick={() => navigate("/contact")}
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
