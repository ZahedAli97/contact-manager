import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-9">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {props.heading}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home" />
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">
                                <i className="fas fa-plus" />
                                Add
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <i className="fas fa-question" />
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


Header.defaultProps = {
    heading: "My App",
}

Header.propTypes = {
    heading: PropTypes.string.isRequired
}