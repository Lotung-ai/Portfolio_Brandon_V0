import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/ProjectsData";
import "../../styles/projectdetails.css";

const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
};


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <h2>Projet non trouvé</h2>;
    }

    return (
        <motion.div
            className="project-details"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            <button onClick={() => navigate("/")} className="back-button">
                Retour
            </button>
            <img src={project.image_top} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} className="project-image" />
        </motion.div>
    );
};

export default ProjectDetails;