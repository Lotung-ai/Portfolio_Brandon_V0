﻿import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/aboutme.css";
import loadImages from "../utils/imageLoader";
import DecryptAnimation from "../animations/DecryptAnimation";
import GallerySection from "../components/GallerySection";

const aboutMeImages = loadImages("aboutme");
const logosImages = loadImages("logos");

const AboutMe = () => {
    const { t } = useTranslation();
    const [displayText, setDisplayText] = useState("私");

    const contactLogos = ["Email", "LinkedIn", "Github"];
    const contactLinks = [import.meta.env.VITE_EMAIL, import.meta.env.VITE_LINKEDIN, import.meta.env.VITE_GITHUB];
    const techLogos = ["Csharp", "SQL", "HTML", "CSS", "JS"];
    const tools = ["VS", "VSCode", "Docker", "SSMS", "Git", "Github", "Azure", "PackOffice"];
    const frameworks = ["dotNet", "ASPdotNET", "EntityFrameWork", "SQLServer", "Mongo", "ReactJS", "Angular", "Ocelot"];
    const projects = ["00", "01", "02"];

    useEffect(() => {
        const translatedText = t("pageAboutMeDescription");
        DecryptAnimation(translatedText, setDisplayText, 4.5);
    }, [t]);

    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const gallery1Ref = useRef(null);
    const gallery2Ref = useRef(null);
    const gallery3Ref = useRef(null);
    const projectInView = useInView(projectRef, { once: true, margin: "-100px" });
    const contactInView = useInView(contactRef, { once: true, margin: "-100px" });
    const gallery1InView = useInView(gallery1Ref, { once: true, margin: "-100px" });
    const gallery2InView = useInView(gallery2Ref, { once: true, margin: "-100px" });
    const gallery3InView = useInView(gallery3Ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div className="about-me-container">
            <motion.h1
                className="title-section"
                initial={{ x: "-30%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                {t('pageAboutMeTitle')}
            </motion.h1>

            <motion.div className="profile-image-container">
                <motion.img
                    src={aboutMeImages["profil_image_eva"]}
                    alt="Photo-Profil-Eva"
                    className="profile-frame"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                />
                <motion.img
                    src={aboutMeImages["photo"]}
                    alt="Photo-Profil"
                    className="profile-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <motion.img
                    src={aboutMeImages["profil_image"]}
                    alt="Photo-Profil-cadre"
                    className="profile-frame"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <p className="description-text">{displayText}</p>
            </motion.div>

            <motion.div
                ref={contactRef}
                className="gallery-section"
                variants={containerVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <GallerySection
                        titleKey="pageAboutMeContactTitle"
                        names={contactLogos}
                        imageMap={logosImages}
                        srcKey="Logo_"
                        t={t} 
                        hoverEffect={true}
                        textKey=""
                        addLink={true}
                        customLinks={contactLinks}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                ref={projectRef}
                className="gallery-section"
                variants={containerVariants}
                initial="hidden"
                animate={projectInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <GallerySection
                        titleKey="pageAboutMeTopProject"
                        names={projects}
                        imageMap={aboutMeImages}
                        srcKey="Projet_"
                        t={t}
                        hoverEffect={true}
                        textKey="pageAboutMeTopProject"
                        addLink={true}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                ref={gallery1Ref}
                className="gallery-section"
                variants={containerVariants}
                initial="hidden"
                animate={gallery1InView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <GallerySection
                        titleKey="pageAboutMeTechnicalSkills"
                        names={techLogos}
                        imageMap={logosImages}
                        srcKey="Logo_"
                        t={t} 
                    />
                </motion.div>
                <img src={aboutMeImages["background4"]} alt="background" className="gallery-background" />
            </motion.div>

            <motion.div
                ref={gallery2Ref}
                className="gallery-section"
                variants={containerVariants}
                initial="hidden"
                animate={gallery2InView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <GallerySection
                        titleKey="pageAboutMeTools"
                        names={tools}
                        imageMap={logosImages}
                        srcKey="Logo_"
                        t={t}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                ref={gallery3Ref}
                className="gallery-section"
                variants={containerVariants}
                initial="hidden"
                animate={gallery3InView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants}>
                    <GallerySection
                        titleKey="pageAboutMeFrameworksAndLibraries"
                        names={frameworks}
                        imageMap={logosImages}
                        srcKey="Logo_"
                        t={t} 
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
