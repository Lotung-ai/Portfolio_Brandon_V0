import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/components/sidebar.css";
import projects from "../data/ProjectsData";

// Animation du sidebar
const sidebarVariants = {
    hidden: {
        x: "100%", // Cacher complètement à droite
        opacity: 0,
        rotate: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

// Animation des items du menu
const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.2, duration: 0.3 },
        rotateY: -20
    }),
    hover: { 
        scale: 1.1, 
        color: "#4801FF",
        transition: { delay: 0.1, duration: 0.2 },
        rotateY: -10 
    }
};

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (id) => {
        setIsOpen(false); // Ferme le menu
        navigate(`/projects/${id}`); // Redirige vers la page du projet
    };

    return (
        <>
            {/* Bouton d'ouverture/fermeture */}
            <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar avec animation */}
            <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={sidebarVariants}
                className="sidebar"
            >
                <ul className="menu-list">
                    {projects.map((project, index) => (
                        <motion.li
                            key={project.id} // Utilise l'ID du projet comme clé unique
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate={isOpen ? "visible" : "hidden"}
                            whileHover="hover"
                            className="menu-item"
                            onClick={() => handleClick(project.id)}
                        >
                            {project.title} {/* Affiche le titre du projet */}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </>
    );
};

export default Sidebar;
