
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
        titleAutKey: "projects.microservices.titleAut",
        detailAutKey: "projects.microservices.detailAut",
        titleFrontKey: "projects.microservices.titleFront",
        detailFrontKey: "projects.microservices.detailFront",
        titlePatientKey: "projects.microservices.titlePatient",
        detailPatientKey: "projects.microservices.detailPatient",
        titleNoteKey: "projects.microservices.titleNote",
        detailNoteKey: "projects.microservices.detailNote",
        titleReportKey: "projects.microservices.titleReport",
        detailReportKey: "projects.microservices.detailReport",
        titleGatewayKey: "projects.microservices.titleGateway",
        detailGatewayKey: "projects.microservices.detailGateway",
        titleDockerKey: "projects.microservices.titleDocker",
        detailDockerKey: "projects.microservices.detailDocker",
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
        titleKey: "projects.apiRestful.title",
        technologieKey: "projects.apiRestful.technologie",
        architectureKey: "projects.apiRestful.architecture",
        descriptionKey: "projects.apiRestful.description",
        image_top: loadImage["project1_top.png"], // Chargement via le loader
        image: loadImage["project1.png"], // Chargement via le loader
        link: "/projects/Project1"
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
