import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/projects.css"; // Ajoute un fichier CSS pour le style
import projects from "../data/ProjectsData";

// Animation de la page entière (effet de slide-in comme le sidebar)
const pageVariants = {
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

// Animation des items (mêmes effets que le sidebar)
const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.5, duration: 0.5 },
        rotateY: -20
    }),
    hover: {
        scale: 1.1,
        color: "#4801FF",
        rotateY: -10,
        transition: { delay: 0.1, duration: 0.5 } // Lent sur hover
    },
    unhover: {
        scale: 1,
        color: "#000",
        transition: { duration: 0 }
    }
};

const ProjectsPage = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/projects/${id}`); // Redirection vers les détails du projet
    };

    return (
        <motion.div
            className="projects-container"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={pageVariants}
        >
            <h1>Mes Projets</h1>

            <ul className="projects-list">
                {projects.map((project, index) => (
                    <motion.li
                        key={project.id}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="project-item"
                        onClick={() => handleClick(project.id)}
                    >
                        {project.title}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ProjectsPage;
