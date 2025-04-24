import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    hover: { scale: 1.1, color: "#FFF", transition: { delay: 0.1, duration: 0.5 } },
    unhover: { scale: 1, color: "#FFF", transition: { duration: 0 } }
};

const ProjectsPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const translatedProjects = projects.map(project => ({
        ...project,
        title: t(project.titleKey)
    }));

    return (
        <motion.div className="projects-wrapper">
            {/* Image de fond appliquée en arrière-plan après la vidéo */}
            <motion.img
                src={loadImage["background-image-eva.png"]}
                alt="Image de fond"
                className="background-image-eva"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
            />
                <motion.div
                    className="projects-container"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={pageVariants}
                >
                    <h1>{t('pageProjectsTitle')}</h1>
                    <ul className="projects-list">
                        {translatedProjects.map((project, index) => (
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
            
        </motion.div>
    );
};

export default ProjectsPage;
