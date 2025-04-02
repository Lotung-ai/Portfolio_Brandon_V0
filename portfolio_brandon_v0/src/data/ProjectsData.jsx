
import loadImages from "../utils/imageLoader"; // Import du loader

const loadImage = loadImages("projects");

const projects = [
    {
        id: "projet-0",
        titleKey: "projects.microservices.title",
        technologieKey: "projects.microservices.technologie",
        architectureKey: "projects.microservices.architecture",
        descriptionKey: "projects.microservices.description",
        image_top: loadImages("projects/project-1")["project1_top.png"],
        image: loadImages("projects/project-1")["project1.png"],
        link: "/projects/Project1"
    },
    {
        id: "projet-1",
        titleKey: "projects.apiRestful.title",
        technologieKey: "projects.apiRestful.technologie",
        architectureKey: "projects.apiRestful.architecture",
        descriptionKey: "projects.apiRestful.description",
        image_top: loadImage["project1_top.png"], // Chargement via le loader
        image: loadImage["project1.png"], // Chargement via le loader
        link: "/projects/Project1"
    },
    {
        id: "projet-2",
        titleKey: "projects.expressVoiture.title",
        technologieKey: "projects.expressVoiture.technologie",
        architectureKey: "projects.expressVoiture.architecture",
        descriptionKey: "projects.expressVoiture.description",
        image_top: loadImage["project1_top.png"], // Chargement via le loader
        image: loadImage["project1.png"], // Chargement via le loader
        link: "/projects/Project1"
    }
];

export default projects;
