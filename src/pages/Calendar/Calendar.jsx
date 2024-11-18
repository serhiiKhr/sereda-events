import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { PageTitle } from '../../globalStyles'

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

    return (
        <section>
            <PageTitle>Calendar</PageTitle>
            <p>
                <strong>Selected:</strong> {selected}
            </p>
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
