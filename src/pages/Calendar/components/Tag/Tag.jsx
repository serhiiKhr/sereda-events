import React from 'react';

import {STag} from "./Tag.styled";

function Tag({ text, type, selected, onClick, ...rest }) {

    return (
        <STag selected={selected} type={type} onClick={() => {onClick && onClick(type)}} {...rest}>{text}</STag>
    )
}

export default Tag;
