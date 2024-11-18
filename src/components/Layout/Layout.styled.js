import styled from 'styled-components';

import {BREAKPOINTS, COLORS} from '../../constants/styled'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 16px;
    background: ${COLORS.MAIN_BACKGROUND};
    
    @media (max-width: ${BREAKPOINTS.tablet}px) {
        padding: 0 12px;
    }

    @media (max-width: ${BREAKPOINTS.mobile}px) {
        padding: 0 8px;
    }
`
export const Container = styled.div`
    max-width: 1128px;
    width: 100%;
    margin: 0 auto;
    
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    box-sizing: border-box;
  
   
`;

export const Main = styled.main`
    margin-bottom: auto;
`
