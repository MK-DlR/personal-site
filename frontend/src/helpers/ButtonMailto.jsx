// src/helpers/ButtonMailto.jsx

// imports
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label, className }) => {
    return (
        <Link
            to='#'
            className={className}
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;
