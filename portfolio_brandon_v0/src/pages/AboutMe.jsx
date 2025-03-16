import { motion } from "framer-motion";
import "../styles/aboutme.css";
import loadImages from "../assets/utils/imageLoader"; // Charge les images

const aboutMeImages = loadImages("aboutme"); // Charge uniquement les images du dossier "aboutme"

const AboutMe = () => {
    return (
        <motion.div
            className="about-me-container"
            initial={{ backgroundColor: "#4801FF" }}
            animate={{ backgroundColor: "#1A1C32" }} // Changement de couleur de fond progressif
            transition={{ duration: 0.5 }}
        >
            <div className="foggy-overlay"></div>

            <motion.div
                className="image-text-section"
                initial={{ x: "-30%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2 }}
            >

                <img src={aboutMeImages["bande_light.png"]} className="animated-background-image" />
                <h1 className="image-text">About Me</h1>
            </motion.div>

            {/* Photo en haut à gauche */}
            <motion.div className="profile-image-container">
                <motion.img
                    src={aboutMeImages["shinji_profile_image.jpeg"]}
                    alt="Profile"
                    className="profile-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
            </motion.div>


            {/* Description en bas */}
            <div className="description">
                <p>
                    Bonjour<br></br>
                    Je m&apos;appelle Brandon KU <br></br>
                    Je suis développeur fullstack avec une forte spécialisation en backend C#/.NET,
                    tout en ayant de solides compétences en ReactJS pour le frontend

                </p>
                <p> Passionné par le développement et les nouvelles technologies,
                    j’aime apprendre, expérimenter et repousser les limites pour concevoir des applications performantes et utiles.</p>
            </div>
            <div className="contact">
                <h2 className="title-contact">Contact</h2>
                <div className="list-item">
                    <p className="item-contact">Email</p>
                    <p className="item-contact">Linkedin</p>
                    <p className="item-contact">Github</p>
                </div>
            </div>

            <motion.div
                className="image-gallery"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className="content-all">
                    <img src={aboutMeImages["bande_fat.png"]} className="animated-image" />

                    <div className="content">
                        <div className="content-items">
                            <h2 className="title-skills">Technical skills</h2>
                            <div className="gallery-content-skills">
                                <img src={aboutMeImages["Logo_Csharp.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_SQL.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_HTML.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_CSS.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_JS.png"]} className="logo-image" />
                            </div>
                        </div>

                        <div className="content-items">
                            <h2 className="title-tools">Tools</h2>
                            <div className="gallery-content-tools">
                                <img src={aboutMeImages["Logo_VS.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Docker.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_SSMS.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Mongo.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Git.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Github.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Azure.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_PackOffice.png"]} className="logo-image" />
                            </div>
                        </div>
                        <div className="content-items">
                            <h2 className="title-framework">Framework and Library</h2>
                            <div className="gallery-content-framework">
                                <img src={aboutMeImages["Logo_dotNet.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_ASPdotNET.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_EntityFrameWork.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_SQLServer.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_MongoDB.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_ReactJS.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Angular.png"]} className="logo-image" />
                                <img src={aboutMeImages["Logo_Ocelot.png"]} className="logo-image" />
                            </div>
                        </div>
                        <div className="content-language">
                            <h2 className="title-language">Langues</h2>
                            <div className="list-item">
                            <p className="item-language">Français : langue maternelle</p>
                                <p className="item-language">Anglais : B2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
