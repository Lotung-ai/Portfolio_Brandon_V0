const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,.<>?";
const kanjis = "私について"; // 🔹 Kanjis intégrés dans l'effet de décryptage

const DecryptAnimation = (finalText, setDisplayText, duration) => {
    let iterations = 0;
    const intervalTime = duration * 900 / finalText.length; // Temps de transition par lettre

    let currentText = Array(finalText.length).fill(" "); // Commence vide
    let interval = setInterval(() => {
        if (iterations >= finalText.length) {
            clearInterval(interval);
            setDisplayText(finalText); // 🔹 Affiche le texte final une fois terminé
            return;
        }

        for (let i = 0; i < finalText.length; i++) {
            if (i < iterations) {
                currentText[i] = finalText[i]; // 🔹 Fixe les lettres déjà déchiffrées
            } else {
                // 🔹 Mélange caractères aléatoires, kanjis et bruit
                const useKanji = Math.random() > 0.6; // Probabilité d'afficher un kanji
                currentText[i] = useKanji ? kanjis[Math.floor(Math.random() * kanjis.length)] : characters[Math.floor(Math.random() * characters.length)];
            }
        }

        setDisplayText(currentText.join("")); // 🔹 Met à jour l'affichage progressif
        iterations++;
    }, intervalTime);
};

export default DecryptAnimation;
