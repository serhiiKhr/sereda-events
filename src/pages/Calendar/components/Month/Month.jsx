import React, {useCallback, useMemo, useRef} from 'react';

import {generateCalendar, getDaysOfWeek} from "../../libs/helpers"

import {MONTHS, WEEK_DAY_START} from "../../../../constants/date";

import {get} from "../../../../libs/helpers";

import { Container, WeekRow, DayCell, Title, Dots, Dot } from "./Month.styled"



function Month({ year, month, events, visibleEventTypes, dayClickHandler, ...rest }) {
    const dayCellRefs = useRef([]);
    const weeks = useCallback(() => generateCalendar(year, month, WEEK_DAY_START), [year, month])();
    const monthName = useCallback(() => {
        const index = month - 1;

        return MONTHS[index];
    }, [month])();
    const weekDays = useCallback(() => getDaysOfWeek(WEEK_DAY_START, 'short'), [])();
    const groupedEventsByDay = useMemo(() => {
        const eventsByDay = {};

        events.forEach(event => {
            const dayMonthYearKey = `${event.date.getDate()}`;
            if (!eventsByDay[dayMonthYearKey]) {
                eventsByDay[dayMonthYearKey] = [];
            }
            const types = eventsByDay[dayMonthYearKey].map(e => e.type);
            if (!types.includes(event.type)) {
                eventsByDay[dayMonthYearKey].push(event);
            }
        });

        return eventsByDay;
    }, [events]);

    const onDayClick = (day) => {
        if (!day.isCurrentMonth) {

            return;
        }
        dayClickHandler(day)
    };

    return (
        <Container {...rest}>
            <Title>{monthName}</Title>
            <WeekRow>
                {
                    weekDays.map((weekDay, i) => (
                        <DayCell
                            key={i}
                            type="disabled"
                        >
                            {weekDay}
                        </DayCell>
                    ))
                }
            </WeekRow>
            {weeks.map((week, i) => (
                <WeekRow key={i}>
                    {week.map(({ date, isCurrentMonth }, dayIndex) => {
                        const dayEvents = isCurrentMonth ? get(groupedEventsByDay, `${date.getDate()}`, []) : []
                        return (
                            <DayCell
                                key={dayIndex}
                                ref={(el) => {
                                    dayCellRefs.current[`${i}_${dayIndex}`] = el
                                }}
                                type={isCurrentMonth ? 'active' : 'disabled'}
                                onClick={() => onDayClick({ date, isCurrentMonth, ref: dayCellRefs.current[`${i}_${dayIndex}`] })}
                            >
                                {date.getDate()}

                                <Dots>
                                    {
                                        dayEvents
                                            .filter((event, index) => {
                                                if (!visibleEventTypes || !visibleEventTypes.length || visibleEventTypes.length === 0) {
                                                    return true;
                                                }

                                                return visibleEventTypes.includes(event.type);
                                            })
                                            .map((event, index) => <Dot key={`${dayIndex}_${index}`} type={event.type} />)
                                    }
                                </Dots>
                            </DayCell>
                        )
                    })}
                </WeekRow>
            ))}
        </Container>
    )
}

export default Month
