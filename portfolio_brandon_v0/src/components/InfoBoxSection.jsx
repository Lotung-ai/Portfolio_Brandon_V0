import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../styles/components/infobox-section.css";

const InfoBoxesSection = ({
    titleKey,
    t,
    project,
    srckeys,
    fadeInUp,
    loadImage = {},
    arrowImageName,
}) => {

    return (
        <motion.div className="info-container">
            <h2 className="info-title">{t(titleKey)}</h2>
            <div className="info-boxes">
                {srckeys.map((key, index) => (
                    <motion.div
                        className="info-box"
                        custom={index}
                        variants={fadeInUp}
                        key={index}
                    >
                        {loadImage[arrowImageName] && (
                            <img
                                className="info-arrow"
                                src={loadImage[arrowImageName]}
                                alt="fleche"
                            />
                        )}

                        <motion.div
                            className="info-box-title"
                            custom={index}
                            variants={fadeInUp}
                        >
                            {t(project[`title${key}Key`])}
                        </motion.div>

                        <motion.div
                            className="info-box-text"
                            custom={index}
                            variants={fadeInUp}
                        >
                            {t(project[`detail${key}Key`])}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

InfoBoxesSection.propTypes = {
    titleKey: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    srckeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    fadeInUp: PropTypes.object,
    loadImage: PropTypes.object,
    arrowImageName: PropTypes.string,
};

export default InfoBoxesSection;
