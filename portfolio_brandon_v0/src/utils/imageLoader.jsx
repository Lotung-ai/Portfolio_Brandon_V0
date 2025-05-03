const images = import.meta.glob("/src/assets/**/*.{webp,png,jpg,jpeg,svg,mp4}", { eager: true });

export default function loadImages(folder) {
    const priority = ['webp', 'png', 'jpg', 'jpeg', 'svg', 'mp4'];
    const result = {};

    Object.entries(images)
        .filter(([key]) => key.includes(`/src/assets/${folder}/`))
        .forEach(([key, value]) => {
            const fileName = key.split('/').pop();
            const baseName = fileName.replace(/\.(webp|png|jpg|jpeg|svg|mp4)$/i, '');
            const ext = fileName.split('.').pop().toLowerCase();

            if (!result[baseName] || priority.indexOf(ext) < priority.indexOf(result[baseName].ext)) {
                result[baseName] = {
                    url: value.default,
                    ext: ext,
                };
            }
        });

    return Object.fromEntries(
        Object.entries(result).map(([name, { url }]) => [name, url])
    );
}
