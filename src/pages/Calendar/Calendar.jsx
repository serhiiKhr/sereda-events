import React, {useCallback, useState, useRef} from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useLocation } from 'react-router-dom';

import {getEventsQuery} from "../../queries/events";
import {getTagsQuery} from "../../queries/tags";

import { get } from '../../libs/helpers';

import { PageTitle } from '../../globalStyles'
import { TagsContainer } from "./Calendar.styled";

import Tag from "./components/Tag/Tag";
import CalendarItem from "./components/CalendarItem/CalendarItem";
import Popup from "./components/Popup/Popup";



const initialPopupOptions = {
    visible: false,
    top: 0,
    left: 0,
    maxHeight: 0,
    eventIds: []
}
function Calendar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: events, error: eventsError, isLoading: eventsLoading } = useQuery(getEventsQuery());
    const { data: tags, error: tagsError, isLoading: tagsLoading } = useQuery(getTagsQuery());
    const [popupOptions, setPopupOptions] = useState(initialPopupOptions);


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
        const rect = day.ref.getBoundingClientRect();
        const top = rect.bottom + window.scrollY;
        const left = rect.left + window.scrollX;

        const popupWidth = 360;
        const windowWidth = window.innerWidth;

        const adjustedLeft = left + popupWidth > windowWidth ? left - popupWidth : left;

        const events = get(day, ['events'], []);
        const scrollHeight = get(document, ['documentElement', 'scrollHeight'], 0);
        if (events && events.length && events.length > 0) {
            setPopupOptions({
                visible: true,
                top,
                left: adjustedLeft,
                maxHeight: scrollHeight - (rect.bottom + window.scrollY),
                eventIds: events.map(e => e.id)
            })
        } else {
            handleClosePopup();
        }

    }

    const handleClosePopup = () => {
        setPopupOptions(initialPopupOptions);
    };

    return (
        <section>
            <PageTitle>Calendar</PageTitle>
            {
                !!tags && (
                    <TagsContainer>
                        {
                            tags.map((tag, i) => <Tag key={i} text={tag.text} type={tag.type} onClick={onTagClick} selected={isSelected(tag.type)} />)
                        }
                    </TagsContainer>
                )
            }


            {popupOptions.visible && <Popup top={popupOptions.top} left={popupOptions.left} maxHeight={popupOptions.maxHeight} eventIds={popupOptions.eventIds} onBGClick={handleClosePopup} />  }
            <CalendarItem events={events || []} number={6} visibleEventTypes={types} dayClickHandler={dayClickHandler} />
        </section>
    );
}

export default Calendar;
