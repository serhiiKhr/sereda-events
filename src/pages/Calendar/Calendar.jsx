import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { PageTitle } from '../../globalStyles'
import { TagsContainer } from "./Calendar.styled";

import Tag from "./components/Tag/Tag";

const TAGS = [
    { text: 'Meeting with an expert', type: 'alert' },
    { text: 'Question-answer', type: 'success' },
    { text: 'Conference', type: 'warning' },
    { text: 'Webinar', type: 'info' },
]

function Calendar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Извлекаем текущие query-параметры
    const queryParams = new URLSearchParams(location.search);
    const selected = queryParams.get('selected') || 'none';
    const types = queryParams.get('types')?.split(',') || [];

    const handleNavigation = (params) => {
        const nextParams = new URLSearchParams(params).toString();
        navigate(`?${nextParams}`);
    };

    const reset = () => {
        navigate(`?`);
    }

    const onTagClick = (type) => {
        if (isSelected(type)) {
            const nextTypes = types.filter(t => t !== type);
            handleNavigation({
                ...queryParams,
                types: nextTypes
            });
        } else {
            handleNavigation({
                ...queryParams,
                types: [
                    ...types,
                    type
                ]
            });
        }
    }

    const isSelected = (type) => {
        return types.includes(type);
    }

    return (
        <section>
            <PageTitle>Calendar</PageTitle>
            <TagsContainer>
                {
                    TAGS.map((tag, i) => <Tag key={i} text={tag.text} type={tag.type} onClick={onTagClick} selected={isSelected(tag.type)} />)
                }
            </TagsContainer>
            <p>
                <strong>Types:</strong> {types.length > 0 ? types.join(', ') : 'None'}
            </p>

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() =>
                        handleNavigation({ selected: '20.02.2000', types: ['type1', 'type2'] })
                    }
                >
                    20.02.2000 with types
                </button>
                <button
                    onClick={() =>
                        handleNavigation({ selected: '22.12.2020' })
                    }
                >
                    22.12.2020
                </button>
                <button onClick={reset}>Reset</button>
            </div>
        </section>
    );
}

export default Calendar;
