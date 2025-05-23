﻿import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../styles/components/gallery-section.css";

const GallerySection = ({
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
}) => {
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

                    const imageSrc = imageMap[`${srcKey}${name}`] || "";

                    const imageElement = (
                        <img src={imageSrc} alt={name} className={imageClass} />
                    );


                    return (
                        <ItemWrapper className={logoBoxClass} key={i} {...motionProps}>
                            {addLink ? (
                                <a
                                    href={link}
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

GallerySection.propTypes = {
    titleKey: PropTypes.string.isRequired,
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageMap: PropTypes.object.isRequired,
    srcKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
    hoverEffect: PropTypes.bool,
    textKey: PropTypes.string,
    addLink: PropTypes.bool,
    customLinks: PropTypes.array,
    wrapperClass: PropTypes.string,
    itemWrapperClass: PropTypes.string,
    logoBoxClass: PropTypes.string,
    imageClass: PropTypes.string,
    textClass: PropTypes.string,
};

export default GallerySection;
