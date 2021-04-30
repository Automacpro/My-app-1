import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
    return (
        <div className="navbar bg-primary">
            <h3>
                <i className={icon}></i> {title}
            </h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    );
};

// Navbar.propTypes = {
//     icon: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// };

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt",
};
export default Navbar;
