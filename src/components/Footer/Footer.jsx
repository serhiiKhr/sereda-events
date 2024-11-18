import React from 'react';
import { Link } from 'react-router-dom';


import { ROUTES } from "../../constants/routes";


import {SFooter, LogoText,  LogoLink, Nav, Ul, Li, Copyright} from "./Footer.styled";


function Footer() {

    return (
        <SFooter>

            <LogoText>
                <LogoLink to={ROUTES.MAIN.path}>
                    LOGO
                </LogoLink>
            </LogoText>

            <Nav>
                <Ul>
                    {
                        Object.values(ROUTES).map((route, i) => (
                            <Li key={i}>
                                <Link to={route.path}>
                                    {route.name}
                                </Link>
                            </Li>
                        ))
                    }
                </Ul>
            </Nav>

            <Copyright>© 2022 All rights reserved</Copyright>
        </SFooter>
    );
}

export default Footer;
