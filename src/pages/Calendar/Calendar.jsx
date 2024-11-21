import React, {useCallback} from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useLocation } from 'react-router-dom';

import { PageTitle } from '../../globalStyles'
import { TagsContainer } from "./Calendar.styled";

import Tag from "./components/Tag/Tag";
import CalendarItem from "./components/CalendarItem/CalendarItem";

import {getEventsQuery} from "../../queries/events";
import {getTagsQuery} from "../../queries/tags";

function Calendar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: events, error: eventsError, isLoading: eventsLoading } = useQuery(getEventsQuery());
    const { data: tags, error: tagsError, isLoading: tagsLoading } = useQuery(getTagsQuery());

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
            {
                !!tags && (
                    <TagsContainer>
                        {
                            tags.map((tag, i) => <Tag key={i} text={tag.text} type={tag.type} onClick={onTagClick} selected={isSelected(tag.type)} />)
                        }
                    </TagsContainer>
                )
            }



            <CalendarItem events={events || []} number={6} visibleEventTypes={types} dayClickHandler={dayClickHandler} />
        </section>
    );
}

export default Calendar;
