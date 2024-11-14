import React from 'react';
import { useLocation, Link } from 'react-router-dom';


import { ROUTES } from "../../helpers/constants";

function Header() {
    const location = useLocation();

    return (
        <header style={{backgroundColor: '#f8f9fa', padding: '10px 20px'}}>
            <h1>Header</h1>
            <nav>
                <ul style={{display: 'flex', listStyle: 'none', gap: '10px', padding: 0}}>
                    {
                        ROUTES.map((route, i) => (
                            <li key={i}>
                                <Link to={route.path}
                                      style={{textDecoration: location.pathname === `/${route.path}` ? 'underline' : 'none'}}>
                                    {route.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <p>Current Route: {location.pathname}</p>
        </header>
    );
}

export default Header;
