import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'

function Layout(props) {

    return (
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand-margin" to="/">
                    <span className="font-weight-light">SIWRL</span>
                </Link>
                <Link className="Navbar__brand" to="/ambientes">
                    <span className="font-weight-light">USUARIOS</span>
                </Link>
                <Link className="Navbar__brand" to="/marcas">
                    <span className="font-weight-light">MARCAS</span>
                </Link>
                <Link className="Navbar__brand" to="/geneticas">
                    <span className="font-weight-light">GENÉTICAS</span>
                </Link>
                <Link className="Navbar__brand" to="/prototipos">
                    <span className="font-weight-light">PROTOTIPOS</span>
                </Link>
                <Link className="Navbar__brand" to="/ambientes">
                    <span className="font-weight-light">AMBIENTES</span>
                </Link>
            </div>
        </div>
    );
}

export default Layout;
/*
if (document.getElementById('main')) {
    ReactDOM.render(<Layout />, document.getElementById('main'));
}*/
