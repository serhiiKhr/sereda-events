import React from 'react';
import { Link } from 'react-router-dom';


import {ROUTES} from "../../helpers/constants";

function Footer() {

    return (
        <footer style={{backgroundColor: '#f8f9fa', padding: '10px 20px', marginTop: '20px'}}>
            <h1>Footer</h1>

            <nav>
                <ul style={{display: 'flex', listStyle: 'none', gap: '10px', padding: 0}}>
                    {
                        ROUTES.map((route, i) => (
                            <li key={i}>
                                <Link to={route.path}>
                                    {route.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
