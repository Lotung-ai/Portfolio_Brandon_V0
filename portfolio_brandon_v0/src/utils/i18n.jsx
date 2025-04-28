import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import enTranslation from '../assets/languages/en.json';
import frTranslation from '../assets/languages/fr.json';
//import frTranslation from '../assets/languages/fr.json';

i18n
    .use(initReactI18next) // Passer i18next au React
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            }
        },
        lng: 'fr', // Langue par d�faut
        fallbackLng: 'en', // Si une traduction n'est pas disponible dans la langue active, utiliser l'anglais
        interpolation: {
            escapeValue: false, // React g�re d�j� l'�chappement des caract�res
        },
    });

export default i18n;
