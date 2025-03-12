import { motion, useInView } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import projects from "../../data/ProjectsData";
import "../../styles/projectdetails.css";
import Footer from "../../components/Footer";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: i * 0.2 } // Décalage en cascade
    })
};

const fadeInContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 } // Effet de cascade
    }
};

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const contentRef = useRef(null);
    const imageSmallRef = useRef(null);

    const contentInView = useInView(contentRef, { once: true, margin: "-150px 0px" });
    const imageSmallInView = useInView(imageSmallRef, { once: true, margin: "-100px 0px" });

    const project = projects.find((p) => p.id === id);
    if (!project) return <h2>Projet non trouvé</h2>;

    return (
        <div className="project-details">
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
                    variants={fadeInDown}
                />
                <div className="project-details">
                    {/* Contenu de la page */}
                    <Footer fadeEffect={true} />
                </div>
                <motion.h2
                    className="project-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                >
                    {project.title}
                </motion.h2>
            </div>

            {/* Conteneur texte avec animation en cascade */}
            <motion.div
                ref={contentRef}
                className="text-container"
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={fadeInContainer} // Stagger effect
            >
                <motion.div className="text-box" custom={0} variants={fadeInUp}>
                    {project.technologie}
                </motion.div>

                <motion.div className="text-box" custom={1} variants={fadeInUp}>
                    {project.achitecture}
                </motion.div>

                <motion.div className="text-box full-width" custom={2} variants={fadeInUp}>
                    {project.description}
                </motion.div>
            </motion.div>

            {/* Deuxième image */}
            <motion.img
                ref={imageSmallRef}
                src={project.image}
                alt={project.title}
                className="project-image-small"
                initial="hidden"
                animate={imageSmallInView ? "visible" : "hidden"}
                variants={fadeInUp}
                custom={3}
            />
        </div>
    );
};

export default ProjectDetails;
