import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

import { BREAKPOINTS, COLORS } from "../../constants/styled"


export const SFooter = styled.footer`
    padding-top: 35px;
    margin-bottom: 18px;
`

export const LogoLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    line-height: 32px;
    font-size: 32px;
    color: ${COLORS.ALERT};
`;
export const LogoText = styled.h1`
    text-align: center;
    margin: 0 0 20px;
    @media (max-width: ${BREAKPOINTS.tablet}px) {
        margin-bottom: 16px;
    }
`;

export const Nav = styled.nav`
    margin-bottom: 24px;
`;
export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 40%;
    max-width: 365px;
    margin: 0 auto;
   
    padding: 0;

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        flex-direction: column;
    }
`;
export const Li = styled.li`
    list-style: none;
    a {
        text-decoration: none;
        color: ${COLORS.MAIN_FONT};
        font-size: 16px;
        line-height: 16px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        text-align: center;
        margin-bottom: 4px;
    }
`;

export const Copyright = styled.h5`
    margin: 0;
    font-size: 14px;
    line-height: 14px;
    font-weight: 300;
    text-align: center;
    color: ${COLORS.SECONDARY_FONT};
`;
