import styled from 'styled-components';
import { rgba } from 'polished';


import {COLORS, getColor} from "../../../../constants/styled";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 22px;
    padding-bottom: 58px;
`;

export const Title = styled.h1`
    font-weight: 100;
    font-size: 32px;
    line-height: 32px;
    color: ${COLORS.MAIN_FONT};
    margin-top: 0;
    margin-bottom: 16px;
    
`

export const WeekRow = styled.div`
    display: flex;
`;

export const DayCell = styled.div`
    flex: 1;
    padding: 9px 8px;
    text-align: center;
    position: relative;
    ${({ type }) => type === 'active' ? `color: ${COLORS.MAIN_FONT}; cursor: pointer;` : `color: ${COLORS.SECONDARY_FONT};`}
`;

export const Dots = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
`;
export const Dot = styled.span`
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 4px;
    ${({ type }) => `background: ${getColor(type)};`}
    
    &:not(:last-child) {
        margin-right: 2px;
    }
`;
