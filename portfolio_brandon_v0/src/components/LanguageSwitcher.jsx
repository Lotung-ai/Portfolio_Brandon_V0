import { useTranslation } from 'react-i18next';
import '../styles/components/language-switcher.css';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="language-switcher">
            {i18n.language === 'fr' ? (
                <button onClick={() => changeLanguage('en')}>English</button>
            ) : (
                <button onClick={() => changeLanguage('fr')}>Français</button>
            )}
        </div>
    );
}

export default LanguageSwitcher;
