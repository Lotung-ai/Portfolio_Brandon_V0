import { motion } from "framer-motion";
import { useState } from "react";
import { Download, X } from "lucide-react";
import "../styles/components/floating-download-button.css";

// Animation du bouton flottant
const buttonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: -10, transition: { duration: 0.2 } },
    tap: { scale: 0.9 }
};

// Animation du panneau de confirmation (facultatif)
const panelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const FloatingDownloadButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const downloadFile = () => {
        const fileUrl = "CV/CV_Brandon_KU_Backend.pdf";
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = "CV_Brandon_KU_Backend.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            {/* Bouton flottant */}
            <motion.button
                className="floating-download-button"
                onClick={() => setIsOpen(!isOpen)}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
            >
                {isOpen ? <X size={24} /> : <Download size={24} />}
            </motion.button>

            {/* Panneau de confirmation */}
            {isOpen && (
                <motion.div
                    className="download-panel"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={panelVariants}
                >
                    <p>Voulez-vous télécharger mon CV ?</p>
                    <button onClick={downloadFile} className="confirm-download">Oui</button>
                    <button onClick={() => setIsOpen(false)} className="cancel-download">Non</button>
                </motion.div>
            )}
        </>
    );
};

export default FloatingDownloadButton;
