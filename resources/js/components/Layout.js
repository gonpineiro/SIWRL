import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Layout.css'

function Layout(props) {

    return (
        <React.Fragment>

            <nav className="main-menu" id="main-menu">
                <ul>
                    <li>
                        <Link to="/users">
                            <i className="fa fa-user fa-2x"></i>
                            <span className="nav-text">Usuarios</span>
                        </Link>

                    </li>
                    <li className="has-subnav">
                        <Link to="/marcas">
                            <i className="fa fa-book fa-2x"></i>
                            <span className="nav-text">Marcas</span>
                        </Link>

                    </li>
                    <li className="has-subnav">
                        <Link to="/geneticas">
                            <i className="fa fa-list fa-2x"></i>
                            <span className="nav-text">Genéticas</span>
                        </Link>

                    </li>
                    <li className="has-subnav">
                        <Link to="/prototipos">
                            <i className="fa fa-bar-chart-o fa-2x"></i>
                            <span className="nav-text">Prototipos</span>
                        </Link>

                    </li>
                    <li>
                        <Link to="/ambientes">
                            <i className="fa fa-folder-open fa-2x"></i>
                            <span className="nav-text">Ambientes</span>
                        </Link>
                    </li>
                </ul>

                <ul className="logout">
                    <li>
                        <a href="/#">
                            <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </React.Fragment>
    );
}

export default Layout;
/*
if (document.getElementById('main')) {
    ReactDOM.render(<Layout />, document.getElementById('main'));
}*/
