import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/projects.css";
import projects from "../data/ProjectsData";
import loadImages from "../utils/imageLoader";

const loadImage = loadImages("projects");

const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.5, duration: 0.5 },
    }),
    hover: { scale: 1.1, color: "#4801FF", transition: { delay: 0.1, duration: 0.5 } },
    unhover: { scale: 1, color: "#000", transition: { duration: 0 } }
};

const ProjectsPage = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(true);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false);
            setTimeout(() => setShowProjects(true), 2300); // Délai avant d'afficher le menu
        }, 5000); // Durée de la vidéo avant de passer à l'image de fond
        return () => clearTimeout(timer);
    }, []);

    const skipAnimation = () => {
        setShowVideo(false);
        setShowProjects(true);
    };

    return (
        <motion.div onClick={skipAnimation} className="projects-wrapper">
            {/* Image de fond appliquée en arrière-plan après la vidéo */}
            <motion.img
                src={loadImage["background-image-eva.png"]}
                alt="Image de fond"
                className="background-image-eva"
                initial={{  opacity: 0 }}
                animate={{  opacity: showVideo ? 0 : 1 }}
                transition={{ duration: 2, ease: "easeOut", delay:0.4 }}
            />

            {/* Phase 1 : Lecture de la vidéo */}
            {showVideo && (
                <div className="animation-container">
                    <motion.video
                        src={loadImage["look_eva.mp4"]}
                        autoPlay
                        playsInline
                        muted
                        className="video-animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        onEnded={() => {
                            setShowVideo(false);
                            setTimeout(() => setShowProjects(true), 1000);
                        }}
                    />
                </div>
            )}

            {/* Phase 3 : Contenu des projets avec animation après la vidéo */}
            {showProjects && (
                <motion.div
                    className="projects-container"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={pageVariants}
                >
                    <h1>{t('pageProjectsTitle')}</h1>
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
                                onClick={() => navigate(`/projects/${project.id}`)}
                            >
                                {project.title}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ProjectsPage;
