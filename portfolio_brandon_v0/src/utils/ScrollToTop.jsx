import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Remet le scroll en haut à chaque changement de page
    }, [pathname]);

    return null;
};

export default ScrollToTop;
