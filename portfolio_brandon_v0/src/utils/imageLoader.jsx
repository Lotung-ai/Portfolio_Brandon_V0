const images = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,svg,mp4,webp}", { eager: true });

export default function loadImages(folder) {
    return Object.fromEntries(
        Object.entries(images)
            .filter(([key]) => key.includes(`/src/assets/${folder}/`)) // Filtre les images du bon dossier
            .map(([key, value]) => [key.replace(`/src/assets/${folder}/`, ""), value.default])
    );
}
