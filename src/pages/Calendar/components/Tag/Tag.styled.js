import styled from 'styled-components';
import { rgba } from 'polished';

import { BREAKPOINTS, COLORS, getColor } from "../../../../constants/styled";

export const STag = styled.div`
    background-color: ${({ type, selected }) => {
        const color = getColor(type);
        
        if (selected) {
            return color;
        }
        
        return rgba(color, 0.16);
    }};
    color: ${({ type, selected }) => {
        if (!selected) {
            return getColor(type);
        }
        
        return COLORS.MAIN_BACKGROUND;
    }};
    padding: 4px 16px;
    border-radius: 16px;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    &:not(:last-child) {
        margin-right: 24px;
    }

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        margin-bottom: 16px;
    }
`;
