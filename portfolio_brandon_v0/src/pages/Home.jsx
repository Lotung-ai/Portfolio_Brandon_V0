import projects from "../data/ProjectsData";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-10">
            <h1 className="text-4xl font-bold text-center mb-10">Mes Projets</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-5 rounded-xl">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <p className="text-gray-400">{project.description}</p>
                        <Link to={project.link} className="text-blue-400">Voir plus</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
