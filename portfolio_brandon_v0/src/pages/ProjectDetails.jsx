import { motion, useInView } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import projects from "../data/ProjectsData";
import "../styles/projectdetails.css";
import Footer from "../components/Footer";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: i * 0.2 }
    })
};

const fadeInContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const contentRef = useRef(null);
    const imageSmallRef = useRef(null);

    const contentInView = useInView(contentRef, { once: true, margin: "-150px 0px" });
    const imageSmallInView = useInView(imageSmallRef, { once: true, margin: "-100px 0px" });

    // Convertir l'ID en nombre pour éviter les erreurs
    const project = projects.find((p) => p.id.toString() === id);
    if (!project) return <h2>{t("projectNotFound")}</h2>;

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
                    alt={t(project.titleKey)}
                    className="project-image"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                />

                {/* Contenu de la page */}
                <Footer fadeEffect={true} isFixed={true} />

                <motion.h2
                    className="project-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                >
                    {t(project.titleKey)}
                </motion.h2>
            </div>

            {/* Conteneur texte avec animation en cascade */}
            <motion.div
                ref={contentRef}
                className="text-container"
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={fadeInContainer}
            >
                <motion.div className="text-box" custom={0} variants={fadeInUp}>
                    {t(project.technologieKey)}
                </motion.div>

                <motion.div className="text-box" custom={1} variants={fadeInUp}>
                    {t(project.architectureKey)}
                </motion.div>

                <motion.div className="text-box full-width" custom={2} variants={fadeInUp}>
                    {t(project.descriptionKey)}
                </motion.div>
            </motion.div>

            {/* Deuxième image */}
            <motion.img
                ref={imageSmallRef}
                src={project.image}
                alt={t(project.titleKey)}
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
