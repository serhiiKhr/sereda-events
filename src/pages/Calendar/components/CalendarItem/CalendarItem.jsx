import React, {useCallback, useMemo} from 'react';
import {generateYearMonthArray} from "../../libs/helpers";

import {get} from "../../../../libs/helpers";

import {Row, SMonth} from "./CalendarItem.styled";


function CalendarItem({ number, dayClickHandler, events }) {
    const months = useCallback(() => {
            const currentDate = new Date();
            return generateYearMonthArray(currentDate.getFullYear(), currentDate.getMonth() + 1, number);
        },
        [number]
    )();
    const groupedEvents = useMemo(() => {
        const eventsByMonth = {};

        events.forEach(event => {
            event.date = new Date(event.date);
            const monthYearKey = `${event.date.getMonth() + 1}_${event.date.getFullYear()}`; // Месяц начинается с 0, поэтому +1
            if (!eventsByMonth[monthYearKey]) {
                eventsByMonth[monthYearKey] = [];
            }
            eventsByMonth[monthYearKey].push(event);
        });

        return eventsByMonth;
    }, [events]);

    return (
        <Row>
            {
                months.map(({ year, month }, i) => {
                    const monthEvents = get(groupedEvents, `${month + 1}_${year}`, []);
                    return (
                        <SMonth key={`${i}`} month={month} year={year} dayClickHandler={dayClickHandler} events={monthEvents} />
                    )
                })
            }
        </Row>
    )
}

export default CalendarItem;
