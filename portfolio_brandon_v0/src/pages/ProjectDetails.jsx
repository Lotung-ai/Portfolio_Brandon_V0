import { motion, useInView } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import projects from "../data/ProjectsData";
import "../styles/projectdetails.css";
import Footer from "../components/Footer";
import loadImages from "../utils/imageLoader";
import InfoBoxesSection from "../components/InfoBoxSection"

const loadImage = loadImages("projects");

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
    const diagramRef = useRef(null);
    const secondBlockRef = useRef(null);

    const contentInView = useInView(contentRef, { once: true, margin: "-150px 0px" });
    const diagramInView = useInView(diagramRef, { once: true, margin: "-150px 0px" });
    const secondBlockInView = useInView(secondBlockRef, { once: true, margin: "-150px 0px" });


    const project = projects.find((p) => p.id.toString() === id);
    if (!project) return <h2>{t("projectNotFound")}</h2>;

    const potentialTechs = ["Technologie", "Architecture", "Container"];
    const techs = potentialTechs.filter(tech =>
        Object.prototype.hasOwnProperty.call(project, `title${tech}Key`)
    );

    const services = Object.keys(project)
        .filter(key => key.startsWith("titleService"))
        .sort()
        .map(key => key.replace("title", "").replace("Key", ""));

    const challenges = t(project.listChallengeKey, { returnObjects: true });
    const solutions = t(project.listSolutionKey, { returnObjects: true });

    return (
        <div className="project-details">
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
                    className="project-image"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                />

                <Footer fadeEffect={true} isFixed={true} />

                <motion.h2
                    className="project-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                >
                    {t(project.titleKey)}
                </motion.h2>
                <motion.div
                    className="box-intro"
                >
                <motion.p
                    className="project-intro"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                >
                    {t(project.introKey)}
                    </motion.p>
                    <a className="project-link" target="_blank"  href={project.link}>{t(project.linkKey)}</a>
                </motion.div>
            </div>

            <motion.div
                ref={contentRef}
                className="boxes-container"
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={fadeInContainer}
            >              
                <InfoBoxesSection
                    t={t}
                    project={project}
                    srckeys={techs}
                    fadeInUp={fadeInUp}
                    loadImage={loadImage}
                    arrowImageName="fleche.png"
                    arrowClass="fleche"
                />
            </motion.div>
            
            <motion.img
                ref={diagramRef}
                src={project.image_diagram}
                className="project-image-diagram"
                initial="hidden"
                animate={diagramInView ? "visible" : "hidden"}
                variants={fadeInUp}
                custom={3}
            />

            <motion.div
                ref={secondBlockRef}
                className="boxes-container"
                initial="hidden"
                animate={secondBlockInView ? "visible" : "hidden"}
                variants={fadeInContainer}
            >                
                <InfoBoxesSection
                    t={t}
                    project={project}
                    srckeys={services}
                    fadeInUp={fadeInUp}
                />
            </motion.div>
        
            <motion.div
                className="list-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInContainer}
            >
                <motion.h2 className="list-title" variants={fadeInUp}>{t(project.titleChallengeKey) }</motion.h2>
                <ul className="list-challenge">
                    {challenges.map((c, i) => (
                        <motion.li key={i} className="item-challenge" custom={i} variants={fadeInUp}>
                            {c}
                        </motion.li>
                    ))}
                </ul>

                <motion.h2 className="list-title" variants={fadeInUp}>{t(project.titleSolutionKey)}</motion.h2>
                <ul className="list-solution">
                    {solutions.map((s, i) => (
                        <motion.li key={i} className="item-solution" custom={i} variants={fadeInUp}>
                            {s}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

        </div>
    );
};

export default ProjectDetails;
