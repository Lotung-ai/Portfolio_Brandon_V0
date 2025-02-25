import { motion } from "framer-motion";

export default function Projet1() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="min-h-screen bg-gray-900 text-white p-10"
        >
            <h1 className="text-4xl font-bold">Mon Premier Projet</h1>
            <p className="text-gray-400">Description complète du projet...</p>
        </motion.div>
    );
}
