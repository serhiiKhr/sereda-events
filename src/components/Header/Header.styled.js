import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

import { BREAKPOINTS, COLORS } from "../../constants/styled"

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-height: 70px;
    margin-bottom: 32px;
    align-items: center;
    border-bottom: 1px solid ${rgba(COLORS.ALERT, 0.16)};
    

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        flex-direction: column;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        
    }
`;
export const LogoLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    line-height: 24px;
    font-size: 24px;
    color: ${COLORS.ALERT};
`;
export const LogoText = styled.h2`
    margin: 0;
    @media (max-width: ${BREAKPOINTS.tablet}px) {
        margin-bottom: 16px;
    }
`;
export const Nav = styled.nav`
    align-items: center;
    align-self: center;
    display: flex;
    height: 100%;
`;
export const Ul = styled.ul`
    margin: unset;
    display: flex;
    height: 100%;
    align-items: center;
    
    @media (max-width: ${BREAKPOINTS.mobile}px) {
        flex-direction: column;
    }
`;
export const Li = styled.li`
    font-weight: 100;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    height: 100%;
    align-items: center;
    a {
        display: flex;
        height: 100%;
        align-items: center;
        color: ${COLORS.MAIN_FONT};
        text-decoration: none;
        &.active {
            border-bottom: 1px solid ${COLORS.ALERT};
        }
    }
    &:not(:last-child) {
        margin-right: 72px;
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        margin-bottom: 4px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        &:not(:last-child) {
            margin-right: unset;
        }
       
    }
`;
