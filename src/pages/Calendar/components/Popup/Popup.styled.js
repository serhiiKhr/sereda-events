import styled from 'styled-components';
import { rgba } from 'polished';


import {COLORS, getColor} from "../../../../constants/styled";

import Tag from "../Tag/Tag";


export const Container = styled.div`
    position: absolute;
    z-index: 1000;
    ${({ top }) => `top: ${top}px;`};
    ${({ left }) => `left: ${left}px;`};
    ${({ maxHeight }) => `max-height: ${maxHeight}px;`};
    box-shadow: 0px 4px 16px 0px ${rgba('#000000', 0.4)};
    background: ${COLORS.MAIN_BACKGROUND};
    //background: red;
    color: ${COLORS.MAIN_FONT};
    width: 360px;
    padding: 24px;
    box-sizing: border-box;
    overflow: auto;
`;

export const Title = styled.h1`
    color: ${COLORS.MAIN_FONT};
    font-size: 32px;
    font-weight: 250;
    line-height: 32px;
    border-bottom: 1px solid ${rgba(COLORS.ALERT, 0.16)};
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 26px;
`;

export const EventContainer = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid ${rgba(COLORS.ALERT, 0.16)};
`;
export const EventTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${COLORS.MAIN_FONT};
    margin-top: 0;
    margin-bottom: 12px;
`;
export const EventDescription = styled.p`
    font-weight: 250;
    font-size: 14px;
    line-height: 20px;
    color: ${COLORS.MAIN_FONT};
    margin-top: 0;
    margin-bottom: 12px;
`;

export const EventPlace = styled.h5`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${COLORS.SECONDARY_FONT};
    margin-top: 0;
    margin-bottom: 12px;
`;

export const EventBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const EventTime = styled.h5`
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: ${({ type }) => getColor(type)};
    margin-top: 0;
    margin-bottom: 0;
`;
export const STag = styled(Tag)`
    padding: 6px 10px;
    display: flex;
    align-items: center;
    align-self: center;
    font-size: 14px;
    line-height: 14px;
    max-width: 45%;
`;



export const Background = styled.div`
    position: fixed;
    background: ${rgba(0, 0, 0, 0)};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
`;
