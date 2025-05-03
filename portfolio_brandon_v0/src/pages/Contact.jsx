import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "../styles/contact.css";
import loadImages from "../utils/imageLoader";

import GallerySection from "../components/GallerySection";

const contactImages = loadImages("contact");

const aboutMeImages = loadImages("aboutme");
const ContactForm = () => {

    const { t } = useTranslation();
    const contactLogos = ["Email", "LinkedIn", "Github"];
    const contactLinks = [import.meta.env.VITE_EMAIL, import.meta.env.VITE_LINKEDIN, import.meta.env.VITE_GITHUB];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Veuillez remplir tous les champs.");
            return;
        }

        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
            .then(
                () => {
                    setStatus("Message envoyé avec succès !");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Erreur lors de l'envoi du message.");
                    console.error("EmailJS Error:", error);
                }
            );
    };

    return (
        <motion.div
            className="contact-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="background-container">
                <motion.img
                    src={contactImages["background.png"]}
                    alt="background"
                    className="background-image-eva"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                />

                <motion.img
                    src={contactImages["image_eye.png"]}
                    alt="eye"
                    className="eye-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                />

                <motion.div
                    className="glow-point"
                    initial={{ opacity: 0 }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0,1, 0.5, 1],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.8
                    }}
                />
            </div>

            <motion.div
                className="contact-form-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {t('pageContactTitle')}
                </motion.h1>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <motion.div
                        className="gallery-section"
                        initial="hidden"
                    >
                        <motion.div>
                            <GallerySection
                                names={contactLogos}
                                imageMap={aboutMeImages}
                                srcKey="Logo_"
                                t={t}
                                hoverEffect={true}
                                textKey=""
                                addLink={true}
                                customLinks={contactLinks}
                            />
                        </motion.div>
                    </motion.div>                   

                    <label>{t('pageContactName')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>{t('pageContactEmail')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label>{t('pageContactMessage')}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

                    <motion.button
                        className="button-send"
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {t('pageContactButtonSend')}
                    </motion.button>
                </motion.form>
            </motion.div>

            {status && (
                <motion.p
                    className="status-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {status}
                </motion.p>
            )}
        </motion.div>
    );
};

export default ContactForm;
