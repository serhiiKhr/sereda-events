import styled from 'styled-components';
import { rgba } from 'polished';

import { BREAKPOINTS, COLORS } from "../../constants/styled"

export const TagsContainer = styled.div`
    border-bottom: 1px solid ${rgba(COLORS.ALERT, 0.16)};
    padding-bottom: 40px;
`;
