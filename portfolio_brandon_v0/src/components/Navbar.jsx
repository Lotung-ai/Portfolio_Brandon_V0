import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between">
            <Link to="/" className="text-white text-xl">Mon Portfolio</Link>
            <div>
                <Link to="/" className="text-gray-300 mx-3">Accueil</Link>
                <Link to="/about" className="text-gray-300 mx-3">À propos</Link>
                <Link to="/contact" className="text-gray-300 mx-3">Contact</Link>
            </div>
        </nav>
    );
}
