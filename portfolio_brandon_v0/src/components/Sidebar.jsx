import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes pour ouvrir/fermer

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Bouton pour ouvrir/fermer le menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white bg-blue-600 rounded-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Menu latéral animé */}
            <motion.div
                initial={{ x: -250, opacity: 0 }} // Position cachée
                animate={{ x: isOpen ? 0 : -250, opacity: isOpen ? 1 : 0 }} // Apparition
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-64 h-screen bg-gray-800 text-white p-4"
            >
                <ul className="space-y-4">
                    <li className="hover:text-blue-400 cursor-pointer">🏠 Accueil</li>
                    <li className="hover:text-blue-400 cursor-pointer">💼 Projets</li>
                    <li className="hover:text-blue-400 cursor-pointer">📄 À propos</li>
                    <li className="hover:text-blue-400 cursor-pointer">📞 Contact</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Sidebar;
