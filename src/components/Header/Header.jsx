import React from 'react';
import { useLocation, Link } from 'react-router-dom';


import { ROUTES } from "../../constants/routes";

import { Header as SHeader, LogoLink, LogoText, Nav, Ul, Li } from "./Header.styled"

function Header() {
    const location = useLocation();

    return (
        <SHeader>
            <LogoText>
                <LogoLink to={ROUTES.MAIN.path}>
                    LOGO
                </LogoLink>
            </LogoText>
            <Nav>
                <Ul style={{display: 'flex', listStyle: 'none', gap: '10px', padding: 0}}>
                    {
                        Object.values(ROUTES).map((route, i) => {
                            return  (
                                <Li key={i}>
                                    <Link to={route.path}
                                          className={location.pathname === `/${route.path}` ? 'active' : ''}>
                                        {route.name}
                                    </Link>
                                </Li>
                            )
                        })
                    }
                </Ul>
            </Nav>
        </SHeader>
    );
}

export default Header;
