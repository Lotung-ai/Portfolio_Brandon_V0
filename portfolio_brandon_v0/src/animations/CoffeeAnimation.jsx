import { motion } from "framer-motion";
import "../styles/animations/coffeeanimation.css";
import loadImages from "../assets/utils/imageLoader";

const aboutMeImages = loadImages("animations");

const CoffeeAnimation = () => {
    return (
        <motion.div
            className="coffee-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0, ease: "easeInOut" }}
        >
            <motion.img
                src={aboutMeImages["coffee_drop_2.png"]}
                alt="Coffee pouring"
                className="splash-coffee-image"
                initial={{ y: "-100%" }}
                animate={{ y: "300%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 4, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default CoffeeAnimation;