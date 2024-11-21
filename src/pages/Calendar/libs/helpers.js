import {WEEK_DAYS, WEEK_DAYS_SHORT} from "../../../constants/date";

export function generateYearMonthArray(startYear, startMonth, count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        const month = (startMonth + i - 1) % 12 + 1;
        const year = startYear + Math.floor((startMonth + i - 1) / 12);

        result.push({ year, month });
    }

    return result;
}

export function generateCalendar(year, month, firstDayOfWeek = 1) {
    const weeks = [];
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);

    const getAdjustedDay = (day) => (day - firstDayOfWeek + 7) % 7;

    const startOffset = getAdjustedDay(firstDayOfMonth.getDay());
    const endOffset = 6 - getAdjustedDay(lastDayOfMonth.getDay());

    const startDate = new Date(year, month, 1 - startOffset);
    const endDate = new Date(year, month, lastDayOfMonth.getDate() + endOffset);

    let currentDate = startDate;

    while (currentDate <= endDate) {
        const week = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate);
            week.push({
                date: date,
                isCurrentMonth: (month === date.getMonth()) || (month === 12 && date.getMonth() === 0)
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        weeks.push(week);
    }

    return weeks;
}

export const getDaysOfWeek = (firstDayIndex, type) => {
    let days;
    if (type === 'short') {
        days = WEEK_DAYS_SHORT;
    } else {
        days = WEEK_DAYS;
    }
    return [...days.slice(firstDayIndex), ...days.slice(0, firstDayIndex)];
}

export const getFormattedDate = (date) => {
    return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}
