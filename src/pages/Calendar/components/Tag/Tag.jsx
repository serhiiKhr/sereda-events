import React from 'react';



import {STag} from "./Tag.styled";



function Tag({ text, type, selected, onClick }) {

    return (
        <STag selected={selected} type={type} onClick={() => onClick(type)}>{text}</STag>
    )
}

export default Tag;
