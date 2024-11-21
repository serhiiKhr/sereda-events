import styled from 'styled-components';
import {rgba} from "polished";

import {BREAKPOINTS, COLORS} from "../../../../constants/styled";

import Month from "../Month/Month";

export const SMonth = styled(Month)`
    border-bottom: 1px solid ${rgba(COLORS.ALERT, 0.16)};
    padding: 23px 0 40px;

    &:nth-child(3n + 1) {
        padding-right: 14px;
        @media (max-width: ${BREAKPOINTS.tablet}px) {
            padding: 40px 0;
        }
    }

    &:nth-child(3n + 2) {
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
        @media (min-width: ${BREAKPOINTS.desktop}px) {
            &::before {
                content: '';
                position: absolute;
                top: 12px;
                left: 0;
                width: 1px;
                height: calc(100% - 12px * 2);
                background-color: ${rgba(COLORS.ALERT, 0.16)};
            }
            &::after {
                content: '';
                position: absolute;
                top: 12px;
                right: 0;
                width: 1px;
                height: calc(100% - 12px * 2);
                background-color: ${rgba(COLORS.ALERT, 0.16)};
            }
        }

        @media (max-width: ${BREAKPOINTS.tablet}px) {
            padding: 40px 0;
        }
    }

    @media (max-width: ${BREAKPOINTS.desktop}px) and (min-width: ${BREAKPOINTS.tablet}px) {
        &:nth-child(1n + 1) {
            padding: 23px 0 40px 14px;
            
        }
        &:nth-child(2n + 1) {
            padding: 23px 14px 40px 0;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                top: 12px;
                right: 0;
                width: 1px;
                height: calc(100% - 12px * 2);
                background-color: ${rgba(COLORS.ALERT, 0.16)};
            }
        }
    }

    &:nth-child(3n) {
        padding-left: 14px;

        @media (max-width: ${BREAKPOINTS.tablet}px) {
            padding: 40px 0;
        }
    }


    @media (min-width: ${BREAKPOINTS.desktop}px) {
        &:nth-last-child(-n + 3) {
            border-bottom: none;
        }
    }
   
    @media (max-width: ${BREAKPOINTS.desktop}px) and (min-width: ${BREAKPOINTS.tablet}px) {
        &:nth-last-child(-n + 2) {
            border-bottom: none;
        }
    }
    @media (max-width: ${BREAKPOINTS.tablet}px) {
        &:nth-last-child(-n + 1) {
            border-bottom: none;
        }
    }

    
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid ${rgba(COLORS.ALERT, 0.16)};
    padding-bottom: 22px;

    @media (max-width: ${BREAKPOINTS.desktop}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        grid-template-columns: 1fr;
    }
`;



const getHrStyles = (type) => {
    let styles = `
        display: none;
    `;
    switch (type) {
        case 'mobile':
            styles += `
                border-color: green;
                @media (max-width: ${BREAKPOINTS.tablet}px) {
                    display: block;
                    
                }
            `
            break;
        case 'tablet':
            styles += `
                border-color: yellow;
                @media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px) {
                    display: block;
                   
                }
            `
            break;
        case 'desktop':
            styles += `
                border-color: red;
                @media (min-width: ${BREAKPOINTS.desktop}px) {
                    display: block;
                    
                }
            `
            break;
        default:
            return '';
    }

    return styles;

}
export const Hr = styled.hr`
    ${({ type }) => getHrStyles(type)}
`;
