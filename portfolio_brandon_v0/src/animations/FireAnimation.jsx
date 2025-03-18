import { motion } from "framer-motion";
import { useState } from "react";

const images = [
    "src/assets/animations/fire_sprite/fire1.png",
    "src/assets/animations/fire_sprite/fire2.png",
    "src/assets/animations/fire_sprite/fire3.png",
    "src/assets/animations/fire_sprite/fire4.png",
    "src/assets/animations/fire_sprite/fire5.png",
    "src/assets/animations/fire_sprite/fire6.png",
    "src/assets/animations/fire_sprite/fire7.png",
    "src/assets/animations/fire_sprite/fire8.png",
    "src/assets/animations/fire_sprite/fire9.png"
];

const SpriteAnimation = () => {
    const [index, setIndex] = useState(0);

    return (
        <motion.img
            key={index} // Change d’image avec un key unique
            src={images[index]}
            alt="Animation"
            width="50"
            height="50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{
                duration: 0.1
            }}
            onAnimationComplete={() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
            }}
        />
    );
};

export default SpriteAnimation;
