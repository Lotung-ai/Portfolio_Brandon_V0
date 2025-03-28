import loadImages from "../utils/imageLoader"; // Import du loader

const projects = [
    {
        id: "projet-1",
        title: "API Restful",
        technologie: "Technologie : C#, ASP.NET, Identity, JwT.token, Swagger Github: Voir le projet",
        achitecture: "Architecture : MVC pour implémenter facilement des views par la suite.",
        description: "Description : SnowTricks est un projet Symfony visant à créer une communauté en ligne dédiée aux passionnés de snowboard. Cette plateforme permet aux utilisateurs de partager des vidéos et des photos de leurs figures.",
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
