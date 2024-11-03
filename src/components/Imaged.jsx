import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

Imaged.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default function Imaged({ src, className, onClick }) {
    return (
            <LazyLoadImage
                alt="Juiceout"
                effect="opacity"
                placeholderSrc={src}
                onClick={onClick}
                className={className}
                src={src} />
    )
}
