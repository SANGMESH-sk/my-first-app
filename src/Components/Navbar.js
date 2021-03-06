import react from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NavbarFunction = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="counter">Counter </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Weather">Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TextForm">TextForm</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Display">Employe Api</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    )

}
NavbarFunction.propTypes = {
    title: PropTypes.string
}
NavbarFunction.defaultProps = {
    title: "set title "

}

export default NavbarFunction;