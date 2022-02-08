import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Breadcrumb({ currentPage }) {
    return (
        <nav className="mt-3" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </nav>
    )
}

Breadcrumb.propTypes = {
    currentPage: PropTypes.string
};

export default Breadcrumb