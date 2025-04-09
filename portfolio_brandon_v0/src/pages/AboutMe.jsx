import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/aboutme.css";
import loadImages from "../utils/imageLoader";
import DecryptAnimation from "../animations/DecryptAnimation";

const aboutMeImages = loadImages("aboutme");

const AboutMe = () => {

    const { t } = useTranslation();
    const [displayText, setDisplayText] = useState("私");

    useEffect(() => {
        const translatedText = t("pageAboutMeDescription"); // Récupérer la traduction à jour

        DecryptAnimation(translatedText, setDisplayText,4.5);
    }, [t]);

    return (
        <motion.div
            className="about-me-container"
        >
            <motion.h1
                className="introduction-section"
                initial={{ x: "-30%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                {t('pageAboutMeTitle')}
            </motion.h1>

            <motion.div
                className="profile-image-container"
            >
                <motion.img
                    src={aboutMeImages["profil_image_eva.png"]}
                    alt="Photo-Profil-Eva"
                    className="profile-frame"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                />
                <motion.img
                    src={aboutMeImages["shinji_profile_image.jpeg"]}
                    alt="Photo-Profil"
                    className="profile-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <motion.img
                    src={aboutMeImages["profil_image.png"]}
                    alt="Photo-Profil-cadre"
                    className="profile-frame"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <p className="description-text">{displayText}</p>
            </motion.div>

            {/* Section Contact */}
            <motion.div
                className="contact-section"
                initial={{ opacity: 0, x: "-30%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h2 className="title-contact">{t('pageAboutMeContactTitle')}</h2>
                <div className="contact-list">
                    <p className="contact-item">Email</p>
                    <p className="contact-item">Linkedin</p>
                    <p className="contact-item">Github</p>
                </div>
            </motion.div>

            {/* Galerie d'images */}
            <motion.div
                className="image-gallery-section"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={aboutMeImages["background4.png"]} alt="background" className="gallery-background" />
                <div className="gallery-content">                    

                    <div className="gallery-items">
                        <h2 className="title-skills">{t('pageAboutMeTechnicalSkills')}</h2>
                        <div className="gallery-skills">
                            <img src={aboutMeImages["Logo_Csharp.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_SQL.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_HTML.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_CSS.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_JS.png"]} className="logo-image" />
                        </div>
                    </div>

                    <div className="gallery-items">
                        <h2 className="title-tools">{t('pageAboutMeTools')}</h2>
                        <div className="gallery-tools">
                            <img src={aboutMeImages["Logo_VS.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_VSCode.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Docker.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_SSMS.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Git.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Github.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Azure.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_PackOffice.png"]} className="logo-image" />
                        </div>
                    </div>

                    <div className="gallery-items">
                        <h2 className="title-frameworks">{t('pageAboutMeFrameworksAndLibraries')}</h2>
                        <div className="gallery-frameworks">
                            <img src={aboutMeImages["Logo_dotNet.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_ASPdotNET.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_EntityFrameWork.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_SQLServer.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Mongo.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_ReactJS.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Angular.png"]} className="logo-image" />
                            <img src={aboutMeImages["Logo_Ocelot.png"]} className="logo-image" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
