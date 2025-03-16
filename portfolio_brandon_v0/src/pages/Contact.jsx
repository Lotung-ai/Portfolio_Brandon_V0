import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // Pour afficher le message de confirmation

    // Gère le changement des champs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Envoi du formulaire via EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification des champs vides
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Veuillez remplir tous les champs.");
            return;
        }

        // Configuration EmailJS
        emailjs
            .send(
                "YOUR_SERVICE_ID", // Remplace avec ton Service ID EmailJS
                "YOUR_TEMPLATE_ID", // Remplace avec ton Template ID EmailJS
                formData,
                "YOUR_PUBLIC_KEY" // Remplace avec ta clé publique EmailJS
            )
            .then(
                () => {
                    setStatus("Message envoyé avec succès !");
                    setFormData({ name: "", email: "", message: "" }); // Réinitialise le formulaire
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                Contactez-moi
            </motion.h2>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <div className="list-item">
                    <p className="item-contact">Email</p>
                    <p className="item-contact">Linkedin</p>
                    <p className="item-contact">Github</p>
                </div>

                <label>Nom :</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email :</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Message :</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

                <motion.button
                    className="button-send"
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Envoyer
                </motion.button>
            </motion.form>

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
