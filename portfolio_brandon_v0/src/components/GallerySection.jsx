import { motion } from "framer-motion";
import "../styles/components/gallery-section.css";

const GallerySection = (
    titleKey,
    names,
    imageMap,
    srcKey,
    t,
    hoverEffect = false,
    textKey = "",
    addLink = false,
    customLinks = null,
    wrapperClass = "gallery-list",
    itemWrapperClass = "gallery-items",
    logoBoxClass = "logo-box",
    imageClass = "logo-image",
    textClass = "logo-text"
) => {
    return (
        <div className={wrapperClass}>
            <h2>{t(titleKey)}</h2>
            <div className={itemWrapperClass}>
                {names.map((name, i) => {
                    const ItemWrapper = hoverEffect ? motion.div : "div";
                    const motionProps = hoverEffect
                        ? {
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            transition: { type: "spring", stiffness: 300 },
                        }
                        : {};

                    // Détermine le lien : soit customLinks[i], soit basé sur linkPrefix
                    const link =
                        customLinks && customLinks[i]
                            ? customLinks[i]
                            : `projects/project-${name}`;

                    const imageElement = (
                        <img
                            src={imageMap[`${srcKey}${name}.png`]}
                            alt={name}
                            className={imageClass}
                        />
                    );

                    return (
                        <ItemWrapper className={logoBoxClass} key={i} {...motionProps}>
                            {addLink ? (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {imageElement}
                                </a>
                            ) : (
                                imageElement
                            )}
                            <p className={textClass}>
                                {textKey === "" ? name : t(`${textKey}${name}`)}
                            </p>
                        </ItemWrapper>
                    );
                })}
            </div>
        </div>
    );
};

export default GallerySection;
