import React, {useCallback} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { PageTitle } from '../../globalStyles'
import { TagsContainer } from "./Calendar.styled";

import Tag from "./components/Tag/Tag";
import CalendarItem from "./components/CalendarItem/CalendarItem";

const TAGS = [
    { text: 'Meeting with an expert', type: 'alert' },
    { text: 'Question-answer', type: 'success' },
    { text: 'Conference', type: 'warning' },
    { text: 'Webinar', type: 'info' },
]

const events = [
    { id: 1, name: "Event 206", description: "Product Launch", place: "Conference Hall", date: new Date("2025-01-16T16:48:25"), type: "alert" },
    { id: 2, name: "Event 928", description: "Weekend Get-Together", place: "Conference Hall", date: new Date("2024-12-18T16:48:25"), type: "alert" },
    { id: 3, name: "Event 476", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-01-22T16:48:25"), type: "alert" },
    { id: 4, name: "Event 458", description: "Annual Conference on Technology", place: "Auditorium", date: new Date("2025-01-29T16:48:25"), type: "alert" },
    { id: 5, name: "Event 598", description: "Product Launch", place: "Online Webinar", date: new Date("2024-12-01T16:48:25"), type: "warning" },
    { id: 6, name: "Event 16", description: "Outdoor Excursion", place: "Auditorium", date: new Date("2024-12-02T16:48:25"), type: "warning" },
    { id: 7, name: "Event 855", description: "Employee Training", place: "Meeting Room", date: new Date("2024-12-07T16:48:25"), type: "info" },
    { id: 8, name: "Event 279", description: "Employee Training", place: "Online Webinar", date: new Date("2025-03-20T16:48:25"), type: "alert" },
    { id: 9, name: "Event 357", description: "Employee Training", place: "Outdoor Park", date: new Date("2025-01-24T16:48:25"), type: "info" },
    { id: 10, name: "Event 545", description: "Annual Conference on Technology", place: "Online Webinar", date: new Date("2025-05-02T16:48:25"), type: "info" },
    { id: 11, name: "Event 219", description: "Outdoor Excursion", place: "Conference Hall", date: new Date("2025-02-26T16:48:25"), type: "info" },
    { id: 12, name: "Event 916", description: "Outdoor Excursion", place: "Outdoor Park", date: new Date("2025-03-09T16:48:25"), type: "info" },
    { id: 13, name: "Event 174", description: "Product Launch", place: "Online Webinar", date: new Date("2025-01-01T16:48:25"), type: "success" },
    { id: 14, name: "Event 925", description: "Employee Training", place: "Conference Hall", date: new Date("2025-03-13T16:48:25"), type: "info" },
    { id: 15, name: "Event 662", description: "Weekend Get-Together", place: "Online Webinar", date: new Date("2024-12-15T16:48:25"), type: "alert" },
    { id: 16, name: "Event 88", description: "Employee Training", place: "Meeting Room", date: new Date("2025-04-04T16:48:25"), type: "warning" },
    { id: 17, name: "Event 283", description: "Product Launch", place: "Auditorium", date: new Date("2025-01-03T16:48:25"), type: "success" },
    { id: 18, name: "Event 557", description: "Product Launch", place: "Online Webinar", date: new Date("2025-03-12T16:48:25"), type: "info" },
    { id: 19, name: "Event 343", description: "Product Launch", place: "Conference Hall", date: new Date("2025-04-30T16:48:25"), type: "info" },
    { id: 20, name: "Event 734", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-02-25T16:48:25"), type: "warning" },
    { id: 21, name: "Event 248", description: "Employee Training", place: "Conference Hall", date: new Date("2025-05-05T16:48:25"), type: "info" },
    { id: 22, name: "Event 535", description: "Team Building Event", place: "Outdoor Park", date: new Date("2024-12-13T16:48:25"), type: "info" },
    { id: 23, name: "Event 176", description: "Annual Conference on Technology", place: "Auditorium", date: new Date("2025-03-01T16:48:25"), type: "alert" },
    { id: 24, name: "Event 399", description: "Weekend Get-Together", place: "Online Webinar", date: new Date("2024-12-30T16:48:25"), type: "success" },
    { id: 25, name: "Event 15", description: "Team Building Event", place: "Outdoor Park", date: new Date("2025-04-01T16:48:25"), type: "info" },
    { id: 26, name: "Event 97", description: "Annual Conference on Technology", place: "Online Webinar", date: new Date("2025-01-18T16:48:25"), type: "success" },
    { id: 27, name: "Event 344", description: "Employee Training", place: "Conference Hall", date: new Date("2025-04-18T16:48:25"), type: "warning" },
    { id: 28, name: "Event 99", description: "Outdoor Excursion", place: "Auditorium", date: new Date("2025-03-28T16:48:25"), type: "info" },
    { id: 29, name: "Event 55", description: "Product Launch", place: "Outdoor Park", date: new Date("2025-04-19T16:48:25"), type: "alert" },
    { id: 30, name: "Event 912", description: "Team Building Event", place: "Meeting Room", date: new Date("2025-05-10T16:48:25"), type: "warning" },
    { id: 31, name: "Event 833", description: "Product Launch", place: "Conference Hall", date: new Date("2024-12-13T16:48:25"), type: "info" },
    { id: 32, name: "Event 256", description: "Employee Training", place: "Outdoor Park", date: new Date("2025-05-02T16:48:25"), type: "info" },
    { id: 33, name: "Event 712", description: "Outdoor Excursion", place: "Meeting Room", date: new Date("2025-02-10T16:48:25"), type: "warning" },
    { id: 34, name: "Event 148", description: "Product Launch", place: "Auditorium", date: new Date("2025-03-15T16:48:25"), type: "success" },
    { id: 35, name: "Event 688", description: "Product Launch", place: "Online Webinar", date: new Date("2025-04-12T16:48:25"), type: "info" },
    { id: 36, name: "Event 441", description: "Annual Conference on Technology", place: "Meeting Room", date: new Date("2025-05-11T16:48:25"), type: "alert" },
    { id: 37, name: "Event 743", description: "Outdoor Excursion", place: "Outdoor Park", date: new Date("2025-02-22T16:48:25"), type: "info" },
    { id: 38, name: "Event 809", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-04-15T16:48:25"), type: "warning" },
    { id: 39, name: "Event 950", description: "Team Building Event", place: "Outdoor Park", date: new Date("2025-03-27T16:48:25"), type: "success" },
    { id: 40, name: "Event 110", description: "Employee Training", place: "Conference Hall", date: new Date("2025-05-04T16:48:25"), type: "alert" },
    { id: 41, name: "Event 401", description: "Product Launch", place: "Online Webinar", date: new Date("2025-01-04T16:48:25"), type: "alert" },
    { id: 42, name: "Event 510", description: "Employee Training", place: "Auditorium", date: new Date("2025-01-06T16:48:25"), type: "warning" },
    { id: 43, name: "Event 602", description: "Outdoor Excursion", place: "Conference Hall", date: new Date("2025-01-09T16:48:25"), type: "info" },
    { id: 44, name: "Event 78", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-01-10T16:48:25"), type: "success" },
    { id: 45, name: "Event 433", description: "Annual Conference on Technology", place: "Meeting Room", date: new Date("2025-01-12T16:48:25"), type: "alert" },
    { id: 46, name: "Event 192", description: "Product Launch", place: "Online Webinar", date: new Date("2025-01-15T16:48:25"), type: "warning" },
    { id: 47, name: "Event 775", description: "Employee Training", place: "Outdoor Park", date: new Date("2025-01-18T16:48:25"), type: "info" },
    { id: 48, name: "Event 563", description: "Outdoor Excursion", place: "Auditorium", date: new Date("2025-01-20T16:48:25"), type: "success" },
    { id: 49, name: "Event 341", description: "Product Launch", place: "Meeting Room", date: new Date("2025-01-23T16:48:25"), type: "alert" },
    { id: 50, name: "Event 213", description: "Weekend Get-Together", place: "Conference Hall", date: new Date("2025-01-25T16:48:25"), type: "info" },
    { id: 51, name: "Event 760", description: "Product Launch", place: "Online Webinar", date: new Date("2025-02-01T16:48:25"), type: "success" },
    { id: 52, name: "Event 605", description: "Employee Training", place: "Auditorium", date: new Date("2025-02-03T16:48:25"), type: "warning" },
    { id: 53, name: "Event 814", description: "Team Building Event", place: "Outdoor Park", date: new Date("2025-02-06T16:48:25"), type: "info" },
    { id: 54, name: "Event 156", description: "Annual Conference on Technology", place: "Conference Hall", date: new Date("2025-02-10T16:48:25"), type: "alert" },
    { id: 55, name: "Event 442", description: "Employee Training", place: "Meeting Room", date: new Date("2025-02-12T16:48:25"), type: "info" },
    { id: 56, name: "Event 278", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-02-14T16:48:25"), type: "success" },
    { id: 57, name: "Event 888", description: "Weekend Get-Together", place: "Auditorium", date: new Date("2025-02-16T16:48:25"), type: "info" },
    { id: 58, name: "Event 902", description: "Product Launch", place: "Outdoor Park", date: new Date("2025-02-20T16:48:25"), type: "alert" },
    { id: 59, name: "Event 94", description: "Employee Training", place: "Conference Hall", date: new Date("2025-02-23T16:48:25"), type: "warning" },
    { id: 60, name: "Event 711", description: "Outdoor Excursion", place: "Online Webinar", date: new Date("2025-02-26T16:48:25"), type: "info" },
    { id: 61, name: "Event 317", description: "Team Building Event", place: "Meeting Room", date: new Date("2025-03-02T16:48:25"), type: "alert" },
    { id: 62, name: "Event 439", description: "Product Launch", place: "Conference Hall", date: new Date("2025-03-05T16:48:25"), type: "success" },
    { id: 63, name: "Event 644", description: "Weekend Get-Together", place: "Auditorium", date: new Date("2025-03-09T16:48:25"), type: "info" },
    { id: 64, name: "Event 128", description: "Employee Training", place: "Outdoor Park", date: new Date("2025-03-11T16:48:25"), type: "warning" },
    { id: 65, name: "Event 842", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-03-13T16:48:25"), type: "info" },
    { id: 66, name: "Event 986", description: "Annual Conference on Technology", place: "Meeting Room", date: new Date("2025-03-16T16:48:25"), type: "alert" },
    { id: 67, name: "Event 681", description: "Product Launch", place: "Conference Hall", date: new Date("2025-03-19T16:48:25"), type: "info" },
    { id: 68, name: "Event 975", description: "Employee Training", place: "Online Webinar", date: new Date("2025-03-22T16:48:25"), type: "success" },
    { id: 69, name: "Event 130", description: "Outdoor Excursion", place: "Outdoor Park", date: new Date("2025-03-25T16:48:25"), type: "info" },
    { id: 70, name: "Event 560", description: "Team Building Event", place: "Auditorium", date: new Date("2025-03-28T16:48:25"), type: "alert" },
    { id: 71, name: "Event 74", description: "Product Launch", place: "Online Webinar", date: new Date("2025-04-01T16:48:25"), type: "warning" },
    { id: 72, name: "Event 902", description: "Employee Training", place: "Conference Hall", date: new Date("2025-04-04T16:48:25"), type: "info" },
    { id: 73, name: "Event 34", description: "Weekend Get-Together", place: "Outdoor Park", date: new Date("2025-04-07T16:48:25"), type: "success" },
    { id: 74, name: "Event 422", description: "Team Building Event", place: "Meeting Room", date: new Date("2025-04-10T16:48:25"), type: "alert" },
    { id: 75, name: "Event 671", description: "Outdoor Excursion", place: "Online Webinar", date: new Date("2025-04-13T16:48:25"), type: "warning" },
    { id: 76, name: "Event 216", description: "Product Launch", place: "Conference Hall", date: new Date("2025-04-16T16:48:25"), type: "info" },
    { id: 77, name: "Event 345", description: "Team Building Event", place: "Online Webinar", date: new Date("2025-04-19T16:48:25"), type: "info" },
    { id: 78, name: "Event 526", description: "Employee Training", place: "Auditorium", date: new Date("2025-04-22T16:48:25"), type: "alert" },
    { id: 79, name: "Event 602", description: "Weekend Get-Together", place: "Outdoor Park", date: new Date("2025-04-25T16:48:25"), type: "info" },
    { id: 80, name: "Event 987", description: "Outdoor Excursion", place: "Meeting Room", date: new Date("2025-04-28T16:48:25"), type: "warning" }

    ];

function Calendar() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const selected = queryParams.get('selected') || 'none';
    const types = queryParams.get('types')?.split(',').filter(f => !!`${f}`) || [];

    const handleNavigation = (params) => {
        const nextParams = new URLSearchParams(params).toString();
        navigate(`?${nextParams}`);
    };

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

    const dayClickHandler = (day) => {
        console.log('day', day)
    }

    return (
        <section>
            <PageTitle>Calendar</PageTitle>
            <TagsContainer>
                {
                    TAGS.map((tag, i) => <Tag key={i} text={tag.text} type={tag.type} onClick={onTagClick} selected={isSelected(tag.type)} />)
                }
            </TagsContainer>


            <CalendarItem events={events} number={6} visibleEventTypes={types} dayClickHandler={dayClickHandler} />
        </section>
    );
}

export default Calendar;
