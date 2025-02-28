import loadImages from "../assets/utils/imageLoader"; // Import du loader

const projects = [
    {
        id: "projet-1",
        title: "Mon Premier Projet",
        description: "SnowTricks est un projet Symfony visant à créer une communauté...",
        image_top: loadImages("projects/project-1")["project1_top.png"], // Chargement via le loader
        image: loadImages("projects/project-1")["project1.png"], // Chargement via le loader
        link: "/projects/Project1"
    },
    {
        id: "projet-2",
        title: "Deuxième Projet",
        description: "Description du projet 2",
        image: loadImages("projects/project-2")["project2.png"], // Chargement via le loader
        link: "/projects/Project2"
    }
];

export default projects;
