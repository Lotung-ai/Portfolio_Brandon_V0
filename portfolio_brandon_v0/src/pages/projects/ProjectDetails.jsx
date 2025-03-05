import { motion, useInView } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import projects from "../../data/ProjectsData";
import "../../styles/projectdetails.css";

// Variants pour l'apparition rapide
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Références pour l'animation au scroll
    const contentRef = useRef(null);
    const imageSmallRef = useRef(null);

    const contentInView = useInView(contentRef, { once: true });
    const imageSmallInView = useInView(imageSmallRef, { once: true });

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <h2>Projet non trouvé</h2>;
    }

    return (
        <motion.div className="project-details">
            {/* Image principale et titre */}
            <div className="image-container">
                <motion.button
                    onClick={() => navigate("/")}
                    className="back-button"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.8)", transition: { duration: 0.2 } }}
                >
                    <motion.div whileHover={{ x: -5, transition: { duration: 0.2 } }}>←</motion.div>
                </motion.button>

                <motion.img
                    src={project.image_top}
                    alt={project.title}
                    className="project-image"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                />

                <motion.h2
                    className="project-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                >
                    {project.title}
                </motion.h2>
            </div>

            {/* Texte (apparaît plus vite en scrollant) */}
            <motion.div
                ref={contentRef}
                className="text-container"
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={{ visible: { transition: { duration: 0.3 } } }} // Animations immédiates
            >
                <motion.div className="text-box" variants={fadeInUp}>{project.technologie}</motion.div>
                <motion.div className="text-box" variants={fadeInUp}>{project.achitecture}</motion.div>
                <motion.div className="text-box full-width" variants={fadeInUp}>{project.description}</motion.div>
            </motion.div>

            {/* Deuxième image (apparaît plus rapidement) */}
            <motion.img
                ref={imageSmallRef}
                src={project.image}
                alt={project.title}
                className="project-image-small"
                initial="hidden"
                animate={imageSmallInView ? "visible" : "hidden"}
                variants={fadeInUp}
            />
        </motion.div>
    );
};

export default ProjectDetails;
