
import loadImages from "../utils/imageLoader"; // Import du loader

const loadImage = loadImages("projects");

const projects = [
    {
        id: "project-00",
        titleKey: "projects.microservices.title",
        introKey: "projects.microservices.intro",
        titleTechnologieKey: "projects.microservices.titleTechnologie",
        detailTechnologieKey: "projects.microservices.detailTechnologie",
        titleArchitectureKey: "projects.microservices.titleArchitecture",
        detailArchitectureKey: "projects.microservices.detailArchitecture",
        titleContainerKey: "projects.microservices.titleContainer",
        detailContainerKey: "projects.microservices.detailContainer",
        titleService01Key: "projects.microservices.titleAut",
        detailService01Key: "projects.microservices.detailAut",
        titleService02Key: "projects.microservices.titleFront",
        detailService02Key: "projects.microservices.detailFront",
        titleService03Key: "projects.microservices.titlePatient",
        detailService03Key: "projects.microservices.detailPatient",
        titleService04Key: "projects.microservices.titleNote",
        detailService04Key: "projects.microservices.detailNote",
        titleService05Key: "projects.microservices.titleReport",
        detailService05Key: "projects.microservices.detailReport",
        titleService06Key: "projects.microservices.titleGateway",
        detailService06Key: "projects.microservices.detailGateway",
        titleService07Key: "projects.microservices.titleDocker",
        detailService07Key: "projects.microservices.detailDocker",
        titleChallengeKey: "projects.microservices.titleChallenge",
        listChallengeKey: "projects.microservices.listChallenge",
        titleSolutionKey: "projects.microservices.titleSolution",
        listSolutionKey: "projects.microservices.listSolution",
        linkKey: "projects.microservices.link",
        image_diagram: loadImages("projects/project-1")["diagram.png"],
        image_top: loadImages("projects/project-1")["project1_top.png"],
        image: loadImages("projects/project-1")["project1.png"],
        link: "/projects/Project1"
    },
    {
        id: "project-01",
        titleKey: "projects.expressVoitures.title",
        introKey: "projects.expressVoitures.intro",
        titleTechnologieKey: "projects.expressVoitures.titleTechnologie",
        detailTechnologieKey: "projects.expressVoitures.detailTechnologie",
        titleArchitectureKey: "projects.expressVoitures.titleArchitecture",
        detailArchitectureKey: "projects.expressVoitures.detailArchitecture",
        titleContainerKey: "projects.expressVoitures.titleContainer",
        detailContainerKey: "projects.expressVoitures.detailContainer",
        titleService01Key: "projects.expressVoitures.titleAut",
        detailService01Key: "projects.expressVoitures.detailAut",
        titleService02Key: "projects.expressVoitures.titleFront",
        detailService02Key: "projects.expressVoitures.detailFront",
        titleService03Key: "projects.expressVoitures.titleGestionVehicule",
        detailService03Key: "projects.expressVoitures.detailGestionVehicule",
        titleService04Key: "projects.expressVoitures.titleGestionVente",
        detailService04Key: "projects.expressVoitures.detailGestionVente",
        titleService05Key: "projects.expressVoitures.titleSecurity",
        detailService05Key: "projects.expressVoitures.detailSecurity",
        titleService06Key: "projects.expressVoitures.titleAzure",
        detailService06Key: "projects.expressVoitures.detailAzure",
        titleService07Key: "projects.expressVoitures.titleUI",
        detailService07Key: "projects.expressVoitures.detailUI",
        titleChallengeKey: "projects.expressVoitures.titleChallenge",
        listChallengeKey: "projects.expressVoitures.listChallenge",
        titleSolutionKey: "projects.expressVoitures.titleSolution",
        listSolutionKey: "projects.expressVoitures.listSolution",
        linkKey: "projects.expressVoitures.link",
        image_diagram: loadImages("projects/project-2")["diagram.png"],
        image_top: loadImages("projects/project-2")["express_top.png"],
        image: loadImages("projects/project-2")["express.png"],
        link: "/projects/ExpressVoitures"
    },
    {
        id: "project-02",
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
